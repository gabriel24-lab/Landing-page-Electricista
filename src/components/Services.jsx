import { SERVICES } from "../data/content.js";
import Icon from "./Icon.jsx";
import SectionHeader from "./SectionHeader.jsx";

export default function Services() {
  return (
    <section id="servicios" className="section services">
      <SectionHeader
        eyebrow="Mis Servicios"
        title="Más de 20 años brindando soluciones confiables."
        description="Cada trabajo se realiza con responsabilidad, utilizando las mejores prácticas para brindar soluciones seguras, eficientes y adaptadas a las necesidades de cada cliente."
      />
      <div className="services-grid">
        {SERVICES.map((service, index) => (
          <article
            className={`service-card ${service.isMain ? "service-card--main" : ""}`}
            data-reveal
            key={service.title}
            style={{ "--delay": `${index * 90}ms` }}
          >
            <div className="service-icon">
              <Icon name={service.icon} size={30} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.summary}</p>
            <ul>
              {service.items.map((item) => (
                <li key={item}>
                  <Icon name="check" size={16} />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
