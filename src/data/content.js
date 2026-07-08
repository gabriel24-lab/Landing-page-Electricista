export const NAV_ITEMS = [
  { id: "inicio", label: "Inicio" },
  { id: "servicios", label: "Servicios" },
  { id: "experiencia", label: "Experiencia" },
  { id: "trabajos", label: "Trabajos" },
  { id: "contacto", label: "Contacto" },
];

export const HERO_TAGS = [
  "Maquinaria industrial",
  "Aires acondicionados",
  "Instalaciones del hogar",
  "Electrodomesticos",
];

export const HERO_STATS = [
  { value: "20+", label: "Años de experiencia" },
  { value: "500+", label: "Servicios realizados" },
  { value: "24/7", label: "Atencion prioritaria" },
];

export const SERVICES = [
  {
    icon: "snowflake",
    title: "Aire acondicionado",
    summary:
      "Instalación, mantenimiento y reparación profesional para tu confort.",
    isMain: true,
    items: [
      "Instalación",
      "Mantenimiento preventivo",
      "Mantenimiento correctivo",
      "Reparación",
      "Recarga de gas",
      "Diagnóstico",
    ],
  },
  {
    icon: "bolt",
    title: "Servicios eléctricos",
    summary:
      "Soluciones seguras, eficientes y bajo norma para tu tranquilidad.",
    items: [
      "Instalaciones eléctricas",
      "Reparación de cortos",
      "Cambio de breakers",
      "Tomas e interruptores",
      "Cableado completo",
      "Remodelaciones",
      "Locales comerciales",
      "Casas nuevas",
    ],
  },
  {
    icon: "tool",
    title: "Reparación de equipos eléctricos",
    summary: "Diagnóstico y arreglo de electrodomésticos para el hogar.",
    items: [
      "Lavadoras",
      "Neveras",
      "Ventiladores",
      "Licuadoras",
      "Otros equipos eléctricos",
    ],
  },
];

export const EXPERIENCE_STATS = [
  { value: "20+", label: "Años en el sector electrico" },
  { value: "20+", label: "Años como jefe de planta en finca arrocera" },
  { value: "500+", label: "Proyectos y servicios completados" },
  { value: "100%", label: "Trabajo con garantia y seguimiento" },
];

export const TESTIMONIALS = [
  {
    quote:
      "Un trabajo impecable. Reviso el tablero electrico de mi finca y encontro fallas que otros habian pasado por alto. Serio, puntual y honesto.",
    name: "Maria Gonzalez",
    role: "Propietaria de finca, Casanare",
    image: "/testimonial_client1.png",
  },
  {
    quote:
      "Instalo dos aires acondicionados en mi consultorio en tiempo record y con acabados limpios. El precio fue justo y el servicio excelente.",
    name: "Carlos Hernandez",
    role: "Medico, Bogota",
    image: "/testimonial_client2.png",
  },
  {
    quote:
      "Reparo mi nevera cuando ya pensaba reemplazarla. Me explico el problema, el costo y la dejo funcionando el mismo dia.",
    name: "Andres Morales",
    role: "Cliente residencial, Villavicencio",
    image: "/testimonial_client3.png",
  },
];
