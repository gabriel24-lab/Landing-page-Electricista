import Icon from "./Icon.jsx";

export default function WhyMe() {
  return (
    <section id="por-que-yo" className="section about">
      <div className="about-layout-hybrid">
        <div className="about-copy" data-reveal="left">
          <span className="section-eyebrow">¿por qué elegirme?</span>
          <h2 className="section-title">
            Dedicación, precisión y profesionalismo.
          </h2>
          <p>
            Con más de 20 años en el área eléctrica y 10 años como responsable
            de mantenimiento industrial, hoy pongo ese conocimiento al servicio
            de hogares y negocios.
          </p>
        </div>

        <div className="about-image-hybrid" data-reveal="right">
          <img
            src="/hero_split.png"
            alt="Trabajo eléctrico profesional y seguro"
          />
          <div className="hybrid-badge">
            <Icon name="check" size={16} />
            Compromiso
          </div>
        </div>
      </div>

      <div className="about-stats-divider" data-reveal></div>

      <div className="about-stats" data-reveal>
        <div className="stat-item">
          <strong>20+</strong>
          <span>años de experiencia</span>
        </div>
        <div className="stat-item">
          <strong>10</strong>
          <span>años en industria</span>
        </div>
        <div className="stat-item">
          <strong>A/C</strong>
          <span>instalación y mantenimiento</span>
        </div>
      </div>
    </section>
  );
}
