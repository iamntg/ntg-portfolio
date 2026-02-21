import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/layout/Section';
import { heroContent } from '@/data';
import { CheckCircle } from 'lucide-react';
import { scrollToSection } from '@/utils/scroll';

export const Hero: React.FC = () => {
    return (
        <Section className="relative min-h-screen flex items-center pt-32 pb-20 justify-center overflow-hidden">
            {/* Background with subtle gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30 -z-10" />

            {/* Decorative Blur Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-[128px] opacity-70 animate-pulse -z-10 dark:opacity-30" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/30 rounded-full mix-blend-multiply filter blur-[128px] opacity-70 animate-pulse -z-10 dark:opacity-30" />

            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs md:text-sm font-medium mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Available for new projects
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                    className="text-balance text-4xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight mb-6"
                >
                    {heroContent.headline}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-balance"
                >
                    {heroContent.subheadline}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                >
                    <Button size="lg" className="w-full sm:w-auto h-12 px-8 text-base" onClick={(e) => scrollToSection(e, "#work")}>
                        View Work
                    </Button>
                    <Button variant="outline" size="lg" className="w-full sm:w-auto h-12 px-8 text-base" onClick={(e) => scrollToSection(e, "#contact")}>
                        Get a Quote
                    </Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
                >
                    {heroContent.badges.map((badge, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-primary" />
                            <span>{badge}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </Section>
    );
};
