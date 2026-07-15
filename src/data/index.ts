
import donClientImg from "@/assets/clients/don.jpg"
import aliyaClientImg from "@/assets/clients/aliya.jpg"
import saravanClientImg from "@/assets/clients/saravan.jpg"

export const navLinks = [
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "About", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
];

export const heroContent = {
    headline: "Video that gets Calgary businesses, creators, and moments noticed.",
    subheadline: "Short-form reels, brand campaigns, and cinematic event films, shot, edited, and delivered end-to-end. Based in Calgary.",
    badges: ["28 campaigns delivered", "Fast turnaround", "Calgary-based"],
};

export const services = [
    {
        id: "1",
        title: "Social Reel",
        price: "From $350",
        description: "One scroll-ready reel for Instagram or TikTok, shot and edited end-to-end.",
        included: [
            "Planning & shot list",
            "On-location shoot + full edit & color",
            "1 revision round",
            "2–5 day turnaround",
        ],
    },
    {
        id: "2",
        title: "Local Business Content Day",
        price: "From $800 · Best value",
        description: "One shoot session, three reels for your café, restaurant, or shop.",
        included: [
            "Half-day on-location shoot",
            "3 platform-ready short-form reels",
            "1 revision round",
            "3–5 day turnaround",
        ],
    },
    {
        id: "3",
        title: "Event Highlights",
        price: "From $650",
        description: "Cinematic recap of your event or launch.",
        included: [
            "Up to 4 hours of coverage",
            "2–5 min highlight reel with audio",
            "5–7 day turnaround",
        ],
    },
    {
        id: "4",
        title: "Brand / Product Photos",
        price: "From $300",
        description: "High-res retouched images for web, PR, and social.",
        included: [
            "1–2 hour on-location shoot",
            "Retouched final high-res images",
            "2–4 day turnaround",
        ],
    },
    {
        id: "5",
        title: "Monthly Social Retainer",
        price: "From $1,000/mo",
        description: "Four reels a month at the best per-reel rate, with priority scheduling.",
        included: [
            "4 short-form reels / month",
            "Priority booking",
            "Best per-reel value",
            "Ongoing content plan",
        ],
    },
];

export const processSteps = [
    {
        number: "01",
        title: "Discovery",
        description: "We align on your brand identity, target audience, and specific campaign goals.",
    },
    {
        number: "02",
        title: "Shot List",
        description: "I construct a detailed shot list ensuring we capture every essential angle and hook.",
    },
    {
        number: "03",
        title: "Production",
        description: "The main event—shooting your cinematic content on location with professional gear.",
    },
    {
        number: "04",
        title: "Edit & Color",
        description: "Turning raw footage into a polished, well-paced final cut.",
    },
    {
        number: "05",
        title: "Revision",
        description: "One round of focused revisions to ensure the final product hits the mark.",
    },
    {
        number: "06",
        title: "Delivery",
        description: "Final broadcast-ready files delivered within 2-5 typical turnaround days.",
    },
];

export const testimonials = [
    {
        id: "1",
        name: "Aliya Gulamhusein",
        role: "Instagram Influencer | @stylebyaliya",
        content: "Nitheesh is professional, easy to work with, and delivers great quality content. He was organized, reliable, and made filming very straightforward. Pleasure to work with him.",
        avatar: aliyaClientImg,
    },
    {
        id: "2",
        name: "Don & Honey",
        role: "Intimate Event",
        content: "Nitheesh beautifully captured our baby's gender reveal. Professional, creative, and easy to work with. The video is a priceless memory for us.",
        avatar: donClientImg,
    },
    {
        id: "3",
        name: "Saravan",
        role: "Newborn Videoshoot",
        content: "The whole experience with Nitheesh was surreal. It was the first time we were taking our baby out for an outdoor shoot, and he made sure we were comfortable every step of the way. The session felt relaxed, pleasant, and completely stress-free.",
        avatar: saravanClientImg,
    },
];
