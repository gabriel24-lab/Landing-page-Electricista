export default function Experience() {
  return (
    <section id="experiencia" className="section experience-section">
      <div className="experience-container">
        <div className="experience-portrait" data-reveal="left">
          <img src="/electricista gabriel.png" alt="Técnico en acción" />
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
              <h3>Mantenimiento Industrial (10 años)</h3>
              <p>
                Responsable del mantenimiento eléctrico en una planta arrocera.
                Trabajo crítico para evitar interrupciones en la línea de
                producción.
              </p>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <h3>Especialista en Climatización</h3>
              <p>
                Formación y experiencia específica en instalación, mantenimiento
                preventivo y reparación de sistemas de aire acondicionado.
              </p>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <h3>Servicio Integral Domiciliario</h3>
              <p>
                Llevando los estándares de seguridad industrial y
                responsabilidad a cada casa y local comercial, garantizando
                soluciones definitivas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
