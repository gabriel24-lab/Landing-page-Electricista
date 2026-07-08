import { useState } from "react";
import { CONTACT_DETAILS, WHATSAPP_NUMBER } from "../config/contact.js";
import Icon from "./Icon.jsx";
import WhatsAppIcon from "./WhatsAppIcon.jsx";

const initialForm = { name: "", email: "", phone: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const message = [
      "*Nuevo mensaje desde la landing page*",
      "",
      `Nombre: ${form.name}`,
      `Correo: ${form.email}`,
      `Telefono: ${form.phone || "No indicado"}`,
      "",
      `Mensaje: ${form.message}`,
    ].join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
    setSent(true);
    setForm(initialForm);
    window.setTimeout(() => setSent(false), 4500);
  }

  return (
    <section id="contacto" className="section contact">
      <div className="contact-layout">
        <div className="contact-copy" data-reveal="left">
          <span className="section-eyebrow">Contacto</span>
          <h2 className="section-title">
            Cuente el problema y reciba una respuesta directa.
          </h2>
          <p>
            Escriba por WhatsApp o deje los datos del servicio. Incluya
            ubicacion, equipo afectado y si se trata de una urgencia para
            priorizar la atencion.
          </p>
          <div className="contact-list">
            {CONTACT_DETAILS.map((detail) => (
              <div className="contact-item" key={detail.label}>
                <span>
                  <Icon name={detail.icon} size={21} />
                </span>
                <div>
                  <strong>{detail.label}</strong>
                  <small>{detail.value}</small>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form
          className="contact-form"
          data-reveal="right"
          onSubmit={handleSubmit}
        >
          <h3>Solicitar servicio</h3>
          <label>
            Nombre completo
            <input
              name="name"
              type="text"
              placeholder="Su nombre"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Correo electronico
            <input
              name="email"
              type="email"
              placeholder="correo@ejemplo.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Telefono / WhatsApp
            <input
              name="phone"
              type="tel"
              placeholder="+57 300 000 0000"
              value={form.phone}
              onChange={handleChange}
            />
          </label>
          <label>
            Descripcion del servicio
            <textarea
              name="message"
              placeholder="Explique que necesita, ubicacion aproximada y horarios disponibles."
              value={form.message}
              onChange={handleChange}
              required
            />
          </label>
          <button className="button button--primary button--full" type="submit">
            <WhatsAppIcon />
            Enviar por WhatsApp
          </button>
          {sent && (
            <p className="form-success">
              Mensaje preparado en WhatsApp. Le responderemos pronto.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
