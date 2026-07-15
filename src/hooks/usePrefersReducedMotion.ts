import { useState, useEffect } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

export const usePrefersReducedMotion = () => {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(
        () => typeof window !== 'undefined' && window.matchMedia(QUERY).matches
    );

    useEffect(() => {
        const mediaQuery = window.matchMedia(QUERY);
        const handleChange = (event: MediaQueryListEvent) => {
            setPrefersReducedMotion(event.matches);
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    return prefersReducedMotion;
};
