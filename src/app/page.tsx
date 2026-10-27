import Image from "next/image";
import { projects } from "~/data/projects";
import { certifications } from "~/data/certifications";
import TechnologyStrip from "~/components/TechnologyStrip";
import VGAArtwork from "~/components/vga/VGAArtwork";
import SiteNavigation from "~/components/SiteNavigation";

export const dynamic = "force-static";

const featured = [
  projects.find((p) => p.title.startsWith("Pilot Handbook")),
  projects.find((p) => p.title.startsWith("Faith Feed")),
].filter((p) => p !== undefined);
const more = projects.filter((p) => !p.isFeatured);
const path = [
  ["2024–2028", "BS Information Technology · FEU Tech", "Web and Mobile Applications, with a focus on full-stack and product engineering."],
  ["2024", "ICT-TVL Computer Programming", "Graduated with a practical foundation in development and problem solving."],
  ["2021", "First steps in web development", "Completed TESDA HTML and CSS training and began building for the web."],
];

function Outbound({ href, children }: { href: string; children: React.ReactNode }) {
  return <a className="journal-link" href={href} target="_blank" rel="noopener noreferrer">{children} <span aria-hidden="true">↗</span></a>;
}

export default function Home() {
  return (
    <main id="top">
      <SiteNavigation />

      <section className="journal-container grid gap-12 py-20 sm:py-28 md:grid-cols-[1.2fr_0.8fr] md:items-center md:gap-10 lg:gap-16" aria-labelledby="intro-title">
        <div className="vga-hero-copy relative isolate">
          <VGAArtwork />
          <div className="relative z-10">
            <p className="journal-label"><span className="journal-dot" /> MANILA, PHILIPPINES / OPEN TO COLLABORATION</p>
            <h1 id="intro-title" className="mt-7 text-5xl font-semibold leading-[1.04] tracking-[-0.055em] sm:text-6xl lg:text-7xl"><span className="hero-name-scan">Vince Gio<br />Acedillo<span className="text-[var(--accent)]">.</span></span></h1>
            <p className="mt-7 text-xl font-medium sm:text-2xl">Full-Stack Developer · Web &amp; Mobile Applications</p>
            <p className="journal-copy mt-4 max-w-xl">I build useful web applications and clear interfaces, with care for the systems behind them and the people using them.</p>
            <div className="mt-9 flex flex-wrap items-center gap-7"><a className="journal-button" href="#projects">Explore work ↗</a><a className="journal-link" href="mailto:beansgioacedillo@gmail.com">Get in touch ↗</a></div>
          </div>
        </div>
        <figure className="editorial-portrait mx-auto w-full max-w-[420px] md:ml-auto">
          <div className="portrait-archive-head journal-label"><span>V.G.A. / IDENTITY ARCHIVE</span><span>FIG. 001</span></div>
          <div className="portrait-stage">
            <p className="portrait-vertical-id" aria-hidden="true">V.G.A. / IDENTITY 001</p>
            <div className="portrait-frame">
              <Image src="/profile-photo.jpg" alt="Portrait of Vince Gio Acedillo" fill priority quality={95} sizes="(max-width: 640px) calc(100vw - 4rem), 380px" className="object-cover" />
            </div>
          </div>
          <figcaption className="portrait-caption">
            <div className="portrait-name"><span className="journal-label">01 / PROFILE</span><p>VINCE GIO ACEDILLO</p></div>
            <div className="portrait-meta"><span>WEB &amp; MOBILE APPLICATIONS</span><span>PH / MNL</span></div>
          </figcaption>
        </figure>
      </section>

      <TechnologyStrip />

      <section id="projects" className="journal-section" aria-labelledby="projects-title"><div className="journal-container">
        <div className="mb-14 selected-reveal"><p className="journal-label">01 / SELECTED WORK</p><h2 id="projects-title" className="journal-title">Projects with purpose.</h2><p className="journal-copy mt-4">Applications and interfaces built around practical problems.</p></div>
        <div className="space-y-20 sm:space-y-28">{featured.map((project, index) => <article key={project.title} className="selected-reveal grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div className={`journal-image project-image relative aspect-[16/10] overflow-hidden ${index % 2 ? "lg:order-2" : ""}`}>{project.image && <Image src={project.image} alt={`${project.title} screenshot`} fill sizes="(max-width: 1024px) 100vw, 550px" className="object-cover" />}</div>
          <div><p className="journal-label project-card-index"><span className="project-index-number">0{index + 1}</span><span aria-hidden="true"> / </span>{project.category}</p><h3 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">{project.title}</h3><p className="journal-copy mt-5">{project.valueProposition ?? project.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">{project.tags?.slice(0, 4).map((tag) => <span className="journal-tag" key={tag}>{tag}</span>)}</div>
            <div className="mt-8 flex gap-7">{project.liveUrl && <Outbound href={project.liveUrl}>Live site</Outbound>}{project.repoUrl && <Outbound href={project.repoUrl}>Source code</Outbound>}</div>
          </div>
        </article>)}</div>
        <div className="mt-24 border-t border-[var(--line)] pt-10 sm:mt-32"><h3 className="mb-6 text-2xl font-semibold">More projects</h3>
          {more.map((project, index) => <article key={project.title} className="grid gap-4 border-b border-[var(--line)] py-6 sm:grid-cols-[7rem_1fr_auto] sm:items-center sm:gap-7">
            <div className="journal-image relative aspect-[16/10] w-28 overflow-hidden">{project.image && <Image src={project.image} alt="" fill sizes="112px" className="object-cover" />}</div>
            <div><p className="journal-label">0{index + 3} / {project.category}</p><h4 className="mt-1 text-lg font-semibold">{project.title}</h4><p className="journal-copy mt-1 text-sm">{project.description.split(". ")[0]}.</p></div>
            <div className="flex gap-5 sm:flex-col sm:items-end sm:gap-1">{project.liveUrl && <Outbound href={project.liveUrl}>Live</Outbound>}{project.repoUrl && !project.repoUrl.includes("yourusername") && <Outbound href={project.repoUrl}>Source</Outbound>}</div>
          </article>)}
        </div>
      </div></section>

      <section id="about" className="journal-section" aria-labelledby="about-title"><div className="journal-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <div><p className="journal-label">02 / ABOUT</p><h2 id="about-title" className="journal-title">Building accessible full-stack applications with thoughtful design.</h2></div>
        <div><p className="text-lg leading-9">I am an Information Technology student at FEU Tech, focused on web and mobile applications. I enjoy connecting thoughtful interface design with dependable engineering.</p>
          <p className="journal-copy mt-5">My work spans full-stack applications, accessible interfaces, and practical tools that make complicated tasks easier to understand.</p>
          <div className="mt-10 border-t border-[var(--line)] pt-6"><p className="journal-label mb-4">AREAS OF WORK</p><p>Full-stack development <span className="journal-separator">/</span> Frontend interfaces <span className="journal-separator">/</span> API integration <span className="journal-separator">/</span> Accessibility</p></div>
          {certifications.map((cert) => <div key={cert.title} className="mt-10 flex gap-5 border-t border-[var(--line)] pt-6"><Image src={cert.badgeUrl} alt={`${cert.issuer} badge`} width={64} height={64} className="h-16 w-16 object-contain" /><div><p className="journal-label">CREDENTIAL / {cert.date}</p><h3 className="mt-2 font-semibold">{cert.title}</h3><p className="journal-copy text-sm">{cert.issuer}</p><Outbound href={cert.verificationUrl}>Verify credential</Outbound></div></div>)}
        </div>
      </div></section>

      <section id="timeline" className="journal-section" aria-labelledby="timeline-title"><div className="journal-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <div><p className="journal-label">03 / JOURNEY</p><h2 id="timeline-title" className="journal-title">Flight path.</h2><p className="journal-copy mt-4">The steps that shaped how I build.</p></div>
        <ol>{path.map(([year, title, detail]) => <li key={title} className="journal-waypoint relative border-l border-[var(--line)] pb-10 pl-8 last:pb-0"><p className="journal-label">{year}</p><h3 className="mt-2 text-lg font-semibold">{title}</h3><p className="journal-copy mt-2">{detail}</p></li>)}</ol>
      </div></section>

      <section id="contact" className="journal-section" aria-labelledby="contact-title"><div className="journal-container"><p className="journal-label">04 / CONTACT</p><h2 id="contact-title" className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">Let&apos;s build something useful.</h2><p className="journal-copy mt-6">Have a project or opportunity in mind? I would like to hear about it.</p><a className="journal-button mt-9 inline-flex" href="mailto:beansgioacedillo@gmail.com">Email me ↗</a></div></section>
      <footer className="border-t border-[var(--line)]"><div className="journal-container flex flex-col gap-5 py-7 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between"><p>© 2026 Vince Gio Acedillo</p><div className="flex flex-wrap gap-6"><Outbound href="https://github.com/binsacedillo">GitHub</Outbound><Outbound href="https://www.linkedin.com/in/vince-gio-acedillo-449688318/">LinkedIn</Outbound><a className="journal-link" href="#top">Back to top ↑</a></div></div></footer>
    </main>
  );
}
