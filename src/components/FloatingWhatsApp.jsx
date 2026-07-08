import { createWhatsAppLink } from "../config/contact.js";
import WhatsAppIcon from "./WhatsAppIcon.jsx";

export default function FloatingWhatsApp() {
  return (
    <a
      className="floating-whatsapp"
      href={createWhatsAppLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <WhatsAppIcon />
    </a>
  );
}
