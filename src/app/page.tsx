import Hero from "../components/landing/Hero";
import Timeline from "../components/landing/Timeline";
import Certifications from "../components/landing/Certifications";
import ScrollShowcase from "../components/landing/ScrollShowcase";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 flex flex-col">
      <Hero />
      <div id="timeline">
        <Timeline />
      </div>
      <Certifications />
      <div id="projects">
        <ScrollShowcase />
      </div>
      <Footer />
      <BackToTop />
    </main>
  );
}
