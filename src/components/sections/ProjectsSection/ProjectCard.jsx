import { useI18n } from '../../../i18n/useI18n';
import Button from '../../ui/Button/Button';
import Tag from '../../ui/Tag/Tag';
import './ProjectCard.css';

const ProjectCard = ({ project, getStatusText, onViewScreenshots }) => {
  const { t } = useI18n();

  const handleViewProject = () => {
    if (project.liveUrl) {
      window.open(project.liveUrl, '_blank');
    }
  };

  const handleViewCode = () => {
    if (project.githubUrl) {
      window.open(project.githubUrl, '_blank');
    }
  }to

  const handleViewScreenshots = () => {
    onViewScreenshots(project.id);
  };

  // Lógica para determinar qué botones mostrar
  const hasLiveUrl = project.liveUrl;
  const hasGithubUrl = project.githubUrl;
  const hasScreenshots = project.demoType === 'screenshots';

  // Si tiene demo y code, no mostrar screenshots
  // Si solo tiene code, mostrar solo code
  // Si solo tiene screenshots, mostrar solo screenshots
  const showDemo = hasLiveUrl;
  const showCode = hasGithubUrl;
  const showScreenshots = hasScreenshots && !hasLiveUrl && !hasGithubUrl;

  return (
    <div 
      className="project-card" 
      data-category={project.category}
      data-featured={project.featured}
    >
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="project-overlay">
          <div className="project-actions">
            {showDemo && (
              <Button
                variant="primary"
                size="sm"
                className="btn-view-project"
                onClick={handleViewProject}
              >
                {t('projects.viewProject')}
              </Button>
            )}
            {showCode && (
              <Button
                variant="secondary"
                size="sm"
                className="btn-view-code"
                onClick={handleViewCode}
              >
                {t('projects.viewCode')}
              </Button>
            )}
            {showScreenshots && (
              <Button
                variant="outline"
                size="sm"
                className="btn-view-screenshots"
                onClick={handleViewScreenshots}
              >
                {t('projects.viewScreenshots')}
              </Button>
            )}
          </div>
        </div>
      </div>
      
      <div className="project-content">
        <div className="project-header">
          <h3 className="project-title">{project.title}</h3>
        </div>
        
        <p className="project-description">{project.description}</p>
        
        <div className="project-footer">
          <div className="project-status">
            <Tag variant="success" size="sm">
              {getStatusText(project.status)}
            </Tag>
          </div>

          <div className="project-tech">
            {project.technologies.map((tech, index) => (
              <Tag key={index} variant={`tech-${index % 4}`} size="sm">
                {tech}
              </Tag>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;