import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import Education from "@/components/Education";
import RemoteWork from "@/components/RemoteWork";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Experience />
      <Skills />
      <Testimonials />
      <Education />
      <RemoteWork />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
