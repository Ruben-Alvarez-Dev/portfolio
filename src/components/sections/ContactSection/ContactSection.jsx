import React, { useState } from 'react';
import { useI18n } from '../../../i18n/useI18n';
import { Section, SectionHeader, SectionContent, Grid, Flex, Card } from '../../ui';
import './ContactSection.css';

const ContactSection = () => {
  const { t } = useI18n();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Enviando...');
    // Lógica de envío del formulario aquí
    setTimeout(() => {
      setStatus('Mensaje enviado correctamente');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <Section id="contact" className="contact-section" padding="default">
      <SectionHeader 
        title={t('contact.title')}
        align="center"
        underline={true}
      />

      <SectionContent layout="flex" spacing="sm" maxWidth="lg">
        <Grid columns={2} gap="lg" responsive={true}>
            
            {/* Columna izquierda */}
            <Flex direction="column" gap="md">
              <div className="contact-text">
                <h3>Hablemos</h3>
                <p>
                  Estoy disponible para nuevos proyectos, colaboraciones y oportunidades freelance. 
                  Si buscas un desarrollador para tu startup, necesitas consultoría técnica, 
                  o tienes un proyecto en mente, no dudes en contactarme.
                </p>
              </div>

              <div className="contact-methods">
                <h4>Métodos de Contacto</h4>
                <Flex direction="column" gap="sm" className="contact-links">
                  <Flex align="center" gap="sm" className="contact-link">
                    <span className="contact-icon">📧</span>
                    <a href="mailto:ruben@rubenfajardo.dev">ruben@rubenfajardo.dev</a>
                  </Flex>
                  <Flex align="center" gap="sm" className="contact-link">
                    <span className="contact-icon">💼</span>
                    <a href="https://linkedin.com/in/ruben-fajardo" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </Flex>
                  <Flex align="center" gap="sm" className="contact-link">
                    <span className="contact-icon">�</span>
                    <a href="https://github.com/rubenfajardo" target="_blank" rel="noopener noreferrer">GitHub</a>
                  </Flex>
                </Flex>
              </div>
            </Flex>

            {/* Columna derecha - Formulario */}
            <Card variant="default" className="contact-form-wrapper">
              <Card.Body>
                <form onSubmit={handleSubmit} className="contact-form">
                  <h3>Envía un mensaje</h3>
                  
                  <Grid columns={2} gap="md" className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Nombre *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </Grid>

                  <div className="form-group">
                    <label htmlFor="subject">Asunto *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Mensaje *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="submit-button">
                    Enviar Mensaje
                  </button>

                  {status && <div className="status-message">{status}</div>}
                </form>
              </Card.Body>
            </Card>
        </Grid>
      </SectionContent>
    </Section>
  );
};

export default ContactSection;
