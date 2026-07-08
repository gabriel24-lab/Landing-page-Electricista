import { createWhatsAppLink } from "../config/contact.js";
import { NAV_ITEMS } from "../data/content.js";
import Icon from "./Icon.jsx";
import WhatsAppIcon from "./WhatsAppIcon.jsx";

function scrollToSection(id, onClose) {
  onClose();
  const element = document.getElementById(id);
  if (element) {
    const navbarHeight = 70;
    const top =
      element.getBoundingClientRect().top + window.scrollY - navbarHeight;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

export default function MobileMenu({ open, onClose }) {
  return (
    <div
      className={`mobile-menu${open ? " mobile-menu--open" : ""}`}
      aria-hidden={!open}
    >
      <button
        className="icon-button mobile-close"
        type="button"
        onClick={onClose}
        aria-label="Cerrar menu"
      >
        <Icon name="close" />
      </button>
      <div className="mobile-menu-panel">
        {NAV_ITEMS.map((item) => (
          <a
            href={`#${item.id}`}
            key={item.id}
            onClick={(event) => {
              event.preventDefault();
              scrollToSection(item.id, onClose);
            }}
          >
            {item.label}
          </a>
        ))}
        <a
          className="mobile-whatsapp"
          href={createWhatsAppLink()}
          target="_blank"
          rel="noreferrer"
        >
          <WhatsAppIcon />
          Escribir por WhatsApp
        </a>
      </div>
    </div>
  );
}
