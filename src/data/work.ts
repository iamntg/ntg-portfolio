// Instructions for updating media:
// 1. YouTube: Upload an unlisted video to your YouTube channel. Copy the video ID (from the watch?v= parameter).
//    Add { type: "youtube", id: "YOUR_ID" } to the item's media property.
// 2. MP4: Place short, optimized .mp4 preview clips in the /public/videos folder (or use absolute URLs).
//    Add { type: "mp4", src: "/videos/your_clip.mp4", poster?: "optional_poster_url.jpg" } to the media property.
// 3. Image: Standard image entries for Photography or fallbacks.
//    Add { type: "image", src: "image_url.jpg" } to the media property.

import turoThumb from '@/assets/portfolio-imgs/turo.jpg';
import vogueThumb from '@/assets/portfolio-imgs/vogue.jpg';
import lagostinaThumb from '@/assets/portfolio-imgs/lagostina.jpg';
import kohinoorThumb from '@/assets/portfolio-imgs/kohinoor.jpg';
import crossironThumb from '@/assets/portfolio-imgs/crossiron.jpg';
import homesenseThumb from '@/assets/portfolio-imgs/homesense.jpg';
import fyiSunglassThumb from '@/assets/portfolio-imgs/fyi_sunglass.jpg';
import newChapterThumb from '@/assets/portfolio-imgs/new_chapter.jpg';
import heartwoodThumb from '@/assets/portfolio-imgs/heartwood.jpg';
import stampedeVThumb from '@/assets/portfolio-imgs/stampede_v.jpg';
import socalityThumb from '@/assets/portfolio-imgs/socality.jpg';
import breezyThumb from '@/assets/portfolio-imgs/breezy.jpg';
import expoThumb from '@/assets/portfolio-imgs/calgary_expo.jpg';
import nycThumb from '@/assets/portfolio-imgs/nyc.jpg';
import stampedeHThumb from '@/assets/portfolio-imgs/stampede_h.jpg';
import theyyamThumb from '@/assets/portfolio-imgs/theyyam.jpg';
import sakuraThumb from '@/assets/portfolio-imgs/sakura.jpg';
import chinookThumb from '@/assets/portfolio-imgs/chinook.jpg';


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
        title: "Turo Summer Stampede Campaign",
        category: "Brand Campaigns",
        brand: "Turo",
        year: "2024",
        description: "Energetic and visually stunning campaign highlighting premium vehicle rentals for summer road trips. Delivered across multiple social channels.",
        tags: ["IG Reel", "TikTok"],
        thumbnailUrl: turoThumb,
        orientation: "vertical",
        media: {
            type: "youtube",
            id: "4P2_f4cFgk4" // Vertical Short or reel ID
        }
    },
    {
        id: "2",
        title: "Vogue Eyewear | FYidoctors",
        category: "Brand Campaigns",
        brand: "FYidoctors",
        year: "2025",
        description: "A fast-paced, trendy showcase of new designer frame collections, tailored for TikTok and Instagram Reels.",
        tags: ["TikTok", "IG Reel"],
        thumbnailUrl: vogueThumb,
        orientation: "vertical",
        media: {
            type: "youtube",
            id: "lFrIKXDTguk" // Vertical Short or reel ID
        }
    },
    {
        id: "3",
        title: "Lagostina Premium Cookware",
        category: "Brand Campaigns",
        brand: "Lagostina",
        year: "2025",
        description: "Cinematic culinary content emphasizing the durability and striking aesthetic of Lagostina's premium cookware line.",
        thumbnailUrl: lagostinaThumb,
        orientation: "vertical",
        media: {
            type: "youtube",
            id: "Fyd3DCjybTw"
        }
    },
    {
        id: "4",
        title: "Kohinoor Jewellers Collection",
        category: "Brand Campaigns",
        brand: "Kohinoor Jewellers",
        year: "2024",
        description: "Elegant macro videography highlighting the intricate details of luxury bridal jewelry pieces.",
        thumbnailUrl: kohinoorThumb,
        orientation: "vertical",
        media: {
            type: "youtube",
            id: "onJ-FYE9wBI"
        }
    },
    {
        id: "5",
        title: "CrossIron Mills Holiday Haul",
        category: "Brand Campaigns",
        brand: "CrossIron Mills",
        year: "2023",
        description: "Dynamic shopping experience capturing the festive atmosphere and premium retailers at CrossIron Mills.",
        thumbnailUrl: crossironThumb,
        orientation: "vertical",
        media: {
            type: "youtube",
            id: "8XjPxK8EIpk"
        }
    },
    {
        id: "6",
        title: "HomeSense Seasonal Refresh",
        category: "Brand Campaigns",
        brand: "HomeSense",
        year: "2023",
        description: "Showcasing affordable, stylish seasonal decor finds in a highly engaging short-form format.",
        thumbnailUrl: homesenseThumb,
        orientation: "vertical",
        media: {
            type: "youtube",
            id: "PUsxY9yp5zE"
        }
    },
    {
        id: "7",
        title: "FYidoctors Sunglasses",
        category: "Brand Campaigns",
        brand: "FYidoctors",
        year: "2024",
        description: "A fast-paced, trendy showcase of FYidoctors Sunglasses for World Sunglasses Day, tailored for TikTok and Instagram Reels.",
        thumbnailUrl: fyiSunglassThumb,
        orientation: "vertical",
        media: {
            type: "youtube",
            id: "3BNsY3wW_mU"
        }
    },
    {
        id: "8",
        title: "New Chapter Wellness",
        category: "Brand Campaigns",
        brand: "New Chapter",
        year: "2024",
        description: "A calming lifestyle routine integrating natural supplements into daily wellness practices.",
        thumbnailUrl: newChapterThumb,
        orientation: "vertical",
        media: {
            type: "youtube",
            id: "FmsqO48n7-k"
        }
    },
    {
        id: "9",
        title: "Calgary Stampede Highlights",
        category: "Events & Festivals",
        brand: "Self",
        year: "2023",
        description: "High-energy event recap capturing the sights, sounds, and excitement of the Greatest Outdoor Show on Earth.",
        tags: ["YouTube"],
        thumbnailUrl: stampedeVThumb,
        orientation: "vertical",
        media: {
            type: "youtube",
            id: "bF7oOC1obaM"
        }
    },
    {
        id: "10",
        title: "Canon Calgary Creative Event",
        category: "Events & Festivals",
        brand: "Self",
        year: "2024",
        description: "A creative event hosted by Canon Canada x Socality for photographers and videographers to showcase their work.",
        thumbnailUrl: socalityThumb,
        orientation: "vertical",
        media: {
            type: "youtube",
            id: "iCkywsCNR3k"
        }
    },
    {
        id: "11",
        title: "Breezy City Nights",
        category: "Creative / Model Work",
        brand: "Self",
        year: "2023",
        description: "Moody, neon lit model shoot focusing on city lights.",
        thumbnailUrl: breezyThumb,
        orientation: "vertical",
        media: {
            type: "youtube",
            id: "9wnLMJIo8Hs"
        }
    },
    {
        id: "12",
        title: "Calgary Expo",
        category: "Events & Festivals",
        brand: "Self",
        year: "2024",
        description: "A recap of the Calgary Expo, showcasing the best cosplays and moments from the event.",
        thumbnailUrl: expoThumb,
        orientation: "vertical",
        media: {
            type: "youtube",
            id: "odX7MSitVXY"
        }
    },
    {
        id: "13",
        title: "Chinook Blast | Winter Festival",
        category: "Events & Festivals",
        brand: "Self",
        year: "2024",
        description: "A recap of the Chinook Blast | Winter Festival, showcasing the best moments from the event.",
        thumbnailUrl: chinookThumb,
        orientation: "vertical",
        media: {
            type: "youtube",
            id: "MF4LoAL88-0"
        }
    },
    {
        id: "14",
        title: "New York City | The Dream",
        category: "YouTube & Cinematic",
        brand: "Nebulatic",
        year: "2026",
        description: "A cinematic visual journey through the neon-lit streets of New York City. Focusing on atmosphere and sound design.",
        thumbnailUrl: nycThumb,
        orientation: "horizontal",
        media: {
            type: "youtube",
            id: "GaxOkn-SYLU"
        }
    },
    {
        id: "15",
        title: "Calgary Stampede | The Greatest Outdoor Show on Earth",
        category: "YouTube & Cinematic",
        brand: "Nebulatic",
        year: "2023",
        description: "A short cinematic sequence exploring the Calgary Stampede, showcasing the best moments from the event.",
        thumbnailUrl: stampedeHThumb,
        orientation: "horizontal",
        media: {
            type: "youtube",
            id: "B8yTYXH2MK4"
        }
    },
    {
        id: "16",
        title: "Theyyam",
        category: "YouTube & Cinematic",
        brand: "Nebulatic",
        year: "2026",
        description: "A short cinematic sequence exploring the Theyyam, showcasing the best moments from the event.",
        thumbnailUrl: theyyamThumb,
        orientation: "horizontal",
        media: {
            type: "youtube",
            id: "5TuU77QUwxs"
        }
    },
    {
        id: "17",
        title: "Sakura Days | Japan Fair | Vancouver",
        category: "YouTube & Cinematic",
        brand: "Nebulatic",
        year: "2025",
        description: "A short cinematic sequence exploring the Sakura Days | Japan Fair | Vancouver, showcasing the best moments from the event.",
        thumbnailUrl: sakuraThumb,
        orientation: "horizontal",
        media: {
            type: "youtube",
            id: "KvPjKkpsask"
        }
    },
    {
        id: "18",
        title: "Heartwood Community Inaugural Event",
        category: "Events & Festivals",
        brand: "Heartwood Community, Calgary",
        year: "2025",
        description: "A recap of the Heartwood Community Inaugural Event, showcasing the best moments from the event.",
        thumbnailUrl: heartwoodThumb,
        orientation: "vertical",
        media: {
            type: "youtube",
            id: "LtlaOKrT9-w"
        }
    },
];
