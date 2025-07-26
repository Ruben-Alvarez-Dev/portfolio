import React, { useState } from 'react';
import { useI18n } from '../../../i18n';
import './ContactSection.css';

const ContactSection = () => {
  const { t } = useI18n();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    setFormStatus(t('contact.form.success'));
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    // Clear status after 3 seconds
    setTimeout(() => {
      setFormStatus('');
    }, 3000);
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      description: t('contact.info.email'),
      link: `mailto:${t('contact.info.email')}`,
      available: 'Disponible 24/7'
    },
    {
      icon: '📱',
      title: 'Teléfono',
      description: t('contact.info.phone'),
      link: `tel:${t('contact.info.phone')}`,
      available: 'Lun-Vie 9:00-18:00'
    },
    {
      icon: '�',
      title: 'Ubicación',
      description: t('contact.info.location'),
      link: '#',
      available: 'Trabajo remoto'
    }
  ];

  const socialLinks = [
    {
      name: t('contact.social.github'),
      url: 'https://github.com/ruben-alvarez',
      icon: '🐙'
    },
    {
      name: t('contact.social.linkedin'),
      url: 'https://linkedin.com/in/ruben-alvarez',
      icon: '💼'
    },
    {
      name: t('contact.social.twitter'),
      url: 'https://twitter.com/ruben_dev',
      icon: '🐦'
    }
  ];

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="section-header">
          <h2 className="section-title">{t('contact.title')}</h2>
          <p className="section-subtitle">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="contact-content">
          {/* Información de contacto */}
          <div className="contact-info">
            <div className="info-header">
              <h3>Hablemos</h3>
              <p>
                Estoy siempre interesado en nuevas oportunidades y proyectos emocionantes. 
                Ya sea que necesites un desarrollador fullstack, tengas una pregunta técnica, 
                o simplemente quieras saludar, no dudes en contactarme.
              </p>
            </div>

            <div className="contact-methods">
              {contactMethods.map((method, index) => (
                <div key={index} className="contact-method">
                  <div className="method-icon">{method.icon}</div>
                  <div className="method-content">
                    <h4 className="method-title">{method.title}</h4>
                    <a 
                      href={method.link} 
                      className="method-link"
                      target={method.link.startsWith('http') ? '_blank' : '_self'}
                      rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    >
                      {method.description}
                    </a>
                    <span className="method-availability">{method.available}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="social-links">
              <h4>{t('contact.social.title')}</h4>
              <div className="social-grid">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    title={social.name}
                  >
                    <span className="social-icon">{social.icon}</span>
                    <span className="social-name">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="contact-form-wrapper">
            <div className="form-header">
              <h3>{t('contact.form.title')}</h3>
              <p>{t('contact.form.subtitle')}</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Nombre *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Asunto *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="¿En qué puedo ayudarte?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensaje *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  placeholder="Cuéntame sobre tu proyecto, idea o cualquier pregunta que tengas..."
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Enviar Mensaje
              </button>

              {formStatus && (
                <div className="form-status success">
                  {formStatus}
                </div>
              )}
            </form>
          </div>
        </div>

        {/* CTA final */}
        <div className="contact-cta">
          <h3>¿Prefieres una llamada?</h3>
          <p>Podemos agendar una videollamada para discutir tu proyecto en detalle</p>
          <button className="cta-btn">Agendar llamada</button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
