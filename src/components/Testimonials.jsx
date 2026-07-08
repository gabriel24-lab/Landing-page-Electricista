import { useEffect, useState } from "react";
import { TESTIMONIALS } from "../data/content.js";
import Icon from "./Icon.jsx";
import SectionHeader from "./SectionHeader.jsx";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % TESTIMONIALS.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, []);

  const testimonial = TESTIMONIALS[active];

  return (
    <section className="section testimonials-section">
      <SectionHeader
        eyebrow="Clientes"
        title="Confianza construida servicio a servicio"
      />
      <div className="testimonial-shell" data-reveal>
        <div className="testimonial-card" key={testimonial.name}>
          <div className="stars" aria-label="Cinco estrellas">
            {Array.from({ length: 5 }).map((_, index) => (
              <Icon name="star" size={18} key={index} />
            ))}
          </div>
          <p>{testimonial.quote}</p>
          <div className="testimonial-author">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              loading="lazy"
            />
            <div>
              <strong>{testimonial.name}</strong>
              <span>{testimonial.role}</span>
            </div>
          </div>
        </div>
        <div className="testimonial-controls">
          {TESTIMONIALS.map((item, index) => (
            <button
              className={index === active ? "is-active" : ""}
              key={item.name}
              type="button"
              aria-label={`Ver testimonio de ${item.name}`}
              onClick={() => setActive(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
