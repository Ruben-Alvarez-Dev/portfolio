import React from 'react';
import { Card, Flex, Tag } from '../../../ui';
import './ExperienceCard.css';

const ExperienceCard = ({ experience }) => {
  return (
    <div className="experience-item">
      <div className="experience-marker"></div>
      <Card variant="default" className="experience-card">
        <Card.Body>
          <Flex direction="column" gap="md">
            <Flex justify="between" align="start" wrap="wrap" gap="sm" className="experience-header">
              <Flex direction="column" gap="xs">
                <h3 className="experience-position">{experience.title}</h3>
                <h4 className="experience-company">{experience.company}</h4>
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
                {experience.duration}
              </Tag>
            </Flex>
            
            <p className="experience-description">{experience.type}</p>
            
            <ul className="experience-responsibilities">
              {experience.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </Flex>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ExperienceCard;
