import React from 'react';
import { Card, Flex, Tag } from '../../ui';

const ExperienceCard = ({ item, showMarker = true }) => {
  // Get priority class based on weight
  const getPriorityClass = (weight) => {
    switch (weight) {
      case 1:
        return 'priority-high';
      case 2:
        return 'priority-medium';
      case 3:
      default:
        return 'priority-low';
    }
  };

  const priorityClass = getPriorityClass(item.weight);
  const cardClass = item.type === 'tech' ? 'tech-experience-card' : 'management-experience-card';

  return (
    <Flex align="start" gap="md" className="experience-item" style={{ width: '100%' }}>
      {showMarker && <div className="experience-marker"></div>}
      <Card variant="default" className={`experience-card ${cardClass} ${priorityClass}`} style={{ flex: 1 }}>
        <Card.Body level="minimal">
          <Flex direction="column" gap="md">
            <Flex justify="between" align="start" wrap="wrap" gap="sm" className="experience-header">
              <Flex direction="column" gap="xs">
                <Card.Text
                  level={3}
                  as="h3"
                  className="experience-position"
                >
                  {item.title}
                </Card.Text>
                <Card.Text
                  level={3}
                  as="h4"
                  className="experience-company"
                >
                  {item.companyFull}
                </Card.Text>
              </Flex>
              <Tag
                size="sm"
                color="experience"
                glow={true}
                clickable={true}
                position={true}
                bordered={true}
                className="experience-year"
              >
                {item.duration}
              </Tag>
            </Flex>
            
            <ul className="experience-achievements">
              {item.achievements.map((achievement, idx) => (
                <li key={idx}>{achievement}</li>
              ))}
            </ul>
          </Flex>
        </Card.Body>
      </Card>
    </Flex>
  );
};

export default ExperienceCard;
