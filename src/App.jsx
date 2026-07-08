import { useState } from "react";
import Contact from "./components/Contact.jsx";
import FloatingWhatsApp from "./components/FloatingWhatsApp.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import MobileMenu from "./components/MobileMenu.jsx";
import Navbar from "./components/Navbar.jsx";
import Services from "./components/Services.jsx";
import Testimonials from "./components/Testimonials.jsx";
import { useScrollReveal } from "./hooks/useScrollReveal.js";
import ScrollProgress from "./components/ScrollProgress.jsx";
import WhyMe from "./components/WhyMe.jsx";
import Experience from "./components/Experience.jsx";
import Works from "./components/Works.jsx";

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  useScrollReveal();

  return (
    <>
      <ScrollProgress />
      <Navbar onOpenMenu={() => setMobileOpen(true)} />
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
      <main>
        <Hero />
        <Services />
        <WhyMe />
        <Experience />
        <Works />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
