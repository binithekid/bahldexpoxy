import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import ParallaxSection from "@/components/ParalexSection";
import Goals from "@/components/Goals";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full flex flex-col">
      <NavBar />
      <Hero />
      <About />
      <Timeline />
      <ParallaxSection />
      <Goals />
      <Contact />
      <Footer />
    </main>
  );
}
