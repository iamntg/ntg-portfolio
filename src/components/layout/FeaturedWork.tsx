import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Search, Filter, Image as ImageIcon, Video, Briefcase } from 'lucide-react';
import { Section } from './Section';
import { portfolioWork, brands, type WorkItem } from '@/data/work';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { VideoEmbed } from '@/components/media/VideoEmbed';
import { OptimizedImage } from '@/components/ui/OptimizedImage';

export const FeaturedWork: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<string>('All');
    const [searchQuery, setSearchQuery] = useState('');

    const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);

    const categories = ['All', 'Brand Campaigns', 'Events & Festivals', 'Creative / Model Work', 'YouTube & Cinematic'];

    const filteredProjects = useMemo(() => {
        return portfolioWork.filter(p => {
            if (p.category === 'Photography') return false;
            const matchCategory = activeCategory === 'All' || p.category === activeCategory;
            const matchSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (p.brand?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false);

            return matchCategory && matchSearch;
        });
    }, [activeCategory, searchQuery]);

    return (
        <Section id="work" className="bg-secondary/30 relative">

            {/* 1. Header & Brand Pills */}
            <div className="mb-16 max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Brand Campaign Experience</h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Commercial and influencer-led brand campaign content shot, edited, and delivered for social media and digital platforms.
                </p>

                <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        {brands.map(brand => (
                            <span key={brand} className="px-4 py-2 bg-secondary text-secondary-foreground text-sm font-semibold rounded-full border border-border/50">
                                {brand}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* 2. Filters & Search */}
            <div className="mb-10 flex flex-col gap-6">
                {/* Search */}
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search campaigns, brands..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                        />
                    </div>
                </div>

                {/* Primary Categories */}
                <div className="flex flex-wrap items-center gap-2">
                    <Filter className="w-4 h-4 text-muted-foreground mr-2 hidden sm:block" />
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category
                                ? 'bg-primary text-primary-foreground shadow-md'
                                : 'bg-background hover:bg-accent hover:text-accent-foreground border border-border'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* 3. Grid */}
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            key={project.id}
                            onClick={() => setSelectedWork(project)}
                            className="group cursor-pointer relative rounded-2xl overflow-hidden bg-background border border-border shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                                <OptimizedImage
                                    src={project.thumbnailUrl}
                                    alt={project.title}
                                    aspectRatio="4/5"
                                    loading="lazy"
                                    className="transition-transform duration-700 group-hover:scale-105"
                                    wrapperClassName="absolute inset-0"
                                />

                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                    <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center text-white border border-white/50 transform scale-75 group-hover:scale-100 transition-all duration-300">
                                        {(project.media.type === 'mp4' || project.media.type === 'youtube') ? (
                                            <Play className="w-6 h-6 ml-1 fill-white" />
                                        ) : (
                                            <ImageIcon className="w-6 h-6 text-white" />
                                        )}
                                    </div>
                                </div>

                                <div className="absolute top-4 right-4 flex flex-col gap-2">
                                    <span className="px-3 py-1 bg-background/90 backdrop-blur-md rounded-full text-xs font-semibold shadow-sm">
                                        {project.category}
                                    </span>
                                </div>

                                <div className="absolute top-4 left-4">
                                    {(project.media.type === 'mp4' || project.media.type === 'youtube') ? (
                                        <div className="px-2 py-1 bg-black/50 backdrop-blur-md text-white rounded text-xs flex items-center gap-1">
                                            <Video className="w-3 h-3" /> Video
                                        </div>
                                    ) : (
                                        <div className="px-2 py-1 bg-black/50 backdrop-blur-md text-white rounded text-xs flex items-center gap-1">
                                            <ImageIcon className="w-3 h-3" /> Photo
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-heading font-semibold mb-1 line-clamp-1">{project.title}</h3>
                                {project.brand && <p className="text-sm font-medium text-primary mb-3">{project.brand}</p>}
                                {project.description && <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>}
                            </div>
                        </motion.div>
                    ))}
                    {filteredProjects.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                            className="col-span-full py-20 text-center flex flex-col items-center justify-center"
                        >
                            <Search className="w-12 h-12 text-muted mb-4" />
                            <h3 className="text-xl font-heading font-semibold mb-2">No projects found</h3>
                            <p className="text-muted-foreground">Try adjusting your filters or search query.</p>
                            <Button variant="outline" className="mt-6" onClick={() => {
                                setSearchQuery('');
                                setActiveCategory('All');
                            }}>
                                Clear Filters
                            </Button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* 4. Modal View */}
            <Modal isOpen={!!selectedWork} onClose={() => setSelectedWork(null)}>
                {selectedWork && (
                    <div className="flex flex-col bg-background h-full overflow-hidden">
                        {/* Media Area */}
                        {(selectedWork.media.type === 'mp4' || selectedWork.media.type === 'youtube') && (
                            <div className="w-full bg-black relative flex items-center justify-center flex-shrink-0 flex-1 min-h-[40vh] md:min-h-0">
                                <VideoEmbed media={selectedWork.media} orientation={selectedWork.orientation} title={selectedWork.title} />
                            </div>
                        )}

                        {selectedWork.media.type === 'image' && (
                            <div className="w-full h-[60vh] md:h-[80vh] bg-black border-b border-border flex items-center justify-center">
                                <OptimizedImage
                                    src={selectedWork.media.src || selectedWork.thumbnailUrl}
                                    alt={selectedWork.media.alt || selectedWork.title}
                                    loading="eager"
                                    fetchPriority="high"
                                    className="object-contain"
                                    showSkeleton={false}
                                />
                            </div>
                        )}

                        {/* Content Area */}
                        <div className="p-6 md:p-10 overflow-y-auto">
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                                    {selectedWork.category}
                                </span>
                            </div>

                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
                                <div className="flex-1">
                                    <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2">{selectedWork.title}</h2>
                                    {selectedWork.description && <p className="text-lg text-muted-foreground mb-4">{selectedWork.description}</p>}

                                    {selectedWork.tags && selectedWork.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {selectedWork.tags.map(tag => (
                                                <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <div className="md:w-1/3 bg-muted p-6 rounded-2xl border border-border">
                                    {selectedWork.brand && (
                                        <div>
                                            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-2">
                                                <Briefcase className="w-4 h-4" /> Client / Brand
                                            </h4>
                                            <p className="text-lg font-medium">{selectedWork.brand}</p>
                                        </div>
                                    )}
                                    {selectedWork.year && (
                                        <p className={`text-sm italic text-muted-foreground mt-4 pt-4 ${selectedWork.brand ? 'border-t border-border/50' : ''}`}>
                                            Year Delivered: {selectedWork.year}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Modal>

        </Section>
    );
};
