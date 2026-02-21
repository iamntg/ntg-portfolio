import React from 'react';

/**
 * Utility to perform smooth scrolling to a target element by ID.
 * 
 * @param e - The mouse event from the click
 * @param href - The target href (e.g., "#contact")
 * @param onComplete - Optional callback (e.g., to close a mobile menu)
 */
export const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    href: string,
    onComplete?: () => void
) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });

        if (onComplete) {
            onComplete();
        }
    }
};
