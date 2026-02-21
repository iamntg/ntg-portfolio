import React from 'react';
import { Section } from './Section';
import { Button } from '../ui/Button';

export const About: React.FC = () => {
    return (
        <Section id="about">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Image / Portrait Placeholder */}
                <div className="relative h-[600px] w-full rounded-3xl overflow-hidden bg-muted order-2 lg:order-1 border border-border shadow-xl">
                    <img
                        src="https://images.unsplash.com/photo-1554046920-90dcac2ecb74?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
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
                            I’m Nitheesh, a Calgary-based videographer specializing in creating scroll-stopping cinematic content for influencers, artists, and small businesses.
                        </p>
                        <p>
                            My approach blends high-end cinematic aesthetics with the fast-paced, engaging style required for platforms like TikTok and Instagram Reels. I understand the algorithms, but more importantly, I understand human attention.
                        </p>
                        <p>
                            Whether it's capturing the raw energy of an intimate live event or directing a detailed brand campaign, I bring reliability, precise planning, and a refined visual eye to every project. My goal isn't just to make things look good—it's to make content that converts and builds your audience.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg">Let's Work Together</Button>
                        <Button variant="outline" size="lg">Instagram DM</Button>
                    </div>
                </div>
            </div>
        </Section>
    );
};
