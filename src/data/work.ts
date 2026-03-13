// Instructions for updating media:
// 1. YouTube: Upload an unlisted video to your YouTube channel. Copy the video ID (from the watch?v= parameter).
//    Add { type: "youtube", id: "YOUR_ID" } to the item's media property.
// 2. MP4: Place short, optimized .mp4 preview clips in the /public/videos folder (or use absolute URLs).
//    Add { type: "mp4", src: "/videos/your_clip.mp4", poster?: "optional_poster_url.jpg" } to the media property.
// 3. Image: Standard image entries for Photography or fallbacks.
//    Add { type: "image", src: "image_url.jpg" } to the media property.

import stampedeVThumb from '@/assets/portfolio-imgs/stampede_v.jpg';
import socalityThumb from '@/assets/portfolio-imgs/socality.jpg';
import breezyThumb from '@/assets/portfolio-imgs/breezy.jpg';
import expoThumb from '@/assets/portfolio-imgs/calgary_expo.jpg';
import nycThumb from '@/assets/portfolio-imgs/nyc.jpg';
import stampedeHThumb from '@/assets/portfolio-imgs/stampede_h.jpg';
import theyyamThumb from '@/assets/portfolio-imgs/theyyam.jpg';
import sakuraThumb from '@/assets/portfolio-imgs/sakura.jpg';
import chinookThumb from '@/assets/portfolio-imgs/chinook.jpg';
import duskyThumb from '@/assets/portfolio-imgs/dusky.jpg';
import donHoney from '@/assets/portfolio-imgs/donHoney.jpg';


export const WORK_CATEGORIES = [
    "All",
    "Intimate Events",
    "Events & Festivals",
    "Creative / Model Work",
    "YouTube & Cinematic",
    "Brand Campaigns"
] as const;

export type Category = (typeof WORK_CATEGORIES)[number];
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
        tags: ["IG Reel"],
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
        tags: ["IG Reel"],
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
        tags: ["IG Reel"],
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
        tags: ["IG Reel"],
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
        title: "Dusky Evenings",
        category: "Creative / Model Work",
        brand: "Self",
        year: "2026",
        description: "Moody, shoot during dusk",
        thumbnailUrl: duskyThumb,
        orientation: "vertical",
        tags: ["IG Reel"],
        media: {
            type: "youtube",
            id: "lhxsGc99CYU"
        }
    },
    {
        id: "19",
        title: "Gender Reveal",
        category: "Intimate Events",
        brand: "Don & Honey",
        year: "2026",
        description: "Intimate event of a group of friends, celebrating a gender reveal of the first baby",
        thumbnailUrl: donHoney,
        orientation: "horizontal",
        tags: ["Youtube"],
        media: {
            type: "youtube",
            id: "DD1ChcZffjE"
        }
    },
];
