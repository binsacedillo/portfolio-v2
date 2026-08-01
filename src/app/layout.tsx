import "~/styles/globals.css";

import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Vince Gio Acedillo | Full-Stack Developer Portfolio",
  description: "Full-Stack Developer specializing in Next.js, TypeScript, and Python. Explore my projects and professional certifications.",
  verification: {
    google: "googleb3cc5490ff4f97f0",
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  metadataBase: new URL("https://vinceacedilloportfolio.netlify.app"),
  openGraph: {
    title: "Vince Gio Acedillo - Portfolio",
    description:
      "Vince Gio Acedillo's professional portfolio showcasing full-stack applications, interactive UIs, and technical credentials.",
    type: "website",
    locale: "en_US",
    url: "https://vinceacedilloportfolio.netlify.app",
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
    canonical: "https://vinceacedilloportfolio.netlify.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
