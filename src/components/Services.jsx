import { useState, useEffect } from "react";
import { SERVICES } from "../data/content.js";
import { createWhatsAppLink } from "../config/contact.js";
import Icon from "./Icon.jsx";
import SectionHeader from "./SectionHeader.jsx";

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);
  const activeService = SERVICES[activeTab];

  // Preload images to prevent delay when switching tabs
  useEffect(() => {
    SERVICES.forEach((service) => {
      if (service.image) {
        const img = new Image();
        img.src = service.image;
      }
    });
  }, []);

  return (
    <section id="servicios" className="section services">
      <SectionHeader
        eyebrow="Mis Servicios"
        title="Más de 20 años brindando soluciones confiables."
        description="Cada trabajo se realiza con responsabilidad, utilizando las mejores prácticas para brindar soluciones seguras, eficientes y adaptadas a las necesidades de cada cliente."
      />

      <div
        className="services-tabs-container"
        data-reveal
        style={{
          backgroundImage: `linear-gradient(rgba(11, 53, 104, 0.65), rgba(6, 24, 48, 0.85)), url('${activeService.image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 300ms ease",
        }}
      >
        <div className="services-tabs-header">
          {SERVICES.map((service, index) => (
            <button
              key={service.title}
              className={`services-tab-btn ${activeTab === index ? "active" : ""}`}
              onClick={() => setActiveTab(index)}
            >
              {service.title}
            </button>
          ))}
        </div>

        <div className="services-tab-content">
          <div className="services-tab-info">
            <h3>
              {activeService.title === "Aire acondicionado"
                ? "Instalación, mantenimiento y reparación"
                : activeService.title}
            </h3>
            <p>{activeService.summary}</p>
            <a
              className="button button--primary services-whatsapp-btn"
              href={createWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
            >
              Solicitar por WhatsApp
            </a>
          </div>

          <div className="services-tab-list">
            {activeService.items.map((item) => (
              <div className="services-list-item" key={item}>
                <Icon name="check" size={18} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
