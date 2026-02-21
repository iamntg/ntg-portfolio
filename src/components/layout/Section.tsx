import React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    id?: string;
    className?: string;
    children: React.ReactNode;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
    ({ id, className = '', children, ...props }, ref) => {
        return (
            <section
                id={id}
                ref={ref}
                className={`py-20 md:py-32 scroll-mt-20 ${className}`}
                {...props}
            >
                <div className="container mx-auto px-4 md:px-6">
                    {children}
                </div>
            </section>
        );
    }
);
Section.displayName = 'Section';
