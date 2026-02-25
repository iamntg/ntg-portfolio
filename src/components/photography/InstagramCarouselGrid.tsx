import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Instagram } from '@/components/ui/BrandIcons';
import { instagramCarousels } from '@/data/instagramCarousels';

export const InstagramCarouselGrid: React.FC = () => {
    // Shuffle the array once when the component mounts
    const shuffledPosts = useMemo(() => {
        return [...instagramCarousels].sort(() => Math.random() - 0.5);
    }, []);

    const handleOpenPost = (urlKey: string) => {
        window.open(`https://www.instagram.com/p/${urlKey}/`, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {shuffledPosts.map((post, idx) => (
                <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="group relative cursor-pointer overflow-hidden rounded-xl bg-muted aspect-square"
                    onClick={() => handleOpenPost(post.postUrlKey)}
                >
                    {/* Thumbnail */}
                    <img
                        src={post.thumbnailUrl}
                        alt={post.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Instagram Icon Overlay (always visible but subtle) */}
                    <div className="absolute top-3 right-3 z-10 p-1.5 bg-black/40 backdrop-blur-md rounded-lg border border-white/10 text-white/70 group-hover:text-white group-hover:bg-black/60 transition-all duration-300">
                        <Instagram className="w-4 h-4" />
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4 md:p-6">
                        {post.shootTag && (
                            <span className="text-[10px] uppercase tracking-widest text-white/60 mb-1 font-medium">
                                {post.shootTag}
                            </span>
                        )}
                        <h3 className="text-white font-heading font-semibold text-sm md:text-base mb-2 line-clamp-2">
                            {post.title}
                        </h3>

                        <div className="flex items-center gap-2 text-white/80 text-xs font-medium pt-2 border-t border-white/10 mt-auto translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <span>View on Instagram</span>
                            <ExternalLink className="w-3 h-3" />
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};
