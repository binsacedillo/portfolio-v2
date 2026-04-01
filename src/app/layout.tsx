import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

export const metadata: Metadata = {
  title: "Vince Gio Acedillo | Full-Stack Developer Portfolio",
  description: "Senior IT Student and Full-Stack Developer specializing in Next.js, TypeScript, and Python. Explore my projects and professional certifications.",
  verification: {
    google: "9FRXaJexWZ78wY7L6Jqu5Q1VcPlQxXmTxo2aGue3THk",
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  metadataBase: new URL("https://binsacedillo-portfolio.vercel.app"),
  openGraph: {
    title: "Vince Gio Acedillo - Portfolio",
    description:
      "Vince Gio Acedillo's professional portfolio showcasing full-stack applications, interactive UIs, and technical credentials.",
    type: "website",
    locale: "en_US",
    url: "https://binsacedillo-portfolio.vercel.app",
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
    title: "Vince Gio Acedillo | Full-Stack Portfolio",
    description:
      "A deep dive into my professional journey, full-stack projects, and verified credentials.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://binsacedillo-portfolio.vercel.app",
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
