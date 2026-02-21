import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Search, Filter, Image as ImageIcon, Video, User, Briefcase, Camera } from 'lucide-react';
import { Section } from './Section';
import { portfolioWork, brands, type WorkItem } from '../../data/work';
import { Button } from '../ui/Button';
import { Modal } from '../ui/Modal';

export const FeaturedWork: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<string>('All');
    const [activeBrand, setActiveBrand] = useState<string>('All');
    const [activePlatform, setActivePlatform] = useState<string>('All');
    const [searchQuery, setSearchQuery] = useState('');

    const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);

    const categories = ['All', 'Influencer Ads', 'Events', 'YouTube', 'Photography'];
    const platforms = ['All', 'IG Reel', 'TikTok', 'YouTube', 'Photo'];

    const filteredProjects = useMemo(() => {
        return portfolioWork.filter(p => {
            const matchCategory = activeCategory === 'All' || p.category === activeCategory;
            const matchBrand = activeBrand === 'All' || p.brand === activeBrand;
            const matchPlatform = activePlatform === 'All' || p.platform.includes(activePlatform);
            const matchSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.brand.toLowerCase().includes(searchQuery.toLowerCase());

            return matchCategory && matchBrand && matchPlatform && matchSearch;
        });
    }, [activeCategory, activeBrand, activePlatform, searchQuery]);

    return (
        <Section id="work" className="bg-secondary/30 relative">

            {/* 1. Header & Brand Pills */}
            <div className="mb-12 max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Selected Work</h2>

                <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
                    <h3 className="text-sm uppercase tracking-widest text-muted-foreground font-semibold mb-4">Brand Campaigns & Partners</h3>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        {brands.map(brand => (
                            <span key={brand} className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm font-medium rounded-full border border-border/50">
                                {brand}
                            </span>
                        ))}
                        <span className="px-3 py-1.5 text-sm font-medium text-muted-foreground">and more...</span>
                    </div>
                </div>
            </div>

            {/* Aliya Highlight Banner */}
            <div className="mb-16 max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-transparent border-l-4 border-primary p-6 rounded-r-2xl">
                <h4 className="text-lg md:text-xl font-heading font-bold mb-2 flex items-center gap-2">
                    <Camera className="w-5 h-5 text-primary" />
                    Extended Partnership: @stylebyaliya
                </h4>
                <p className="text-muted-foreground mb-2">
                    <strong>25+ influencer brand campaigns shot, edited, and delivered.</strong>
                </p>
                <p className="text-sm text-muted-foreground italic">
                    *Some samples available on request privately for brands that require clearance permissions.
                </p>
            </div>

            {/* 2. Filters & Search */}
            <div className="mb-10 flex flex-col gap-6">
                {/* Search & Select dropdowns */}
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

                    <div className="flex w-full md:w-auto gap-4">
                        <select
                            value={activeBrand}
                            onChange={(e) => setActiveBrand(e.target.value)}
                            className="w-full md:w-auto px-4 py-2 bg-background border border-border rounded-full text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-primary/30"
                        >
                            <option value="All">All Brands</option>
                            {brands.map(b => <option key={b} value={b}>{b}</option>)}
                            <option value="Private Client">Private Client</option>
                            <option value="Nebulatic">Nebulatic</option>
                            <option value="Fashion Boutique">Fashion Boutique</option>
                        </select>

                        <select
                            value={activePlatform}
                            onChange={(e) => setActivePlatform(e.target.value)}
                            className="w-full md:w-auto px-4 py-2 bg-background border border-border rounded-full text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-primary/30"
                        >
                            {platforms.map(p => <option key={p} value={p}>{p}</option>)}
                        </select>
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
                                <img
                                    src={project.thumbnail}
                                    alt={project.title}
                                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                                    loading="lazy"
                                />

                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                    <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center text-white border border-white/50 transform scale-75 group-hover:scale-100 transition-all duration-300">
                                        {project.mediaType === 'video' ? (
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
                                    {project.mediaType === 'video' ? (
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
                                <p className="text-sm font-medium text-primary mb-3">{project.brand}</p>
                                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.platform.map(tag => (
                                        <span key={tag} className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-md">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
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
                                setActiveBrand('All');
                                setActivePlatform('All');
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
                    <div className="flex flex-col bg-background h-full">
                        {/* Media Area */}
                        <div className="w-full aspect-video bg-black relative flex items-center justify-center overflow-hidden flex-shrink-0">
                            {/* Media Placeholder */}
                            <img
                                src={selectedWork.thumbnail}
                                alt={selectedWork.title}
                                className="w-full h-full object-cover opacity-50 blur-sm absolute inset-0"
                            />
                            <div className="z-10 flex flex-col items-center justify-center text-white">
                                {selectedWork.mediaType === 'video' ? <Play className="w-16 h-16 mb-4 opacity-80" /> : <ImageIcon className="w-16 h-16 mb-4 opacity-80" />}
                                <p className="text-sm tracking-widest uppercase font-semibold">
                                    [ {selectedWork.mediaType === 'video' ? 'Video Player Placeholder' : 'Image Carousel Placeholder'} ]
                                </p>
                                <p className="text-xs opacity-60 mt-2">Replace with iframe or video tag in production</p>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="p-6 md:p-10 overflow-y-auto">
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                                    {selectedWork.category}
                                </span>
                                {selectedWork.platform.map(p => (
                                    <span key={p} className="px-3 py-1 border border-border rounded-full text-xs font-semibold text-muted-foreground">
                                        {p}
                                    </span>
                                ))}
                            </div>

                            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2">{selectedWork.title}</h2>
                            <p className="text-lg text-muted-foreground mb-8">{selectedWork.description}</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                                            <Briefcase className="w-4 h-4" /> Client / Brand
                                        </h4>
                                        <p className="text-lg font-medium">{selectedWork.brand}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                                            <User className="w-4 h-4" /> Creator / Talent
                                        </h4>
                                        <p className="text-lg font-medium">{selectedWork.creator}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                                            My Role (Deliverables)
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedWork.role.map(r => (
                                                <span key={r} className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-md font-medium">
                                                    {r}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-muted p-6 rounded-2xl border border-border">
                                    <h4 className="font-heading font-bold text-lg mb-3">Goal / Result</h4>
                                    <p className="text-muted-foreground">{selectedWork.goal}</p>
                                    <p className="text-sm italic text-muted-foreground mt-4 pt-4 border-t border-border/50">
                                        Year Delivered: {selectedWork.year}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Modal>

        </Section>
    );
};
