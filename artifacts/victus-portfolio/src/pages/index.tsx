import BootScreen from "@/components/BootScreen";
import CustomCursor from "@/components/CustomCursor";
import Particles from "@/components/Particles";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-grid-pattern min-h-screen text-foreground" style={{ backgroundColor: "#050505" }}>
      <BootScreen />
      <CustomCursor />
      <Particles />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
