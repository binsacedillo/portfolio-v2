import React from "react";
import { Languages, Newspaper, Plane, Users, Activity, Shield, Church } from "lucide-react";

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
    status?: string;
    startDate?: string;
};

export const projects: Project[] = [
    {
        title: "Faith Feed | Visita Iglesia 2026",
        description: "A high-fidelity, meditative PWA designed for the Holy Week 2026 pilgrimage. This distraction-free digital companion features immersive liturgical content, date-aware Scripture cards for the Triduum, and offline-first accessibility for seamless devotions in busy cathedrals.",
        valueProposition: "Streamlining the traditional 7-Church pilgrimage with immersive digital liturgy and offline-first mobile excellence.",
        icon: <Church size={48} />,
        category: "Full-Stack / PWA",
        isFeatured: true,
        image: "/faithfeed.jpg",
        metrics: [
            { label: "Performance", value: "99/100" },
            { label: "Architecture", value: "T3 Stack" },
        ],
        startDate: "Apr 2026",
        liveUrl: "https://faithfeed.vercel.app/",
        repoUrl: "https://github.com/binsacedillo/faithfeed-visita-iglesia",
        tags: [
            "Next.js 15",
            "TypeScript",
            "tRPC",
            "Prisma",
            "SQLite",
            "Serwist (PWA)",
            "Glassmorphism",
            "Offline First",
            "Full-Stack",
            "Liturgical Tech",
        ],
    },
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
        startDate: "Feb 2026",
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
        title: "FEU Tamaraws | UAAP Season 88 Roster Experience",
        description: "A premium athlete showcase prototype built for the FEU Tamaraws. This high-performance web interface features immersive 3D-perspective carousels, dynamic character watermarks, and high-fidelity entrance animations designed to meet ISO 9241 and WCAG 2.1 accessibility standards.",
        icon: <Shield size={32} />,
        category: "Interactive UI",
        image: "/feuroster.jpg",
        startDate: "Mar 2026",
        liveUrl: "https://feu-tamaraws-roster.vercel.app/",
        repoUrl: "https://github.com/binsacedillo/feu-tamaraws-roster",
        tags: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS v4",
            "Framer Motion",
            "React 19",
            "UX/UI Design",
            "Accessibility (WCAG)",
            "Mobile Responsive",
            "Sports Tech",
            "Premium UI",
        ],
    },
    {
        title: "Secure FHIR Interoperability Layer",
        description: "A specialized backend service built with FastAPI that acts as a secure gateway to HL7 FHIR servers. Features include patient demographics search, clinical data aggregation, and a custom Clinical Decision Support engine for allergy conflict detection.",
        icon: <Activity size={32} />,
        category: "Backend",
        tags: [
            "Python",
            "FastAPI",
            "HL7 FHIR",
            "REST API",
            "Clinical Data",
            "Security",
            "Backend",
            "Interoperability",
        ],
        image: "/fhirproject.jpg",
        startDate: "Feb 2026",
        repoUrl: "https://github.com/yourusername/fhir_project",
        liveUrl: "https://fhir-project-zeta.vercel.app",
    },
    {
        title: "Japanese Language Learning Platform",
        description:
            "A modern educational web platform built with React 19, TypeScript, and Vite. It includes a custom context-based i18n system (English/Japanese), modular page architecture, animated UI interactions with Framer Motion, and a structured resources/community experience.",
        icon: <Languages size={32} />,
        category: "Frontend",
        tags: [
            "React 19",
            "TypeScript",
            "Vite",
            "React Router v7",
            "Custom i18n (Context API)",
            "Framer Motion",
            "Tailwind CSS v4",
            "Responsive Design",
            "Education Tech",
        ],
        image: "/japaneselangwebsite.jpg",
        startDate: "Jul 2023",
        repoUrl: "https://github.com/binsacedillo/JapLanguageLearningWebsite",
    },
    {
        title: "MySQL Authentication Layer",
        description: "A secure backend implementation for user authentication and relational database management. Features structured SQL schemas, password hashing, and session management.",
        icon: <Shield size={32} />,
        category: "Backend",
        tags: ["MySQL", "Auth", "Backend", "SQL", "Security"],
        startDate: "Sep 2023",
        repoUrl: "https://github.com/binsacedillo/REACTMYSQL",
    },
];
