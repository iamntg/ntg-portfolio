import React, { useEffect, useRef, useCallback } from 'react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

const CONFIG = {
    enabled: true,
    maxParticles: 140,
    spawnRateMs: 24,
    opacity: 0.28,     // Slightly higher than initial for better visibility
    particleLife: 110,
    blur: 5.5,
    minHue: 200,
    maxHue: 320,
    minSize: 1.2,
    maxSize: 4,
    velocityScale: 0.55,
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
}

export const HeroParticles: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particles = useRef<Particle[]>([]);
    const lastSpawnTime = useRef<number>(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const isVisible = useRef(true);

    const prefersReducedMotion = usePrefersReducedMotion();

    const resize = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const { width, height } = canvas.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        const ctx = canvas.getContext('2d');
        if (ctx) ctx.scale(dpr, dpr);
    }, []);

    useEffect(() => {
        resize();
        window.addEventListener('resize', resize);
        return () => window.removeEventListener('resize', resize);
    }, [resize]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                isVisible.current = entry.isIntersecting;
            },
            { threshold: 0 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const createParticle = useCallback((x: number, y: number) => {
        if (particles.current.length >= CONFIG.maxParticles) {
            particles.current.shift();
        }

        const hue = CONFIG.minHue + Math.random() * (CONFIG.maxHue - CONFIG.minHue);
        const life = CONFIG.particleLife * (0.8 + Math.random() * 0.4);

        particles.current.push({
            x,
            y,
            vx: (Math.random() - 0.5) * CONFIG.velocityScale,
            vy: (Math.random() - 0.5) * CONFIG.velocityScale,
            radius: CONFIG.minSize + Math.random() * (CONFIG.maxSize - CONFIG.minSize),
            life,
            maxLife: life,
            hue,
            alpha: 1,
        });
    }, []);

    useEffect(() => {
        if (!CONFIG.enabled || prefersReducedMotion) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;

        const update = () => {
            particles.current.forEach((p, i) => {
                p.x += p.vx;
                p.y += p.vy;
                p.life--;
                p.alpha = Math.max(0, p.life / p.maxLife);

                if (p.life <= 0) {
                    particles.current.splice(i, 1);
                }
            });
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.globalCompositeOperation = 'screen';

            particles.current.forEach((p) => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `hsla(${p.hue}, 70%, 70%, ${p.alpha * CONFIG.opacity})`;
                ctx.shadowBlur = CONFIG.blur;
                ctx.shadowColor = `hsla(${p.hue}, 70%, 70%, ${p.alpha})`;
                ctx.fill();
            });
        };

        const loop = () => {
            if (isVisible.current) {
                update();
                draw();
            }
            animationFrameId = requestAnimationFrame(loop);
        };

        loop();

        return () => cancelAnimationFrame(animationFrameId);
    }, [prefersReducedMotion]);

    useEffect(() => {
        const handleMove = (e: MouseEvent | TouchEvent) => {
            if (!isVisible.current || !CONFIG.enabled || prefersReducedMotion) return;

            const canvas = canvasRef.current;
            if (!canvas) return;

            const rect = canvas.getBoundingClientRect();
            let x, y;

            if ('touches' in e) {
                x = e.touches[0].clientX - rect.left;
                y = e.touches[0].clientY - rect.top;
            } else {
                x = e.clientX - rect.left;
                y = e.clientY - rect.top;
            }

            // Only spawn if within canvas bounds
            if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
                const now = Date.now();
                if (now - lastSpawnTime.current > CONFIG.spawnRateMs) {
                    createParticle(x, y);
                    lastSpawnTime.current = now;
                }
            }
        };

        window.addEventListener('mousemove', handleMove);
        window.addEventListener('touchmove', handleMove);
        return () => {
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('touchmove', handleMove);
        };
    }, [createParticle, prefersReducedMotion]);

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
            {/* Subtle Parallax Background Gradient */}
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
