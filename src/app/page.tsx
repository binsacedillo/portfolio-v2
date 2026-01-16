import Hero from "../components/landing/Hero";
import Timeline from "../components/landing/Timeline";
import ScrollShowcase from "../components/landing/ScrollShowcase";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 flex flex-col">
      <Hero />
      <div id="timeline">
        <Timeline />
      </div>
      <div id="projects">
        <ScrollShowcase />
      </div>
      <Footer />
    </main>
  );
}
