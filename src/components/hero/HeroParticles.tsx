import React, { useEffect, useRef, useCallback } from 'react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

// Detect mobile once at module level (avoids repeated matchMedia calls in RAF)
const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches;

const CONFIG = {
    enabled: true,
    maxParticles: 100,          // Hard cap — keeps CPU usage low
    ambientRateMs: isMobile ? 800 : 400, // Spawn half as often on mobile
    clusterChance: 0.3,
    opacity: 0.28,
    particleLife: 150,
    blur: 5.5,
    minHue: 200,
    maxHue: 320,
    minSize: 1.2,
    maxSize: 4,
    velocityScale: 0.4,
};

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    life: number;
    maxLife: number;
    hue: number;
    alpha: number;
    active: boolean;
}

export const HeroParticles: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particles = useRef<Particle[]>([]);
    const lastAmbientSpawnTime = useRef<number>(0);
    const containerRef = useRef<HTMLDivElement>(null);

    // Both flags must be true for the RAF loop to run
    const isHeroVisible = useRef(true);   // IntersectionObserver — hero on screen?
    const isTabVisible = useRef(!document.hidden); // Page Visibility API — tab active?

    const rafId = useRef<number>(0);
    const isBooted = useRef(false);

    const prefersReducedMotion = usePrefersReducedMotion();

    // ----- Particle pool initialisation (run once) -----
    useEffect(() => {
        particles.current = Array.from({ length: CONFIG.maxParticles }, () => ({
            x: 0, y: 0, vx: 0, vy: 0, radius: 0, life: 0, maxLife: 0, hue: 0, alpha: 0, active: false,
        }));

        // Defer boot so the initial page paint isn't disrupted
        const timer = setTimeout(() => { isBooted.current = true; }, 2000);
        return () => clearTimeout(timer);
    }, []);

    // ----- Canvas resize -----
    const resize = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        const ctx = canvas.getContext('2d');
        if (ctx) ctx.scale(dpr, dpr);
    }, []);

    useEffect(() => {
        resize();
        window.addEventListener('resize', resize);
        return () => window.removeEventListener('resize', resize);
    }, [resize]);

    // ----- IntersectionObserver — pause when hero scrolls off screen -----
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { isHeroVisible.current = entry.isIntersecting; },
            { threshold: 0 }
        );
        if (containerRef.current) observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    // ----- Page Visibility API — pause on hidden/background tab -----
    useEffect(() => {
        const handleVisibility = () => {
            isTabVisible.current = document.visibilityState === 'visible';
        };
        document.addEventListener('visibilitychange', handleVisibility);
        return () => document.removeEventListener('visibilitychange', handleVisibility);
    }, []);

    // ----- Spawn helper -----
    const spawnParticle = useCallback((x: number, y: number, isAmbient = false) => {
        const p = particles.current.find(p => !p.active);
        if (!p) return; // Pool full

        const hue = CONFIG.minHue + Math.random() * (CONFIG.maxHue - CONFIG.minHue);
        const life = CONFIG.particleLife * (0.8 + Math.random() * 0.4);
        const vScale = isAmbient ? CONFIG.velocityScale * 0.5 : CONFIG.velocityScale;

        p.x = x;
        p.y = y;
        p.vx = (Math.random() - 0.5) * vScale;
        p.vy = (Math.random() - 0.5) * vScale;
        p.radius = CONFIG.minSize + Math.random() * (CONFIG.maxSize - CONFIG.minSize);
        p.life = life;
        p.maxLife = life;
        p.hue = hue;
        p.alpha = 1;
        p.active = true;
    }, []);

    // ----- Main animation loop (RAF only — no setInterval) -----
    useEffect(() => {
        if (!CONFIG.enabled || prefersReducedMotion) return;

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const loop = () => {
            // Only update + draw when hero is visible AND tab is active
            if (isBooted.current && isHeroVisible.current && isTabVisible.current) {
                const now = Date.now();

                // Spawn ambient particles on a time-based cadence
                if (now - lastAmbientSpawnTime.current > CONFIG.ambientRateMs) {
                    const rect = canvas.getBoundingClientRect();
                    const centerX = Math.random() * rect.width;
                    const centerY = Math.random() * rect.height;

                    const isCluster = Math.random() < CONFIG.clusterChance;
                    const spawnCount = isCluster ? Math.floor(Math.random() * 4) + 3 : 1;

                    for (let i = 0; i < spawnCount; i++) {
                        const offsetX = isCluster ? (Math.random() - 0.5) * 40 : 0;
                        const offsetY = isCluster ? (Math.random() - 0.5) * 40 : 0;
                        spawnParticle(centerX + offsetX, centerY + offsetY, true);
                    }

                    lastAmbientSpawnTime.current = now;
                }

                // Update particle physics
                for (let i = 0; i < particles.current.length; i++) {
                    const p = particles.current[i];
                    if (!p.active) continue;
                    p.x += p.vx;
                    p.y += p.vy;
                    p.vx *= 0.98;
                    p.vy *= 0.98;
                    p.life--;
                    p.alpha = Math.max(0, p.life / p.maxLife);
                    if (p.life <= 0) p.active = false;
                }

                // Draw
                const dpr = window.devicePixelRatio || 1;
                ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);
                ctx.globalCompositeOperation = 'screen';

                for (let i = 0; i < particles.current.length; i++) {
                    const p = particles.current[i];
                    if (!p.active) continue;
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                    ctx.fillStyle = `hsla(${p.hue}, 70%, 70%, ${p.alpha * CONFIG.opacity})`;
                    ctx.shadowBlur = CONFIG.blur;
                    ctx.shadowColor = `hsla(${p.hue}, 70%, 70%, ${p.alpha})`;
                    ctx.fill();
                }
            }

            // Always re-schedule — the visibility checks above keep it cheap when idle
            rafId.current = requestAnimationFrame(loop);
        };

        rafId.current = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(rafId.current);
    }, [spawnParticle, prefersReducedMotion]);

    if (prefersReducedMotion) {
        return (
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/10 pointer-events-none -z-10" />
        );
    }

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 pointer-events-none -z-10 overflow-hidden"
            aria-hidden="true"
        >
            <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.08),rgba(255,255,255,0))] animate-pulse"
                style={{ animationDuration: '10s' }}
            />
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full block"
            />
        </div>
    );
};
