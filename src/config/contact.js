export const WHATSAPP_NUMBER = "573195437203";
export const DEFAULT_WHATSAPP_MESSAGE =
  "Hola, me gustaria solicitar mas informacion sobre los servicios electricos.";

export const CONTACT_DETAILS = [
  { icon: "phone", label: "WhatsApp / Telefono", value: "+57 319 543 7203" },
  { icon: "pin", label: "Area de cobertura", value: "Valledupar, Cesar" },
  {
    icon: "clock",
    label: "Horario",
    value: "Lunes a sabado: 7:00 a.m. - 7:00 p.m.",
  },
  { icon: "mail", label: "Correo", value: "garilmesi@gmail.com" },
];

export function createWhatsAppLink(message = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
