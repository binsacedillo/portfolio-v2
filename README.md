# 🚀 Vince Gio N. Acedillo | Full-Stack Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

A premium, high-performance personal portfolio website built with modern web development practices, focusing on performance, accessibility (ISO 9241 compliant), and smooth user experiences.

---

## ✨ Key Features

- **🎯 ISO-Compliant Hero Section**: Optimized LCP/CLS with specialized image handling and WCAG AAA color contrast.
- **🏮 Japanese Morphing Title**: A unique, aesthetic animation blending traditional style with modern web technology.
- **📜 Scroll-Animated Timeline**: Interactive education and milestone tracking with smooth Framer Motion transitions.
- **📂 Dynamic Projects Showcase**: Featured project highlights and responsive image-based cards for a diverse portfolio.
- **⚡ High Performance**: Leveraging Next.js 15 App Router, Server Components, and optimized image processing.
- **🛠️ Backend Ready**: Integrated NextAuth for seamless backend capabilities.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

### Backend & Database
- **Database**: PostgreSQL / Supabase
- **Authentication**: [NextAuth.js (Auth.js)](https://authjs.dev/)

### Performance & Quality
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Standards**: ISO 9241-110, WCAG 2.1 AAA
- **Persistence**: Optimized Image Component for zero layout shift

---

## 🚀 Projects Highlighted

1.  **Pilot Handbook**: Full-stack aviation management platform.
2.  **FHIR Interoperability Layer**: Secure FastAPI backend for medical data.
3.  **Japanese Language Learning**: Bilingual educational platform.
4.  **News Website**: Responsive platform with dynamic content loading.
5.  **Idol Group Website**: Themed entertainment showcase.

---

## 🏗️ Architecture

- **Typesafe**: End-to-end typesafety from database to UI.
- **Performant**: Minimal client-side JavaScript by leveraging Server Components.
- **Scalable**: Ready for complex features like:
    - Contact form persistence
    - CMS-driven blog posts
    - Admin dashboard for content management
    - Real-time visitor analytics

---

## 💻 Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL database (or Supabase)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/binsacedillo/portfolio-v2.git
   cd portfolio-v2
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Check `.env.example` and create your own `.env` file.
   ```bash
   cp .env.example .env
   ```

4. Initialize the database:
   If you have Docker installed, you can quickly spin up a local PostgreSQL instance:
   ```bash
   chmod +x start-database.sh
   ./start-database.sh
   ```
   Then push the schema:
   ```bash
   npm run db:push
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

---

## 📬 Contact & Socials

- **Email**: [beansgioacedillo@gmail.com](mailto:beansgioacedillo@gmail.com)
- **LinkedIn**: [Vince Gio Acedillo](https://www.linkedin.com/in/vince-gio-acedillo-449688318)
- **GitHub**: [@binsacedillo](https://github.com/binsacedillo)
- **Portfolio**: [portfolio-acedillo.vercel.app](https://portfolio-acedillo.vercel.app)

---

Developed with ❤️ by **Vince Gio N. Acedillo**
