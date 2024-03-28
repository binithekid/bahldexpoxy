import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import ParallaxSection from "@/components/ParalexSection";
import Goals from "@/components/Goals";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      {" "}
      <Head>
        <meta
          name="description"
          content="Bahld Epoxy is a pioneering Epoxy company and training center located in Addis Ababa, Ethiopia,"
        />
        <title>Home | Bahld Epoxy</title>
      </Head>
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
    </>
  );
}
