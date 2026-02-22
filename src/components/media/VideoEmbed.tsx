import React from 'react';
import type { WorkItem } from '../../data/work';

interface VideoEmbedProps {
    media: WorkItem['media'];
    orientation: WorkItem['orientation'];
    title: string;
}

export const VideoEmbed: React.FC<VideoEmbedProps> = ({ media, orientation, title }) => {

    // Fallback if media is an image (should not happen if this component is strictly for video, but good to handle)
    if (media.type === 'image') {
        return (
            <div className={`w-full h-full bg-black flex items-center justify-center ${orientation === 'vertical' ? 'h-[80vh]' : 'aspect-video'}`}>
                <img src={media.src} alt={media.alt || title} className="w-full h-full object-contain" />
            </div>
        );
    }

    // Aspect Ratio Container Classes
    // Horizontal: Standard 16:9 
    // Vertical: 9:16 bounded by a max width so it's not gigantic on ultra-wides, max-height 80vh
    const containerClasses = orientation === 'vertical'
        ? "relative w-full max-w-[420px] mx-auto overflow-hidden bg-black aspect-[9/16] max-h-[80vh] flex-shrink-0"
        : "relative w-full overflow-hidden bg-black aspect-video flex-shrink-0";

    return (
        <div className={`flex items-center justify-center w-full bg-black flex-1 relative ${orientation === 'vertical' ? 'max-h-[80vh]' : ''}`}>
            <div className={containerClasses}>
                {media.type === 'youtube' && (
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={`https://www.youtube-nocookie.com/embed/${media.id}?autoplay=0&controls=0&rel=0&modestbranding=1&playsinline=1`}
                        title={title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        loading="lazy"
                        aria-label={`Video player for ${title}`}
                    />
                )}

                {media.type === 'mp4' && (
                    <video
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        controls
                        playsInline
                        preload="metadata"
                        muted={false} // Allow user to unmute
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
