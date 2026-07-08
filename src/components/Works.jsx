import { useState, useRef } from "react";
import Icon from "./Icon.jsx";

const WORKS_DATA = [
  { id: 1, img: "/work_1.png", title: "Tablero Eléctrico Industrial", cols: 2 },
  {
    id: 2,
    imgs: ["/Instalacion1.jpeg", "/Instalacion2.png"],
    title: "Instalación de Aire Acondicionado",
    cols: 1,
  },
  { id: 3, img: "/work_3.png", title: "Cableado Comercial", cols: 1 },
  { id: 4, img: "/work_4.png", title: "Mantenimiento de Maquinaria", cols: 1 },
  {
    id: 5,
    video: "/Trabajo1 video.mp4",
    title: "Chequeo de tableros",
    cols: 1,
  },
  {
    id: 6,
    video: "/Trabajo 2 video.mp4",
    title: "Mantenimiento Motor Aleman 15KW voltaje 440V",
    cols: 1,
  },
  { id: 7, video: "/Trabajo 3 video.mp4", title: "Mantenimiento ", cols: 2 },
];

function VideoCard({ work, index }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  function handlePlay() {
    setPlaying(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 50);
  }

  function handleEnded() {
    setPlaying(false);
  }

  return (
    <div
      className={`work-item work-item--col-${work.cols}`}
      data-reveal
      style={{ "--delay": `${index * 150}ms` }}
    >
      <video
        ref={videoRef}
        preload="metadata"
        controls={playing}
        className="work-video"
        onEnded={handleEnded}
      >
        <source src={work.video} type="video/mp4" />
      </video>

      {!playing && (
        <div
          className="work-overlay work-overlay--visible"
          onClick={handlePlay}
        >
          <div className="work-play-btn" aria-label="Reproducir video">
            <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <h3 className="work-title">{work.title}</h3>
        </div>
      )}
    </div>
  );
}

export default function Works() {
  return (
    <section id="trabajos" className="section works-section">
      <div className="works-header" data-reveal>
        <span className="section-eyebrow">Galería</span>
        <h2 className="section-title">Trabajos</h2>
        <p className="section-desc">
          Evidencia visual de algunos trabajos que he realizado, demostrando mi
          experiencia y compromiso con la calidad en cada trabajo.
        </p>
      </div>

      <div className="works-grid">
        {WORKS_DATA.map((work, index) =>
          work.video ? (
            <VideoCard key={work.id} work={work} index={index} />
          ) : (
            <div
              className={`work-item work-item--col-${work.cols}`}
              key={work.id}
              data-reveal
              style={{ "--delay": `${index * 150}ms` }}
            >
              {work.imgs ? (
                <div className="work-image-container">
                  <img src={work.imgs[0]} alt={work.title} />
                  <img
                    src={work.imgs[1]}
                    alt={work.title}
                    className="crossfade-img"
                  />
                </div>
              ) : (
                <img src={work.img} alt={work.title} />
              )}

              <div className="work-overlay">
                <h3 className="work-title">{work.title}</h3>
                <div className="work-icon-wrap">
                  <Icon name="check" size={20} />
                </div>
              </div>
            </div>
          ),
        )}
      </div>
    </section>
  );
}
