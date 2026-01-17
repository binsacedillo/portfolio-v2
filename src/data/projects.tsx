import React from "react";
import { Languages, Newspaper, Plane, Users } from "lucide-react";

export type Project = {
    title: string;
    description: string;
    icon: React.ReactNode;
    isFeatured?: boolean;
    category?: string;
    valueProposition?: string;
    metrics?: { label: string; value: string }[];
    liveUrl?: string;
    repoUrl?: string;
    tags?: string[];
    image?: string;
};

export const projects: Project[] = [
    {
        title: "Pilot Handbook - Aviation Management Platform",
        description: "A pilot logbook management application using Next.js with TypeScript, tRPC for API communication, Prisma with PostgreSQL for data persistence, Clerk authentication, and Tailwind CSS for responsive styling across all devices.",
        valueProposition: "Streamlining aviation management with modern technology for pilots worldwide.",
        icon: <Plane size={48} />,
        category: "Full-Stack",
        isFeatured: true,
        image: "/pilothandbook.jpg",
        metrics: [
            { label: "Performance", value: "98/100" },
            { label: "Tech Stack", value: "Full-Stack" },
        ],
        liveUrl: "https://pilot-handbook.vercel.app/",
        repoUrl: "https://github.com/binsacedillo/pilot-handbook",
        tags: [
            "Next.js",
            "TypeScript",
            "tRPC",
            "Prisma",
            "PostgreSQL",
            "Clerk",
            "Tailwind CSS",
            "Supabase",
            "Full-Stack",
            "Aviation",
        ],
    },
    {
        title: "Japanese Language Learning Website",
        description: "A responsive Japanese Language Learning website with bilingual navigation, translation features, and React Router for seamless page transitions.",
        icon: <Languages size={32} />,
        category: "Frontend",
        tags: ["React", "React Router", "i18n", "Responsive", "Education", "Language Learning", "Frontend"],
        image: "/japaneselangwebsite.jpg",
        repoUrl: "https://github.com/binsacedillo/JapLanguageLearningWebsite",
    },
    {
        title: "News Website",
        description: "A responsive news platform featuring breaking news carousel, dynamic content loading, search functionality, and an intuitive footer design.",
        icon: <Newspaper size={32} />,
        category: "Frontend",
        tags: ["React", "Carousel", "Search", "Responsive", "Frontend", "News"],
        image: "/newswebsite.png",
        repoUrl: "https://github.com/binsacedillo/newsWebsite",
    },
    {
        title: "Idol Group Website",
        description: "A multi-page responsive website showcasing styled-components architecture and React Router for seamless navigation across pages.",
        icon: <Users size={32} />,
        category: "Frontend",
        tags: ["React", "Styled Components", "React Router", "Responsive", "Frontend", "Entertainment"],
        image: "/idolwebsite.png",
        repoUrl: "https://github.com/binsacedillo/IdolWebsite",
    },
];
