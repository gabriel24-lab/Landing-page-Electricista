export default function Experience() {
  return (
    <section id="experiencia" className="section experience-section">
      <div className="experience-container">
        <div className="experience-portrait" data-reveal="left">
          <img
            src="/electricista gabriel.webp"
            alt="Técnico en acción"
            loading="lazy"
          />
          <div className="experience-years">
            <span className="years-number">20+</span>
            <span className="years-text">Años de Trayectoria</span>
          </div>
        </div>

        <div className="experience-content" data-reveal="right">
          <span className="section-eyebrow">Mi experiencia</span>
          <h2 className="section-title">
            Mas de 20 años de experiencia al servicio de hogares y negocios.
          </h2>
          <p className="experience-intro">
            Durante mi trayectoria he trabajado en el sector industrial y
            residencial, adquiriendo los conocimientos y la experiencia
            necesarios para ofrecer soluciones eléctricas seguras, eficientes y
            de calidad. Estas son algunas de las etapas más importantes de mi
            carrera:
          </p>

          <div className="experience-timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <h3>Cosargos SAS 2016 - 2026</h3>
              <p>
                Durante cerca de una década estuve a cargo del mantenimiento
                eléctrico de la maquinaria y los sistemas de la planta,
                asegurando la continuidad de la producción mediante un
                funcionamiento confiable de todos los equipos.
              </p>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <h3>E.S.T Aserdir S.A.S 2010</h3>
              <p>
                Responsable del mantenimiento preventivo y correctivo de
                sistemas eléctricos, garantizando su funcionamiento seguro y
                eficiente para evitar fallas.
              </p>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <h3>
                Dairy Partners Americas Manufacturing Colombia Ltda (DPA) 2004 -
                2007
              </h3>
              <p>
                Inicié mi trayectoria realizando instalaciones, diagnósticos y
                reparaciones eléctricas en entornos industriales, adquiriendo
                una base sólida en sistemas eléctricos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
