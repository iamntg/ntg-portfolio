import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { Instagram } from '@/components/ui/BrandIcons';
import { instagramCarousels } from '@/data/instagramCarousels';
import { OptimizedImage } from '@/components/ui/OptimizedImage';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { Button } from '@/components/ui/Button';

// On mobile, collapse the grid to 3 rows (2 columns) so users don't have to
// scroll the whole section to move on. Desktop always shows everything.
const MOBILE_COLLAPSED_COUNT = 6;

export const InstagramCarouselGrid: React.FC = () => {
    // Shuffle the array once when the component mounts so the grid varies per visit.
    // The randomness is intentional and computed once (empty deps), so the purity
    // rule's concern about non-deterministic render output doesn't apply here.
    const shuffledPosts = useMemo(() => {
        // eslint-disable-next-line react-hooks/purity -- intentional one-time shuffle
        return [...instagramCarousels].sort(() => Math.random() - 0.5);
    }, []);

    const isMobile = useMediaQuery('(max-width: 767px)');
    const [isExpanded, setIsExpanded] = useState(false);

    const isCollapsed = isMobile && !isExpanded && shuffledPosts.length > MOBILE_COLLAPSED_COUNT;
    const visiblePosts = isCollapsed ? shuffledPosts.slice(0, MOBILE_COLLAPSED_COUNT) : shuffledPosts;

    const handleOpenPost = (urlKey: string) => {
        window.open(`https://www.instagram.com/p/${urlKey}/`, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="relative">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {visiblePosts.map((post, idx) => (
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
                    <OptimizedImage
                        src={post.thumbnailUrl}
                        alt={post.title}
                        aspectRatio="1/1"
                        loading="lazy"
                        className="transition-transform duration-700 group-hover:scale-110"
                        wrapperClassName="absolute inset-0"
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

            {/* Mobile-only fade + "Show more" over the last visible row */}
            {isCollapsed && (
                <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-end pointer-events-none h-56 bg-gradient-to-t from-background via-background/85 to-transparent">
                    <Button
                        variant="outline"
                        size="lg"
                        onClick={() => setIsExpanded(true)}
                        className="pointer-events-auto rounded-full px-8 mb-2 group"
                        aria-expanded={isExpanded}
                    >
                        <span>Show more</span>
                        <ChevronDown className="ml-2 w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                    </Button>
                </div>
            )}
        </div>
    );
};
