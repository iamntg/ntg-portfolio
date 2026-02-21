export type Category = "Influencer Ads" | "Events" | "Photography" | "YouTube" | "All";
export type Platform = "IG Reel" | "TikTok" | "YouTube" | "Photo" | "All";
export type MediaType = "video" | "image";

export interface WorkItem {
    id: string;
    title: string;
    category: string;
    platform: string[];
    brand: string;
    creator: string;
    year: number;
    thumbnail: string;
    mediaType: MediaType;
    mediaUrl: string; // Placeholder for MP4 / YouTube embed
    description: string;
    role: string[];
    goal: string;
}

export const brands = [
    "HomeSense",
    "BestBuy",
    "Lagostina",
    "FYidoctors",
    "Dairy Farmers of Canada",
    "Gusti",
    "BioGaia",
];

export const portfolioWork: WorkItem[] = [
    {
        id: "1",
        title: "HomeSense Seasonal Refresh",
        category: "Influencer Ads",
        platform: ["IG Reel", "TikTok"],
        brand: "HomeSense",
        creator: "@stylebyaliya",
        year: 2023,
        thumbnail: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800",
        mediaType: "video",
        mediaUrl: "",
        description: "A dynamic, fast-paced reel showcasing new seasonal decor finds and interior styling tips.",
        role: ["Shoot", "Edit", "Color"],
        goal: "Drive foot traffic and highlight affordable seasonal decor."
    },
    {
        id: "2",
        title: "BestBuy Tech Haul & Setup",
        category: "Influencer Ads",
        platform: ["IG Reel", "TikTok"],
        brand: "BestBuy",
        creator: "@stylebyaliya",
        year: 2023,
        thumbnail: "https://images.unsplash.com/photo-1550009158-9efff6c623a5?auto=format&fit=crop&q=80&w=800",
        mediaType: "video",
        mediaUrl: "",
        description: "Cinematic desk setup transformation featuring the latest productivity tech from BestBuy.",
        role: ["Shoot", "Edit", "Delivery"],
        goal: "Showcase product ecosystem and drive online conversions."
    },
    {
        id: "3",
        title: "Lagostina Cookware Showcase",
        category: "Influencer Ads",
        platform: ["IG Reel"],
        brand: "Lagostina",
        creator: "@stylebyaliya",
        year: 2024,
        thumbnail: "https://images.unsplash.com/photo-1584990347449-a1c87eb57ea6?auto=format&fit=crop&q=80&w=800",
        mediaType: "video",
        mediaUrl: "",
        description: "Premium culinary content highlighting the durability and aesthetic of Lagostina cookware.",
        role: ["Shoot", "Edit", "Color"],
        goal: "Brand awareness and premium positioning."
    },
    {
        id: "4",
        title: "FYidoctors Eyewear Try-on",
        category: "Influencer Ads",
        platform: ["IG Reel", "TikTok"],
        brand: "FYidoctors",
        creator: "@stylebyaliya",
        year: 2023,
        thumbnail: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&q=80&w=800",
        mediaType: "video",
        mediaUrl: "",
        description: "Trendy, energetic eyewear try-on featuring seamless transitions.",
        role: ["Shoot", "Edit", "Color"],
        goal: "Promote new designer frame collections."
    },
    {
        id: "5",
        title: "Gender Reveal Celebration - Sarah & John",
        category: "Events",
        platform: ["IG Reel", "Photo"],
        brand: "Private Client",
        creator: "N/A",
        year: 2023,
        thumbnail: "https://images.unsplash.com/photo-1530103862676-de8892ebe942?auto=format&fit=crop&q=80&w=800",
        mediaType: "video",
        mediaUrl: "",
        description: "Intimate and emotional highlight video capturing the big reveal moment with family.",
        role: ["Shoot", "Edit", "Color"],
        goal: "Create a timeless memory for the family."
    },
    {
        id: "6",
        title: "Dairy Farmers of Canada - Local Love",
        category: "Influencer Ads",
        platform: ["IG Reel"],
        brand: "Dairy Farmers of Canada",
        creator: "@stylebyaliya",
        year: 2023,
        thumbnail: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=800",
        mediaType: "video",
        mediaUrl: "",
        description: "Recipe integration and lifestyle video highlighting local dairy products.",
        role: ["Shoot", "Edit", "Color", "Delivery"],
        goal: "Encourage consumers to look for the Blue Cow logo."
    },
    {
        id: "7",
        title: "Gusti Outerwear Autumn Collection",
        category: "Influencer Ads",
        platform: ["IG Reel", "TikTok"],
        brand: "Gusti",
        creator: "@stylebyaliya",
        year: 2023,
        thumbnail: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=800",
        mediaType: "video",
        mediaUrl: "",
        description: "Outdoor lifestyle aesthetic showcasing durability and comfort of kids' winter wear.",
        role: ["Shoot", "Edit", "Color"],
        goal: "Pre-season awareness and sales."
    },
    {
        id: "8",
        title: "BioGaia Probiotic Routine",
        category: "Influencer Ads",
        platform: ["IG Reel"],
        brand: "BioGaia",
        creator: "@stylebyaliya",
        year: 2024,
        thumbnail: "https://images.unsplash.com/photo-1584308666744-24d5e478ce13?auto=format&fit=crop&q=80&w=800",
        mediaType: "video",
        mediaUrl: "",
        description: "A calming morning routine video integrating the daily supplement.",
        role: ["Shoot", "Edit"],
        goal: "Educate audience on wellness routines."
    },
    {
        id: "9",
        title: "Street Style Fashion Outlet",
        category: "Influencer Ads",
        platform: ["IG Reel", "TikTok"],
        brand: "Fashion Boutique",
        creator: "@anothercreator",
        year: 2024,
        thumbnail: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800",
        mediaType: "video",
        mediaUrl: "",
        description: "High-energy outfit transition reel highlighting different streetwear looks.",
        role: ["Shoot", "Edit", "Transitions"],
        goal: "Showcase styling versatility and drive boutique visits."
    },
    {
        id: "10",
        title: "Gender Reveal Celebration - The Smiths",
        category: "Events",
        platform: ["Photo", "IG Reel"],
        brand: "Private Client",
        creator: "N/A",
        year: 2024,
        thumbnail: "https://images.unsplash.com/photo-1555243896-771a337c7ee0?auto=format&fit=crop&q=80&w=800",
        mediaType: "image",
        mediaUrl: "",
        description: "Elegant outdoor gender reveal photography capturing candid reactions.",
        role: ["Photography", "Retouching"],
        goal: "High-quality stills for family album."
    },
    {
        id: "11",
        title: "Kyoto After Dark - Cinematic Travel",
        category: "YouTube",
        platform: ["YouTube"],
        brand: "Nebulatic",
        creator: "Nitheesh (NTG)",
        year: 2023,
        thumbnail: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800",
        mediaType: "video",
        mediaUrl: "",
        description: "A moody, atmospheric visual journey through the neon-lit streets of Kyoto.",
        role: ["Direct", "Shoot", "Edit", "Sound Design"],
        goal: "Grow personal YouTube channel audience and flex cinematic style."
    },
    {
        id: "12",
        title: "The Art of Coffee - Calgary",
        category: "YouTube",
        platform: ["YouTube"],
        brand: "Nebulatic",
        creator: "Nitheesh (NTG)",
        year: 2023,
        thumbnail: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800",
        mediaType: "video",
        mediaUrl: "",
        description: "A short documentary-style sequence on local craft coffee culture in YYC.",
        role: ["Direct", "Shoot", "Edit", "Color Grading"],
        goal: "Showcase storytelling and B-roll capabilities."
    }
];
