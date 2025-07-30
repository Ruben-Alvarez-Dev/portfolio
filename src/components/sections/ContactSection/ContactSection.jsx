import { useState } from 'react';
import { useI18n } from '../../../i18n/useI18n';
import { Section, SectionHeader, SectionContent, Grid, Flex, Card } from '../../ui';
import { Button } from '../../ui';
import { FiMail, FiLinkedin, FiGithub, FiSend, FiPhone } from 'react-icons/fi';
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
    setStatus(t('contact.form.sending'));
    
    // Simulación de envío
    setTimeout(() => {
      setStatus(t('contact.form.success'));
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1000);
  };

  return (
    <Section id="contact" className="contact-section" padding="sm">
      <SectionHeader 
        title={t('contact.title')}
        align="center"
        underline={true}
      />

      <SectionContent layout="flex" spacing="sm" maxWidth="lg">
        <Grid columns={2} gap="md" responsive={true}>
          
          {/* Columna izquierda - Información de contacto */}
          <Flex direction="column" gap="sm">
            <div className="contact-text">
              <h3>¡Hablemos!</h3>
              <p>
                ¿Buscas un desarrollador freelance para tu próximo proyecto? ¿Necesitas colaboración técnica o estás considerando incorporar talento a tu equipo? Me encantaría conocer más sobre tu propuesta y cómo puedo aportar valor a tus objetivos.
              </p>
            </div>

            <div className="contact-methods">
              <div className="contact-links">
                
                <div className="contact-link">
                  <div className="contact-icon">
                    <FiMail />
                  </div>
                  <div className="contact-info">
                    <span className="contact-label">Email</span>
                    <a href={`mailto:${t('contact.info.email')}`}>
                      {t('contact.info.email')}
                    </a>
                  </div>
                </div>
                
                <div className="contact-link">
                  <div className="contact-icon">
                    <FiPhone />
                  </div>
                  <div className="contact-info">
                    <span className="contact-label">Teléfono</span>
                    <a href={`tel:${t('contact.info.phone')}`}>
                      {t('contact.info.phone')}
                    </a>
                  </div>
                </div>
                
                <div className="contact-link">
                  <div className="contact-icon">
                    <FiLinkedin />
                  </div>
                  <div className="contact-info">
                    <span className="contact-label">LinkedIn</span>
                    <a 
                      href={`https://www.linkedin.com/in/${t('contact.info.linkedin')}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      linkedin.com/in/{t('contact.info.linkedin')}
                    </a>
                  </div>
                </div>
                
                <div className="contact-link">
                  <div className="contact-icon">
                    <FiGithub />
                  </div>
                  <div className="contact-info">
                    <span className="contact-label">GitHub</span>
                    <a 
                      href={`https://github.com/${t('contact.info.github')}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      github.com/{t('contact.info.github')}
                    </a>
                  </div>
                </div>
                
              </div>
            </div>
          </Flex>

          {/* Columna derecha - Formulario */}
          <Card variant="default" className="contact-form-wrapper">
            <Card.Body>
              <form onSubmit={handleSubmit} className="contact-form">
                
                <div className="form-group">
                  <label htmlFor="name">{t('contact.form.name')}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre completo"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">{t('contact.form.email')}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">{t('contact.form.subject')}</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Asunto del mensaje"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">{t('contact.form.message')}</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Escribe tu mensaje aquí..."
                    required
                  />
                </div>

                <div className="form-submit-wrapper">
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    fullWidth={true}
                    icon={<FiSend />}
                    disabled={status === t('contact.form.sending')}
                  >
                    {status || t('contact.form.send')}
                  </Button>
                </div>
              </form>
            </Card.Body>
          </Card>
          
        </Grid>
      </SectionContent>
    </Section>
  );
};

export default ContactSection;