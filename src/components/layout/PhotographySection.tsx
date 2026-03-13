import React from 'react';
import { Instagram } from '@/components/ui/BrandIcons';
import { Section } from './Section';
import { InstagramCarouselGrid } from '../photography/InstagramCarouselGrid';
import { Button } from '../ui/Button';

export const PhotographySection: React.FC = () => {
    return (
        <Section id="photography" className="bg-background relative pt-16">
            <div className="mb-12 max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Photography</h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                    A collection of editorial, commercial, and portrait photography showcasing still imagery.
                </p>
            </div>

            {/* Instagram Carousels Section */}
            <div className="max-w-6xl mx-auto text-center mt-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium mb-6 uppercase tracking-wider border border-border/50">
                    <Instagram className="w-3 h-3" />
                    <span>Instagram Carousels</span>
                </div>

                <InstagramCarouselGrid />

                <div className="mt-16">
                    <Button
                        variant="outline"
                        size="lg"
                        className="group rounded-full px-8"
                        onClick={() => window.open('https://instagram.com/eye.of.ntg', '_blank', 'noopener,noreferrer')}
                    >
                        <Instagram className="mr-2 w-4 h-4" />
                        <span>View more on Instagram</span>
                    </Button>
                </div>
            </div>
        </Section>
    );
};
