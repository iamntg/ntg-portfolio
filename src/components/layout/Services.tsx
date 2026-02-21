import React from 'react';
import { Check } from 'lucide-react';
import { Section } from './Section';
import { services } from '../../data';
import { Button } from '../ui/Button';

export const Services: React.FC = () => {
    return (
        <Section id="services">
            <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Services & Packages</h2>
                <p className="text-lg text-muted-foreground text-balance">
                    Tailored production packages designed to elevate your brand's digital presence with cinematic visuals.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                {services.map((service, index) => (
                    <div
                        key={service.id}
                        className="flex flex-col p-8 rounded-3xl bg-background border border-border shadow-sm hover:shadow-lg transition-all duration-300"
                    >
                        <div className="mb-6">
                            <h3 className="text-2xl font-heading font-bold mb-2">{service.title}</h3>
                            <p className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                                {service.price}
                            </p>
                            <p className="text-muted-foreground">{service.description}</p>
                        </div>

                        <div className="flex-grow space-y-4 mb-8">
                            <p className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">What's Included</p>
                            <ul className="space-y-3">
                                {service.included.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm">
                                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Button variant={index === 0 ? "primary" : "outline"} className="w-full h-12">
                            Request a Quote
                        </Button>
                    </div>
                ))}
            </div>
            <div className="mt-12 text-center max-w-2xl mx-auto">
                <p className="text-sm text-muted-foreground">
                    Clear scope + 1 revision round included. Reshoots and additional revisions are billed separately.
                </p>
            </div>
        </Section>
    );
};
