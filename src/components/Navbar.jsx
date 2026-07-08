import { useEffect, useState } from "react";
import { createWhatsAppLink } from "../config/contact.js";
import { NAV_ITEMS } from "../data/content.js";
import Icon from "./Icon.jsx";
import Logo from "./Logo.jsx";
import WhatsAppIcon from "./WhatsAppIcon.jsx";

function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    const navbarHeight = 80;
    const top =
      element.getBoundingClientRect().top + window.scrollY - navbarHeight;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

export default function Navbar({ onOpenMenu }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" },
    );

    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <nav className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <Logo />
      <div className="nav-links">
        {NAV_ITEMS.map((item) => (
          <a
            href={`#${item.id}`}
            key={item.id}
            className={activeSection === item.id ? "is-active" : ""}
            onClick={(event) => {
              event.preventDefault();
              scrollToSection(item.id);
            }}
          >
            {item.label}
          </a>
        ))}
      </div>
      <a
        className="nav-whatsapp"
        href={createWhatsAppLink()}
        target="_blank"
        rel="noreferrer"
      >
        <WhatsAppIcon />
        WhatsApp
      </a>
      <button
        className="icon-button nav-menu-button"
        type="button"
        onClick={onOpenMenu}
        aria-label="Abrir menu"
      >
        <Icon name="menu" />
      </button>
    </nav>
  );
}
