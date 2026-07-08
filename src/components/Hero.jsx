import { createWhatsAppLink } from "../config/contact.js";
import Icon from "./Icon.jsx";
import WhatsAppIcon from "./WhatsAppIcon.jsx";

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-grid-overlay" aria-hidden="true" />
      <div className="hero-orb hero-orb--1" aria-hidden="true" />
      <div className="hero-orb hero-orb--2" aria-hidden="true" />

      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-kicker" data-reveal="left">
            <span className="hero-kicker-dot" />
            Técnico certificado · Industrial · Residencial
          </p>

          <h1
            className="hero-title"
            data-reveal="left"
            style={{ "--delay": "100ms" }}
          >
            Soluciones eléctricas <span className="accent">confiables,</span>
            <br />
            limpias y a tiempo.
          </h1>

          <p
            className="hero-subtitle"
            data-reveal="left"
            style={{ "--delay": "200ms" }}
          >
            Más de 20 años de experiencia en maquinaria, refrigeración, tableros
            eléctricos y electrodomésticos.
          </p>

          <div
            className="hero-actions"
            data-reveal="left"
            style={{ "--delay": "300ms" }}
          >
            <a
              className="button button--primary button--pill"
              href={createWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon />
              Solicitar servicio
            </a>
            <a
              className="button button--outline-white button--pill"
              href="#servicios"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("servicios");
                if (el)
                  window.scrollTo({
                    top: el.getBoundingClientRect().top + window.scrollY - 80,
                    behavior: "smooth",
                  });
              }}
            >
              Ver servicios
              <Icon name="arrowRight" size={18} />
            </a>
          </div>
        </div>

        <div
          className="hero-image"
          data-reveal="right"
          style={{ "--delay": "400ms" }}
        >
          <img
            src="/electricista gabriel.webp"
            alt="Técnico electricista profesional"
            fetchpriority="high"
          />
        </div>
      </div>
    </section>
  );
}
