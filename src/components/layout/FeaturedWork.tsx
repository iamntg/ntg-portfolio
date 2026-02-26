import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Search, Briefcase, ChevronDown, ChevronUp, X } from 'lucide-react';
import { Section } from './Section';
import { portfolioWork, type WorkItem, type Category } from '@/data/work';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { VideoEmbed } from '@/components/media/VideoEmbed';
import { OptimizedImage } from '@/components/ui/OptimizedImage';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { MobileFilterSheet } from '@/components/work/MobileFilterSheet';

export const FeaturedWork: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<Category>('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);
    const [isExpanded, setIsExpanded] = useState(false);
    const [filterOpen, setFilterOpen] = useState(false);

    const isMobile = useMediaQuery('(max-width: 767px)');

    const categories: Category[] = ['All', 'Brand Campaigns', 'Events & Festivals', 'Creative / Model Work', 'YouTube & Cinematic'];

    const filteredWork = useMemo(() => {
        return portfolioWork.filter(project => {
            const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
            const matchesSearch = searchQuery === '' ||
                project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.brand?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.description?.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchQuery]);

    const visibleItems = useMemo(() => {
        if (isMobile && !isExpanded) {
            return filteredWork.slice(0, 4);
        }
        return filteredWork;
    }, [isMobile, isExpanded, filteredWork]);

    return (
        <Section id="work" className="overflow-hidden">
            <div className="flex flex-col gap-12 mb-12 md:mb-20">
                <div className="flex flex-col md:flex-col md:items-center gap-8">
                    <div className="flex flex-col max-w-4xl items-center justify-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6 uppercase tracking-widest border border-primary/20">
                            <Briefcase className="w-3" />
                            <span>Featured Work</span>
                        </div>
                        <h2 className="text-3xl md:text-6xl font-heading text-center font-black mb-6 tracking-tight text-balance">
                            Crafting Visual <span className="text-primary italic">Narratives</span>
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground text-center leading-relaxed text-balance">
                            A curated selection of high-impact visual stories for global brands and visionary artists.
                        </p>
                    </div>

                    {/* Search Bar */}
                    <div className="relative w-full md:w-80 group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                        <input
                            type="text"
                            placeholder="Search projects..."
                            value={searchQuery}
                            onChange={(e) => {
                                setSearchQuery(e.target.value);
                                setIsExpanded(true); // Auto-expand when searching
                            }}
                            className="w-full pl-11 pr-11 py-3 bg-muted/30 hover:bg-muted/50 focus:bg-background border border-border/50 focus:border-primary/50 rounded-2xl text-sm transition-all outline-none focus:ring-4 focus:ring-primary/5 shadow-sm"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery('')}
                                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-muted rounded-full transition-colors"
                            >
                                <X className="w-3 h-3 text-muted-foreground" />
                            </button>
                        )}
                    </div>
                </div>

                {/* Filter Tabs / Mobile Button */}
                {!isMobile ? (
                    <div className="flex items-center justify-center gap-2 p-1.5 bg-muted/50 backdrop-blur-sm rounded-2xl border border-border overflow-x-auto no-scrollbar">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => {
                                    setActiveCategory(category);
                                    setIsExpanded(false); // Reset expansion when changing category
                                }}
                                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 whitespace-nowrap ${activeCategory === category
                                    ? 'bg-background text-foreground shadow-lg scale-[1.02]'
                                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                ) : (
                    <div className="flex justify-center">
                        <button
                            onClick={() => setFilterOpen(true)}
                            className="flex items-center gap-3 px-8 py-4 bg-muted/50 backdrop-blur-sm rounded-2xl border border-border text-foreground font-black hover:bg-muted transition-all active:scale-95"
                        >
                            <Search className="w-5 h-5 text-primary" />
                            <span>Filter: {activeCategory}</span>
                            <ChevronDown className="w-5 h-5 opacity-50" />
                        </button>
                    </div>
                )}
            </div>

            <MobileFilterSheet
                isOpen={filterOpen}
                onClose={() => setFilterOpen(false)}
                categories={categories}
                activeCategory={activeCategory}
                onSelectCategory={(category) => {
                    setActiveCategory(category);
                    setIsExpanded(false);
                }}
            />

            {/* Work Grid */}
            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8"
            >
                <AnimatePresence mode='popLayout'>
                    {visibleItems.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4, delay: idx * 0.05 }}
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
                                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-500">
                                        {project.media.type === 'mp4' || project.media.type === 'youtube' ? (
                                            <Play className="w-6 h-6 text-white fill-white" />
                                        ) : (
                                            <Search className="w-6 h-6 text-white" />
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-[10px] uppercase tracking-[0.2em] font-black text-primary bg-primary/5 px-2.5 py-1 rounded">
                                        {project.category}
                                    </span>
                                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">
                                        {project.media.type.toUpperCase()}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-heading font-black mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-1">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground line-clamp-2 text-balance leading-relaxed">
                                    {project.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Empty State */}
            {filteredWork.length === 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="py-20 text-center"
                >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-6">
                        <Search className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <h3 className="text-2xl font-heading font-black mb-2">No projects found</h3>
                    <p className="text-muted-foreground mb-8">Try adjusting your search or filters.</p>
                    <Button
                        variant="outline"
                        onClick={() => {
                            setSearchQuery('');
                            setActiveCategory('All');
                        }}
                        className="rounded-full px-8"
                    >
                        Clear all filters
                    </Button>
                </motion.div>
            )}

            {/* Show More Button (Mobile Only) */}
            {isMobile && filteredWork.length > 4 && searchQuery === '' && (
                <motion.div
                    layout
                    className="mt-12 flex justify-center"
                >
                    <Button
                        variant="outline"
                        size="lg"
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="rounded-full px-8 py-6 font-bold flex items-center gap-2 group border-2"
                        aria-expanded={isExpanded}
                    >
                        {isExpanded ? (
                            <>
                                <span>Show Less</span>
                                <ChevronUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
                            </>
                        ) : (
                            <>
                                <span>Show More Projects</span>
                                <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
                            </>
                        )}
                    </Button>
                </motion.div>
            )}

            {/* Work Detail Modal */}
            <Modal
                isOpen={!!selectedWork}
                onClose={() => setSelectedWork(null)}
            >
                {selectedWork && (
                    <div className="flex flex-col h-full overflow-y-auto no-scrollbar">
                        {/* Media Section */}
                        {selectedWork.media.type === 'mp4' && (
                            <div className="w-full h-[60vh] md:h-[80vh] bg-black border-b border-border">
                                <video
                                    src={selectedWork.media.src}
                                    controls
                                    autoPlay
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        )}

                        {selectedWork.media.type === 'youtube' && (
                            <VideoEmbed
                                media={selectedWork.media}
                                orientation={selectedWork.orientation}
                                title={selectedWork.title}
                            />
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

                        <div className="p-8 md:p-12 max-w-4xl mx-auto w-full">
                            <div className="flex flex-wrap items-center gap-4 mb-8">
                                <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest border border-primary/20">
                                    {selectedWork.category}
                                </span>
                                <span className="text-muted-foreground text-sm font-medium">
                                    {selectedWork.year} — {selectedWork.brand || 'Nebulatic'}
                                </span>
                            </div>

                            <h2 className="text-4xl md:text-6xl font-heading font-black mb-8 tracking-tighter">
                                {selectedWork.title}
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                                <div className="md:col-span-2">
                                    <h4 className="text-sm font-black uppercase tracking-widest mb-4 opacity-50">Overview</h4>
                                    <p className="text-xl text-muted-foreground leading-relaxed text-balance">
                                        {selectedWork.description}
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-black uppercase tracking-widest mb-4 opacity-50">Focus Area</h4>
                                    <ul className="space-y-3">
                                        {selectedWork.tags?.map(tag => (
                                            <li key={tag} className="flex items-center gap-3 text-foreground font-bold italic">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                {tag}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Modal>
        </Section>
    );
};
