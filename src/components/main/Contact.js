import React, { useState, useEffect, useRef } from "react";
import ScrollToTop from "react-scroll-to-top";
import emailjs from '@emailjs/browser'

import { Spinner } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const form = useRef()
  
  const handleNameChange = event => {
    setFormData({ ...formData, name: event.target.value });
  };

  const handleEmailChange = event => {
    setFormData({ ...formData, email: event.target.value });
  };

  const handlePhoneChange = event => {
    setFormData({ ...formData, phone: event.target.value });
  };

  const handleMessageChange = event => {
    setFormData({ ...formData, message: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
  
    emailjs
    .sendForm('service_qlvabdn', 'template_kqa5fai', form.current, 'FfMRsZSdDNU67IFmN')
    .then(
      () => {
        alert('Mensaje enviado correctamente!')
        window.location.reload(false)
      },
      () => {
        alert('Error al enviar mensaje, intente nuevamente')
      }
    )
}


  function CoolPage() {
    return (
      <div>
        <ScrollToTop />
      </div>
    );
  }

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  function ScrollTotop() {
    window.scrollTo({ top: 80, left: 0, behavior: "smooth" });
  }
  
  useEffect(() => {
    ScrollTotop();
  }, []);

  return (
    <div className="generalContainer">
      <div className="container ContactContainer">
        {CoolPage()}
        {loading ? (
          <div className="SpinnerContainer">
            <Spinner />
          </div>
        ) : (
          <form id="contact" ref={form} onSubmit={handleSubmit}>
            <h3>Enviá tu consulta</h3>
            <h4>
              Si querés personalizar tu prenda, envianos un mensaje y te
              contactamos.
            </h4>
            <fieldset>
              <input
                placeholder="Nombre"
                type="text"
                tabIndex="1"
                name="name"
                required
                autoFocus
                value={formData.name}
                onChange={handleNameChange}
              ></input>
            </fieldset>
            <fieldset>
              <input
                placeholder="Email"
                type="email"
                tabIndex="2"
                name="email"
                required
                value={formData.email}
                onChange={handleEmailChange}
              ></input>
            </fieldset>
            <fieldset>
              <input
                placeholder="Telefono (opcional)"
                type="tel"
                tabIndex="3"
                name="phone"
                value={formData.phone}
                onChange={handlePhoneChange}
              ></input>
            </fieldset>
            <fieldset></fieldset>
            <fieldset>
              <textarea
                placeholder="Escribe tu consulta aquí...."
                tabIndex="4"
                required
                name="message"
                value={formData.message}
                onChange={handleMessageChange}
              ></textarea>
            </fieldset>
            <fieldset>
              <button className="ButtonContact" name="submit" type="submit">
                Enviar
              </button>
            </fieldset>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
