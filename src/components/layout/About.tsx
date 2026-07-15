import React from 'react';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import ntgPhoto from '@/assets/images/ntg-photo.jpg';
import { scrollToSection } from '@/utils/scroll';
import { Instagram } from '@/components/ui/BrandIcons';

export const About: React.FC = () => {
    return (
        <Section id="about">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Image / Portrait Placeholder */}
                <div className="relative aspect-[7/9] w-full rounded-3xl overflow-hidden bg-muted order-2 lg:order-1 border border-border shadow-xl">
                    <img
                        src={ntgPhoto}
                        alt="Nitheesh"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                        <div className="text-white">
                            <p className="font-heading font-bold text-2xl">Nitheesh (NTG)</p>
                            <p className="opacity-90">Videographer & Content Creator</p>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="order-1 lg:order-2">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Behind the Lens</h2>

                    <div className="space-y-6 text-lg text-muted-foreground mb-8">
                        <p>
                            I’m Nitheesh, a Calgary-based videographer. Most of my work is close to home, the cafés, restaurants, and shops around the city, the creators building an audience here, and the events and family gatherings people want to remember.
                        </p>
                        <p>
                            I like to plan carefully before the camera comes out. We’ll talk through what you’re hoping for, I’ll map the shots, and I show up ready so the shoot day feels calm. For a local café that might mean catching the morning light and the details that make the room feel like itself; for a creator, footage that actually sounds and looks like you.
                        </p>
                        <p>
                            From there it’s about delivering, on time, edited with care, and sweated over in the details. Whether it’s an event, a family moment, a brand campaign, or an influencer collab, I want you to open the final file and feel like it captured the real thing.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" onClick={(e) => scrollToSection(e, '#contact')}>Let's Work Together</Button>
                        <Button variant="outline" size="lg" onClick={() => window.open('https://instagram.com/eye.of.ntg', '_blank')}>
                            <Instagram className="w-5 h-5 mr-2" />
                            Instagram DM
                        </Button>
                    </div>
                </div>
            </div>
        </Section>
    );
};
