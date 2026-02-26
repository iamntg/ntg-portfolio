import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Masonry from 'react-masonry-css';
import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { Instagram } from '@/components/ui/BrandIcons';
import { Section } from './Section';
import { portfolioWork } from '../../data/work';
import { InstagramCarouselGrid } from '../photography/InstagramCarouselGrid';
import { Button } from '../ui/Button';
import { OptimizedImage } from '@/components/ui/OptimizedImage';

export const PhotographySection: React.FC = () => {
    // Filter out only photography items
    const photoProjects = portfolioWork.filter(p => p.category === 'Photography');

    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    // Masonry breakpoints
    const breakpointColumnsObj = {
        default: 3,
        1024: 3,
        768: 2,
        500: 1
    };

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex + 1) % photoProjects.length);
        }
    };

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex - 1 + photoProjects.length) % photoProjects.length);
        }
    };

    // Keep body from scrolling when modal is open
    React.useEffect(() => {
        if (selectedIndex !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [selectedIndex]);

    return (
        <Section id="photography" className="bg-background relative pt-10">
            <div className="mb-12 max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Photography</h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                    A collection of editorial, commercial, and portrait photography showcasing still imagery.
                </p>
            </div>
            {photoProjects.length > 0 && (
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="flex -ml-4 w-auto"
                    columnClassName="pl-4 bg-clip-padding"
                >
                    {photoProjects.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="mb-4 relative group cursor-pointer overflow-hidden rounded-xl bg-muted"
                            onClick={() => setSelectedIndex(idx)}
                        >
                            <OptimizedImage
                                src={project.thumbnailUrl}
                                alt={project.title}
                                loading="lazy"
                                className="transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <h3 className="text-white font-heading font-semibold text-xl mb-1">{project.title}</h3>
                                <p className="text-white/80 text-sm">{project.brand}</p>
                            </div>
                        </motion.div>
                    ))}
                </Masonry>
            )}

            {/* Instagram Carousels Section */}
            <div className={`max-w-6xl mx-auto text-center ${photoProjects.length > 0 ? 'mt-32' : 'mt-10'}`}>
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

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedIndex !== null && photoProjects[selectedIndex] && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center overscroll-none"
                        onClick={() => setSelectedIndex(null)}
                    >
                        {/* Close Button */}
                        <button
                            className="absolute top-6 right-6 z-10 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 hover:scale-110 text-white rounded-full backdrop-blur-md transition-all duration-300 border border-white/20"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedIndex(null);
                            }}
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Prev Navigation */}
                        {photoProjects.length > 1 && (
                            <button
                                className="absolute left-4 md:left-10 z-10 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 hover:scale-110 text-white rounded-full backdrop-blur-md transition-all duration-300 border border-white/20"
                                onClick={handlePrev}
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                        )}

                        {/* Next Navigation */}
                        {photoProjects.length > 1 && (
                            <button
                                className="absolute right-4 md:right-10 z-10 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 hover:scale-110 text-white rounded-full backdrop-blur-md transition-all duration-300 border border-white/20"
                                onClick={handleNext}
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        )}

                        {/* Image Container */}
                        <div
                            className="relative w-full h-full p-4 md:p-20 flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()} // Prevent click propagating to modal backdrop
                        >
                            <motion.div
                                key={selectedIndex}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                className="max-w-full max-h-full"
                            >
                                <OptimizedImage
                                    src={photoProjects[selectedIndex].thumbnailUrl}
                                    alt={photoProjects[selectedIndex].title}
                                    loading="eager"
                                    fetchPriority="high"
                                    showSkeleton={false}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </motion.div>

                            {/* Caption overlay */}
                            <motion.div
                                initial={{ opacity: 0, y: 0 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="absolute bottom-6 md:bottom-12 -translate-x-1/2 bg-black/60 backdrop-blur-md border border-white/10 px-6 py-4 rounded-2xl w-full max-w-md text-center"
                            >
                                <h3 className="text-white font-heading font-semibold text-lg mb-1">
                                    {photoProjects[selectedIndex].title}
                                </h3>
                                <div className="flex items-center justify-center gap-2 text-white/70 text-sm">
                                    <MapPin className="w-3.5 h-3.5" />
                                    <span>{photoProjects[selectedIndex].brand}</span>
                                    <span className="mx-2 opacity-50">•</span>
                                    <span>{photoProjects[selectedIndex].year}</span>
                                </div>
                                {photoProjects[selectedIndex].description && (
                                    <p className="text-white/80 text-sm mt-3 pt-3 border-t border-white/10 text-center">
                                        {photoProjects[selectedIndex].description}
                                    </p>
                                )}
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Section>
    );
};
