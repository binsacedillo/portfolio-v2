import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

export const metadata: Metadata = {
  title: "Portfolio - Vince Gio",
  description: "Full-stack portfolio showcasing Next.js, Prisma, Tailwind, and Framer Motion.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  metadataBase: new URL(process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000"),
  openGraph: {
    title: "Portfolio - Vince Gio",
    description:
      "Full-stack portfolio showcasing Next.js, Prisma, Tailwind, and Framer Motion.",
    type: "website",
    locale: "en_US",
    url: process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vince Gio Acedillo Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Vince Gio",
    description:
      "Full-stack portfolio showcasing Next.js, Prisma, Tailwind, and Framer Motion.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "/",
  },
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>{children}</body>
    </html>
  );
}
