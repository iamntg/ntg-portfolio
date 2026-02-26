import React from 'react';
import { Section } from './Section';
import { testimonials } from '../../data';
import { Quote } from 'lucide-react';
import { OptimizedImage } from '@/components/ui/OptimizedImage';

export const Testimonials: React.FC = () => {
    return (
        <Section id="testimonials" className="bg-secondary/40">
            <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Client Experiences</h2>
                <p className="text-lg text-muted-foreground text-balance">
                    Don't just take my word for it. Here is what people are saying about their visual transformations.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial) => (
                    <div
                        key={testimonial.id}
                        className="p-8 rounded-3xl bg-background border border-border flex flex-col relative"
                    >
                        <Quote className="absolute top-8 right-8 w-8 h-8 text-muted/50" />

                        <p className="text-lg italic text-foreground mb-8 relative z-10 flex-grow">
                            "{testimonial.content}"
                        </p>

                        <div className="flex items-center gap-4 mt-auto">
                            <div className="w-12 h-12 rounded-full overflow-hidden bg-muted border border-border flex-shrink-0">
                                <OptimizedImage
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    intrinsicWidth={48}
                                    intrinsicHeight={48}
                                    loading="lazy"
                                    className="filter grayscale"
                                />
                            </div>
                            <div>
                                <p className="font-heading font-bold text-sm">
                                    {/* Keep names slightly hidden / anonymous as requested if needed, using placeholders for now */}
                                    {testimonial.name}
                                </p>
                                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};
