import { useState, useEffect } from 'react';

/**
 * Custom hook to detect if a media query matches.
 * @param query The media query string (e.g., '(max-width: 767px)')
 * @returns boolean indicating if the query matches
 */
export function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState(
        () => typeof window !== 'undefined' && window.matchMedia(query).matches
    );

    useEffect(() => {
        const media = window.matchMedia(query);
        const listener = (event: MediaQueryListEvent) => setMatches(event.matches);
        media.addEventListener('change', listener);
        return () => media.removeEventListener('change', listener);
    }, [query]);

    return matches;
}
