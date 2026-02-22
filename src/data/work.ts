// Instructions for updating media:
// 1. YouTube: Upload an unlisted video to your YouTube channel. Copy the video ID (from the watch?v= parameter).
//    Add { type: "youtube", id: "YOUR_ID" } to the item's media property.
// 2. MP4: Place short, optimized .mp4 preview clips in the /public/videos folder (or use absolute URLs).
//    Add { type: "mp4", src: "/videos/your_clip.mp4", poster?: "optional_poster_url.jpg" } to the media property.
// 3. Image: Standard image entries for Photography or fallbacks.
//    Add { type: "image", src: "image_url.jpg" } to the media property.

export type Category = "All" | "Brand Campaigns" | "Events & Festivals" | "Creative / Model Work" | "YouTube & Cinematic" | "Photography";
export type Orientation = "vertical" | "horizontal";

export interface WorkItem {
    id: string;
    title: string;
    category: Category;
    brand?: string;
    year?: string;
    description?: string;
    tags?: string[];
    thumbnailUrl: string;
    orientation: Orientation;
    media:
    | { type: "youtube"; id: string }
    | { type: "mp4"; src: string; poster?: string }
    | { type: "image"; src: string; alt?: string };
}

export const brands = [
    "Turo",
    "FYidoctors",
    "CrossIron Mills",
    "New Chapter",
    "Lagostina",
    "HomeSense",
    "Kohinoor Jewellers"
];

