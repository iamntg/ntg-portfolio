import React from 'react';
import { Section } from './Section';
import { processSteps } from '../../data';
import { CheckCircle2 } from 'lucide-react';

export const Process: React.FC = () => {
    return (
        <Section id="process" className="bg-secondary/30">
            <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">How I Work</h2>
                <p className="text-lg text-muted-foreground text-balance">
                    A seamless, transparent process designed to take your project from concept to cinematic reality without the friction.
                </p>
            </div>

            <div className="relative max-w-5xl mx-auto mt-16">
                {/* Continuous Curved Connecting Line (Desktop) */}
                <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-24 -translate-x-1/2 z-0 pointer-events-none">
                    <svg className="w-full h-full text-border" preserveAspectRatio="none" viewBox="0 0 100 1000" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8">
                        {/* A smooth sine-like wave that connects all points along the y-axis */}
                        <path d="M 50,0 Q 150,83.33 50,166.66 T 50,333.33 T 50,500 T 50,666.66 T 50,833.33 T 50,1000" vectorEffect="non-scaling-stroke" strokeLinecap="round" />
                    </svg>
                </div>

                {/* Clean Centered Dashed Line (Mobile) */}
                <div className="md:hidden absolute left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 z-0 pointer-events-none bg-repeating-linear-gradient" style={{ backgroundImage: 'linear-gradient(to bottom, currentColor 50%, transparent 50%)', backgroundSize: '100% 16px', color: 'hsl(var(--border))' }} />

                <div className="flex flex-col gap-12 md:gap-0 relative z-10">
                    {processSteps.map((step, index) => (
                        <div key={step.number} className="relative flex flex-col md:flex-row items-center md:min-h-[220px] group">

                            {/* Node (Center on Desktop) */}
                            <div className="md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 flex items-center justify-center w-16 h-16 rounded-2xl bg-background border-2 border-border shadow-sm text-2xl font-heading font-bold text-primary mb-6 md:mb-0 transition-transform group-hover:scale-110 group-hover:shadow-md z-20">
                                {step.number}
                            </div>

                            {/* Content Half */}
                            <div className={`w-full md:w-1/2 flex items-center ${index % 2 === 0 ? 'md:pr-16 md:justify-end text-center md:text-right' : 'md:pl-16 md:justify-start md:ml-auto text-center md:text-left'}`}>
                                <div className="bg-card p-6 md:p-8 rounded-3xl border border-border shadow-sm group-hover:shadow-md transition-shadow max-w-lg w-full">
                                    <h3 className="text-2xl font-heading font-bold mb-3">{step.title}</h3>
                                    <p className="text-muted-foreground">{step.description}</p>
                                </div>
                            </div>
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
