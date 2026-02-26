import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

export const FloatingQuoteButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Hide button when contact section is in view
        const contactSection = document.getElementById('contact');
        if (!contactSection) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                // If contact section is more than 10% visible, hide the FAB
                setIsVisible(!entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        observer.observe(contactSection);

        return () => {
            observer.disconnect();
        };
    }, []);

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={scrollToContact}
                    className="fixed bottom-6 right-6 z-[90] flex items-center gap-2 px-6 py-4 bg-primary text-primary-foreground rounded-full shadow-2xl shadow-primary/20 backdrop-blur-md border border-primary/20 transition-all duration-300 group"
                    aria-label="Get Quote"
                >
                    <MessageSquare className="w-5 h-5 transition-transform group-hover:-rotate-12" />
                    <span className="font-bold text-sm tracking-tight hidden sm:block">Get Quote</span>

                    {/* Safe area padding for mobile */}
                    <div className="absolute inset-0 pb-[env(safe-area-inset-bottom)] -z-10" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};
