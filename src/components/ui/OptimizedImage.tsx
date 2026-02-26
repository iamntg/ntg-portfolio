import React, { useState } from 'react';

/**
 * Derive a WebP srcset URL from an image src, when possible.
 *
 * - Unsplash URLs:  append / replace format param with &fm=webp
 * - Local Vite assets (.jpg/.jpeg/.png):  not translatable at runtime (Vite
 *   doesn't ship a WebP converter); we return null so only the original is used.
 * - All other remote URLs: try appending ?format=webp (works for many CDNs).
 *
 * The <picture> element always has the original as a final fallback, so this is
 * always safe even if the CDN ignores the parameter.
 */
function deriveWebpSrc(src: string): string | null {
    if (!src) return null;

    // Already a webp – nothing to do
    if (src.includes('.webp') || src.includes('fm=webp') || src.includes('format=webp')) {
        return null;
    }

    // Unsplash (images.unsplash.com or plus.unsplash.com)
    if (src.includes('unsplash.com')) {
        const url = new URL(src);
        url.searchParams.set('fm', 'webp');
        url.searchParams.set('auto', 'compress');
        return url.toString();
    }

    // Pravatar / other fully-remote CDNs that don't support format params – skip
    if (src.startsWith('https://i.pravatar.cc')) return null;

    // Data URLs / blobs – skip
    if (src.startsWith('data:') || src.startsWith('blob:')) return null;

    // Local Vite imports (relative or typical /src paths) – skip, no runtime converter
    if (src.startsWith('/') || !src.startsWith('http')) return null;

    // Generic remote: try ?format=webp
    try {
        const url = new URL(src);
        url.searchParams.set('format', 'webp');
        return url.toString();
    } catch {
        return null;
    }
}

// ─── Component Props ──────────────────────────────────────────────────────────

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    /**
     * Intrinsic width of the image in pixels.
     * Pass this to allow the browser to reserve space before the image loads,
     * preventing Cumulative Layout Shift (CLS).
     */
    intrinsicWidth?: number;
    /**
     * Intrinsic height of the image in pixels.
     * Used together with intrinsicWidth to reserve space.
     */
    intrinsicHeight?: number;
    /**
     * CSS aspect-ratio shorthand, e.g. "4 / 5" or "1 / 1".
     * Alternative to intrinsicWidth + intrinsicHeight for fluid images.
     * If provided, a wrapper div with this aspect-ratio is rendered.
     */
    aspectRatio?: string;
    /** Extra className applied to the outer wrapper when aspectRatio is used. */
    wrapperClassName?: string;
    /** Whether to show an animated skeleton while loading. Default: true */
    showSkeleton?: boolean;
    /**
     * Loading strategy. Defaults to "lazy" for below-the-fold images.
     * Set to "eager" for LCP / hero images.
     */
    loading?: 'lazy' | 'eager';
    /** fetchpriority hint forwarded to the underlying <img>. */
    fetchPriority?: 'high' | 'low' | 'auto';
}

// ─── Component ────────────────────────────────────────────────────────────────

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
    src,
    alt,
    intrinsicWidth,
    intrinsicHeight,
    aspectRatio,
    wrapperClassName = '',
    showSkeleton = true,
    loading = 'lazy',
    fetchPriority = 'auto',
    className = '',
    style,
    ...rest
}) => {
    const [loaded, setLoaded] = useState(false);
    const [errored, setErrored] = useState(false);

    const webpSrc = deriveWebpSrc(src);

    // The <img> element (always present as fallback inside <picture>)
    const imgProps: React.ImgHTMLAttributes<HTMLImageElement> = {
        src,
        alt,
        loading,
        // @ts-expect-error – fetchpriority is a valid HTML attr, React types lag
        fetchpriority: fetchPriority,
        decoding: 'async',
        width: intrinsicWidth,
        height: intrinsicHeight,
        onLoad: () => setLoaded(true),
        onError: () => setErrored(true),
        className: [
            'w-full h-full object-cover',
            // Fade in once loaded to smooth the skeleton → image transition
            'transition-opacity duration-300',
            loaded ? 'opacity-100' : 'opacity-0',
            className,
        ].join(' '),
        style,
        ...rest,
    };

    const img = errored ? (
        // Simple grey error placeholder – same dimensions as the image slot
        <div
            className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground text-xs select-none"
            role="img"
            aria-label={alt}
        >
            Image unavailable
        </div>
    ) : webpSrc ? (
        <picture>
            <source type="image/webp" srcSet={webpSrc} />
            <img {...imgProps} />
        </picture>
    ) : (
        <img {...imgProps} />
    );

    // If the consumer requested an aspect-ratio wrapper, use it.
    // This is the primary CLS-prevention mechanism for fluid images.
    if (aspectRatio) {
        return (
            <div
                className={['relative overflow-hidden', wrapperClassName].join(' ')}
                style={{ aspectRatio }}
            >
                {/* Skeleton */}
                {showSkeleton && !loaded && !errored && (
                    <div className="absolute inset-0 bg-muted animate-pulse" aria-hidden="true" />
                )}
                {img}
            </div>
        );
    }

    // If intrinsic dimensions were provided, the browser reserves space via the
    // width/height attributes — no wrapper needed.
    if (intrinsicWidth && intrinsicHeight) {
        return (
            <div className={['relative', wrapperClassName].join(' ')} style={{ position: 'relative' }}>
                {showSkeleton && !loaded && !errored && (
                    <div className="absolute inset-0 bg-muted animate-pulse" aria-hidden="true" />
                )}
                {img}
            </div>
        );
    }

    // Fallback: no dimension hints provided — just render the picture/img
    return <>{img}</>;
};
