import { createWhatsAppLink } from "../config/contact.js";
import { NAV_ITEMS } from "../data/content.js";
import Logo from "./Logo.jsx";

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-layout">
        <div>
          <Logo />
          <p>
            Más de 20 años ofreciendo soluciones eléctricas confiables.
            Especializado en instalación, mantenimiento y reparación de aires
            acondicionados, además de servicios eléctricos para hogares y
            negocios, siempre con responsabilidad y compromiso.
          </p>
        </div>
        <nav aria-label="Navegacion secundaria">
          <strong>Navegacion</strong>
          {NAV_ITEMS.map((item) => (
            <a
              href={`#${item.id}`}
              key={item.id}
              onClick={(event) => {
                event.preventDefault();
                scrollToSection(item.id);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <nav aria-label="Contacto">
          <strong>Contacto</strong>
          <a href={createWhatsAppLink()} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61577771703434"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
          <a href="mailto:tecnicoelec@email.com">tecnicoelec@email.com</a>
        </nav>
      </div>
      <div className="footer-bottom">
        <span>
          &copy; {new Date().getFullYear()} Gabriel Mejia - Electricista. Todos
          los derechos reservados.
        </span>
        <span>Servicio electrico industrial, agricola y residencial.</span>
      </div>
    </footer>
  );
}
