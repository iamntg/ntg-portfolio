import React from 'react';
import { Section } from './Section';
import { processSteps } from '../../data';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const Process: React.FC = () => {
    return (
        <Section id="process" className="bg-secondary/30">
            <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">How I Work</h2>
                <p className="text-lg text-muted-foreground text-balance">
                    A seamless, transparent process designed to take your project from concept to cinematic reality without the friction.
                </p>
            </div>

            <div className="relative">
                {/* Connecting line for desktop */}
                <div className="hidden md:block absolute top-[15%] left-0 right-0 h-0.5 bg-gradient-to-r from-background via-border to-background z-0" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10">
                    {processSteps.map((step, index) => (
                        <div key={step.number} className="relative group flex flex-col items-center md:items-start text-center md:text-left">

                            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-background border border-border shadow-sm text-2xl font-heading font-bold text-primary mb-6 transition-transform group-hover:scale-110 group-hover:shadow-md">
                                {step.number}
                            </div>

                            <h3 className="text-xl font-heading font-bold mb-3">{step.title}</h3>
                            <p className="text-muted-foreground">{step.description}</p>

                            {/* Optional Arrow indicator for desktop */}
                            {index < processSteps.length - 1 && index % 3 !== 2 && (
                                <div className="hidden md:block absolute top-[15%] -right-8 transform -translate-y-1/2 text-border">
                                    <ArrowRight className="w-6 h-6" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-20 p-6 md:p-8 rounded-2xl bg-muted border border-border max-w-4xl mx-auto">
                <h4 className="font-heading font-bold text-xl mb-6 text-center sm:text-left">Scope & Policy</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                            <span><strong>1 shoot session</strong> included (as agreed)</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                            <span><strong>Delivery timelines</strong> typically 2–7 days based on scope</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                            <span>Additional revisions are billed at a standard hourly rate</span>
                        </li>
                    </ul>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                            <span><strong>1 revision round</strong> included to perfect the cut</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                            <span>Reshoots due to scope changes are billed separately</span>
                        </li>
                    </ul>
                </div>
            </div>
        </Section>
    );
};
