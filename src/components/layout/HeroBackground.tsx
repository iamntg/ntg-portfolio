import React, { useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

/**
 * Combined "Aurora Mist + Stardust" backdrop for the Hero.
 *
 * Performance notes:
 *  - The aurora clouds are a pure-CSS gradient animation (.hero-aurora), which
 *    runs on the GPU compositor and costs effectively no CPU.
 *  - The starfield is a lightweight canvas. Its animation loop is paused whenever
 *    the hero scrolls out of view or the tab is hidden, so it never burns cycles
 *    while the user is reading the rest of the page.
 *  - Respects prefers-reduced-motion (draws a single static frame, no loop),
 *    caps device pixel ratio at 2, and scales star count to the canvas area.
 */
export const HeroBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        type Star = { x: number; y: number; r: number; base: number; col: string; tw: number; sp: number };
        const ACCENTS = ['15,184,166', '99,102,241', '139,92,246', '56,189,248'];

        let stars: Star[] = [];
        let width = 0;
        let height = 0;
        let rafId = 0;
        let onScreen = true;

        const build = () => {
            const rect = canvas.getBoundingClientRect();
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            width = rect.width;
            height = rect.height;
            if (width === 0 || height === 0) return;
            canvas.width = Math.round(width * dpr);
            canvas.height = Math.round(height * dpr);
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            const count = Math.min(260, Math.round((width * height) / 7000));
            stars = Array.from({ length: count }, () => {
                const accent = Math.random() < 0.14;
                return {
                    x: Math.random() * width,
                    y: Math.random() * height,
                    r: accent ? Math.random() * 1.6 + 1 : Math.random() * 1.1 + 0.4,
                    base: accent ? Math.random() * 0.35 + 0.35 : Math.random() * 0.26 + 0.1,
                    col: accent ? ACCENTS[Math.floor(Math.random() * ACCENTS.length)] : '30,41,59',
                    tw: Math.random() * Math.PI * 2,
                    sp: Math.random() * 0.9 + 0.3,
                };
            });
        };

        const draw = (t: number) => {
            ctx.clearRect(0, 0, width, height);
            for (const s of stars) {
                const a = prefersReducedMotion
                    ? s.base
                    : s.base * (0.65 + 0.35 * Math.sin((t / 900) * s.sp + s.tw));
                ctx.beginPath();
                ctx.fillStyle = `rgba(${s.col},${a})`;
                ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
                ctx.fill();
            }
        };

        const loop = (t: number) => {
            draw(t);
            rafId = requestAnimationFrame(loop);
        };

        const start = () => {
            if (rafId || prefersReducedMotion) return;
            rafId = requestAnimationFrame(loop);
        };
        const stop = () => {
            if (rafId) cancelAnimationFrame(rafId);
            rafId = 0;
        };

        build();
        // Static single frame for reduced-motion; otherwise animate while visible.
        if (prefersReducedMotion) {
            draw(0);
        } else {
            start();
        }

        // Pause the loop when the hero is off-screen.
        const io = new IntersectionObserver(
            ([entry]) => {
                onScreen = entry.isIntersecting;
                if (prefersReducedMotion) return;
                if (onScreen && !document.hidden) start();
                else stop();
            },
            { threshold: 0 }
        );
        io.observe(canvas);

        // Pause when the tab is hidden.
        const onVisibility = () => {
            if (prefersReducedMotion) return;
            if (!document.hidden && onScreen) start();
            else stop();
        };
        document.addEventListener('visibilitychange', onVisibility);

        const ro = new ResizeObserver(() => {
            build();
            if (prefersReducedMotion) draw(0);
        });
        ro.observe(canvas);

        return () => {
            stop();
            io.disconnect();
            ro.disconnect();
            document.removeEventListener('visibilitychange', onVisibility);
        };
    }, [prefersReducedMotion]);

    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
            {/* Aurora clouds (pure CSS) */}
            <div className="hero-aurora absolute inset-0" />
            {/* Stardust (canvas) */}
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
            {/* Blend into the white page below */}
            <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-white to-transparent" />
        </div>
    );
};
