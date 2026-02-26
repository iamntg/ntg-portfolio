import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';
import type { WorkItem } from '../../data/work';
import { OptimizedImage } from '../ui/OptimizedImage';

interface VideoEmbedProps {
    media: WorkItem['media'];
    orientation: WorkItem['orientation'];
    title: string;
}

export const VideoEmbed: React.FC<VideoEmbedProps> = ({ media, orientation, title }) => {
    const [isPlayed, setIsPlayed] = useState(false);

    // Fallback if media is an image
    if (media.type === 'image') {
        return (
            <div className={`w-full h-full bg-black flex items-center justify-center ${orientation === 'vertical' ? 'h-[80vh]' : 'aspect-video'}`}>
                <OptimizedImage
                    src={media.src}
                    alt={media.alt || title}
                    className="w-full h-full object-contain"
                    showSkeleton={false}
                />
            </div>
        );
    }

    const containerClasses = orientation === 'vertical'
        ? "relative w-full max-w-[420px] mx-auto overflow-hidden bg-black aspect-[9/16] max-h-[80vh] flex-shrink-0"
        : "relative w-full overflow-hidden bg-black aspect-video flex-shrink-0";

    const handlePlay = () => setIsPlayed(true);

    return (
        <div className={`flex items-center justify-center w-full bg-black flex-1 relative ${orientation === 'vertical' ? 'max-h-[80vh]' : ''}`}>
            <div className={containerClasses}>
                {media.type === 'youtube' && (
                    <AnimatePresence mode="wait">
                        {!isPlayed ? (
                            <motion.div
                                key="preview"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 cursor-pointer group"
                                onClick={handlePlay}
                            >
                                <OptimizedImage
                                    src={`https://img.youtube.com/vi/${media.id}/maxresdefault.jpg`}
                                    alt={`Video preview for ${title}`}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    showSkeleton={true}
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                                    <div className="w-20 h-20 rounded-full bg-primary/90 text-white flex items-center justify-center shadow-2xl transform transition-transform duration-300 group-hover:scale-110 group-active:scale-95">
                                        <Play className="w-10 h-10 fill-current ml-1" />
                                    </div>
                                </div>
                                <button
                                    className="sr-only"
                                    onClick={(e) => { e.stopPropagation(); handlePlay(); }}
                                    aria-label={`Play video: ${title}`}
                                >
                                    Play Video
                                </button>
                            </motion.div>
                        ) : (
                            <motion.iframe
                                key="video"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="absolute top-0 left-0 w-full h-full"
                                src={`https://www.youtube-nocookie.com/embed/${media.id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                                title={title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                aria-label={`Video player for ${title}`}
                            />
                        )}
                    </AnimatePresence>
                )}

                {media.type === 'mp4' && (
                    <video
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        controls
                        playsInline
                        preload="metadata"
                        muted={false}
                        poster={media.poster}
                        aria-label={`Video player for ${title}`}
                    >
                        <source src={media.src} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}
            </div>
        </div>
    );
};
