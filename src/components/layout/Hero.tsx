import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { heroContent } from '@/data';
import { CheckCircle } from 'lucide-react';
import { scrollToSection } from '@/utils/scroll';

export const Hero: React.FC = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center pt-32 pb-20 justify-center overflow-hidden bg-white">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs md:text-sm font-medium mb-8 border border-border/50">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                            </span>
                            Available for new projects
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="text-balance text-4xl md:text-6xl lg:text-7xl font-heading font-black tracking-tighter mb-6 text-foreground"
                    >
                        {heroContent.headline}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="text-lg md:text-xl text-muted-foreground mb-10 mx-auto text-balance font-medium"
                    >
                        {heroContent.subheadline}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                    >
                        <Button size="lg" className="w-full sm:w-auto h-14 px-10 text-base font-bold rounded-full shadow-xl shadow-primary/10" onClick={(e) => scrollToSection(e, "#work")}>
                            View Work
                        </Button>
                        <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 px-10 text-base font-bold rounded-full border-border hover:bg-muted" onClick={(e) => scrollToSection(e, "#contact")}>
                            Get a Quote
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-wrap items-center justify-center gap-8 text-xs font-bold uppercase tracking-widest text-muted-foreground/60"
                    >
                        {heroContent.badges.map((badge, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-primary" />
                                <span>{badge}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
