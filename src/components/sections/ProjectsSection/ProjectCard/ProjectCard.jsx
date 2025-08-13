import { useI18n } from '../../../../i18n/useI18n';
import Card from '../../../ui/Card/Card';
import Button from '../../../ui/Button/Button';
import Tag from '../../../ui/Tag/Tag';
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
  };

  const handleViewScreenshots = () => {
    onViewScreenshots(project.id);
  };

  const getStatusVariant = (status) => {
    switch (status) {
      case 'completed':
        return 'green';
      case 'in-progress':
        return 'yellow';
      case 'planned':
        return 'blue';
      default:
        return 'gray';
    }
  };

  const hasLiveUrl = project.liveUrl;
  const hasGithubUrl = project.githubUrl;
  
  // Determinar qué botones mostrar según la categoría
  const webCategories = ['fullstack', 'backend', 'frontend'];
  const isWebProject = webCategories.includes(project.category);
  
  // Los proyectos web (fullstack, backend, frontend) siempre tienen ambos botones (Live y Github)
  // Los demás proyectos (powerplatform, azure, management, ai) solo tienen screenshots
  const showLive = isWebProject; // Siempre mostrar Live para proyectos web
  const isLiveDisabled = !hasLiveUrl; // Deshabilitado si no hay URL
  const showGithub = isWebProject; // Siempre mostrar Github para proyectos web
  const isGithubDisabled = !hasGithubUrl; // Deshabilitado si no hay URL
  const showScreenshots = !isWebProject;

  return (
    <Card 
      className="project-card" 
      data-category={project.category}
      data-featured={project.featured}
    >
      <Card.Image src={project.image} alt={project.title}>
        <div className="project-overlay">
          <div className="project-actions">
            {showLive && (
              <Button
                variant={isLiveDisabled ? "disabled" : "primary"}
                size="sm"
                className="btn-view-project"
                onClick={isLiveDisabled ? null : handleViewProject}
              >
                {isLiveDisabled ? "Coming Soon" : "Live"}
              </Button>
            )}
            {showGithub && (
              <Button
                variant={isGithubDisabled ? "disabled" : "secondary"}
                size="sm"
                className="btn-view-code"
                onClick={isGithubDisabled ? null : handleViewCode}
              >
                {isGithubDisabled ? "Coming Soon" : "Github"}
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
      </Card.Image>
      
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Content>
          <p className="project-description">{project.description}</p>
        </Card.Content>
      </Card.Body>
      
      <Card.Footer>
        <div className="project-tech">
          <Tag variant={getStatusVariant(project.status)} size="sm">
            {getStatusText(project.status)}
          </Tag>
          {project.technologies.map((tech, index) => (
            <Tag key={index} variant="gray" size="sm">
              {tech}
            </Tag>
          ))}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default ProjectCard;