export const portfolioWork: WorkItem[] = [
    {
        id: "1",
        title: "Turo Summer Campaign",
        category: "Brand Campaigns",
        brand: "Turo",
        year: "2024",
        description: "Energetic and visually stunning campaign highlighting premium vehicle rentals for summer road trips. Delivered across multiple social channels.",
        tags: ["IG Reel", "TikTok"],
        thumbnailUrl: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800",
        orientation: "vertical",
        media: {
            type: "mp4",
            src: "https://www.w3schools.com/html/mov_bbb.mp4", // Replace with your actual local/remote MP4 link
            poster: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800"
        }
    },
    {
        id: "2",
        title: "FYidoctors Designer Frames",
        category: "Brand Campaigns",
        brand: "FYidoctors",
        year: "2023",
        description: "A fast-paced, trendy showcase of new designer frame collections, tailored for TikTok and Instagram Reels.",
        tags: ["TikTok", "IG Reel"],
        thumbnailUrl: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&q=80&w=800",
        orientation: "vertical",
        media: {
            type: "youtube",
            id: "dQw4w9WgXcQ" // Vertical Short or reel ID
        }
    },
    {
        id: "8",
        title: "Calgary Stampede Highlights",
        category: "Events & Festivals",
        brand: "Tourism Calgary",
        year: "2023",
        description: "High-energy event recap capturing the sights, sounds, and excitement of the Greatest Outdoor Show on Earth.",
        tags: ["YouTube"],
        thumbnailUrl: "https://images.unsplash.com/photo-1533174000255-b44c205763ee?auto=format&fit=crop&q=80&w=800",
        orientation: "horizontal",
        media: {
            type: "youtube",
            id: "dQw4w9WgXcQ" // Horizontal YouTube ID
        }
    },
    {
        id: "3",
        title: "CrossIron Mills Holiday Haul",
        category: "Brand Campaigns",
        brand: "CrossIron Mills",
        year: "2023",
        description: "Dynamic shopping experience capturing the festive atmosphere and premium retailers at CrossIron Mills.",
        thumbnailUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800",
        orientation: "vertical",
        media: {
            type: "image",
            src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800"
        }
    },
    {
        id: "4",
        title: "Lagostina Premium Cookware",
        category: "Brand Campaigns",
        brand: "Lagostina",
        year: "2024",
        description: "Cinematic culinary content emphasizing the durability and striking aesthetic of Lagostina's premium cookware line.",
        thumbnailUrl: "https://images.unsplash.com/photo-1584990347449-a1c87eb57ea6?auto=format&fit=crop&q=80&w=800",
        orientation: "vertical",
        media: {
            type: "image",
            src: "https://images.unsplash.com/photo-1584990347449-a1c87eb57ea6?auto=format&fit=crop&q=80&w=800"
        }
    },
    {
        id: "5",
        title: "HomeSense Seasonal Refresh",
        category: "Brand Campaigns",
        brand: "HomeSense",
        year: "2023",
        description: "Showcasing affordable, stylish seasonal decor finds in a highly engaging short-form format.",
        thumbnailUrl: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800",
        orientation: "vertical",
        media: {
            type: "image",
            src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800"
        }
    },
    {
        id: "6",
        title: "Kohinoor Jewellers Collection",
        category: "Brand Campaigns",
        brand: "Kohinoor Jewellers",
        year: "2024",
        description: "Elegant macro videography highlighting the intricate details of luxury bridal jewelry pieces.",
        thumbnailUrl: "https://images.unsplash.com/photo-1599643478514-4a11011d31ed?auto=format&fit=crop&q=80&w=800",
        orientation: "vertical",
        media: {
            type: "image",
            src: "https://images.unsplash.com/photo-1599643478514-4a11011d31ed?auto=format&fit=crop&q=80&w=800"
        }
    },
    {
        id: "7",
        title: "New Chapter Wellness",
        category: "Brand Campaigns",
        brand: "New Chapter",
        year: "2024",
        description: "A calming lifestyle routine integrating natural supplements into daily wellness practices.",
        thumbnailUrl: "https://images.unsplash.com/photo-1584308666744-24d5e478ce13?auto=format&fit=crop&q=80&w=800",
        orientation: "vertical",
        media: {
            type: "image",
            src: "https://images.unsplash.com/photo-1584308666744-24d5e478ce13?auto=format&fit=crop&q=80&w=800"
        }
    },
    {
        id: "9",
        title: "Fashion Week Backstage",
        category: "Events & Festivals",
        brand: "Local Designers",
        year: "2024",
        description: "A gritty, fast-paced documentary style look at the chaos and beauty behind the runway.",
        thumbnailUrl: "https://images.unsplash.com/photo-1509631179647-0c11573e32bd?auto=format&fit=crop&q=80&w=800",
        orientation: "vertical",
        media: {
            type: "image",
            src: "https://images.unsplash.com/photo-1509631179647-0c11573e32bd?auto=format&fit=crop&q=80&w=800"
        }
    },
    {
        id: "10",
        title: "Neon Nights Urban Editorial",
        category: "Creative / Model Work",
        brand: "Independent",
        year: "2023",
        description: "Moody, cyberpunk-inspired model shoot focusing on creative lighting and streetwear.",
        thumbnailUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800",
        orientation: "vertical",
        media: {
            type: "image",
            src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800"
        }
    },
    {
        id: "11",
        title: "Kyoto After Dark",
        category: "YouTube & Cinematic",
        brand: "Nebulatic",
        year: "2023",
        description: "A cinematic visual journey through the neon-lit streets of Kyoto, Japan. Focusing on atmosphere and sound design.",
        thumbnailUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800",
        orientation: "horizontal",
        media: {
            type: "image",
            src: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800"
        }
    },
    {
        id: "12",
        title: "The Art of Coffee",
        category: "YouTube & Cinematic",
        brand: "Nebulatic",
        year: "2023",
        description: "A short documentary-style sequence exploring local craft coffee culture.",
        thumbnailUrl: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800",
        orientation: "horizontal",
        media: {
            type: "image",
            src: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800"
        }
    },
    {
        id: "13",
        title: "Editorial Brand Shoot",
        category: "Photography",
        brand: "Private Client",
        year: "2024",
        description: "Studio editorial photography for a boutique fashion brand's summer catalog.",
        thumbnailUrl: "https://images.unsplash.com/photo-1555243896-771a337c7ee0?auto=format&fit=crop&q=80&w=800",
        orientation: "vertical",
        media: {
            type: "image",
            src: "https://images.unsplash.com/photo-1555243896-771a337c7ee0?auto=format&fit=crop&q=80&w=800"
        }
    },
    {
        id: "14",
        title: "Automotive Precision",
        category: "Photography",
        brand: "Private Client",
        year: "2023",
        description: "High-contrast automotive photography highlighting vehicle curves and design.",
        thumbnailUrl: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&w=800",
        orientation: "horizontal",
        media: {
            type: "image",
            src: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&w=800"
        }
    }
];
