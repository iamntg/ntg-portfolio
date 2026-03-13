
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
    headline: "Cinematic Reels & Brand Content for Influencers and Small Businesses in Calgary",
    subheadline: "I shoot, edit, color grade, and deliver scroll-stopping IG Reels & TikTok ads.",
    badges: ["25+ campaigns delivered", "Fast turnaround", "Calgary-based"],
};

export const services = [
    {
        id: "1",
        title: "Influencer Ad Campaign Reel",
        price: "Packages available — request a quote",
        description: "End-to-end production (shoot + edit) for impactful Instagram & TikTok ads.",
        included: [
            "Pre-production planning & shot list",
            "On-location shoot + Professional editing",
            "Typical turnaround: 2-5 days",
        ],
    },
    {
        id: "2",
        title: "TikTok + IG Bundle",
        price: "Packages available — request a quote",
        description: "Maximizing content yield with optimized ratios and pacing for both platforms.",
        included: [
            "Multiple short-form cuts & hooks",
            "Trend-based editing native to platform",
            "Typical turnaround: 3-5 days"
        ],
    },
    {
        id: "3",
        title: "Event Highlights",
        price: "Custom pricing based on scope",
        description: "Cinematic recap video capturing the essence of your intimate event or launch.",
        included: [
            "Up to 4 hours of event coverage",
            "2-5 min cinematic highlight reel & audio",
            "Typical turnaround: 5-7 days"
        ],
    },
    {
        id: "4",
        title: "Photo Session",
        price: "Packages available — request a quote",
        description: "High-quality brand photography suitable for websites, PR, and social media grids.",
        included: [
            "1-2 hour on-location shoot",
            "Retouched final high-res images",
            "Typical turnaround: 2-4 days"
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
        description: "Transforming raw footage into a polished, scroll-stopping narrative.",
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
