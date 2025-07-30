import React from 'react';
import { Card, Flex, Tag } from '../../ui';

const EducationalCard = ({ item, type }) => {
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
  const cardClass = type === 'title' ? 'academic-card' : 'certification-card';

  return (
    <Card variant="default" className={`${cardClass} ${priorityClass}`}>
      <Card.Body level="minimal">
        <Flex justify="between" align="start" gap={type === 'title' ? 'md' : 'none'} className="education-item">
          <Flex direction="column" gap="xs">
            <Card.Text
              level={3}
              as="h4"
              className="education-name"
            >
              {item.name}
            </Card.Text>
            <Card.Text
              level={3}
              as="p"
              className="education-institution"
            >
              {item.issuer}, {item.year}
            </Card.Text>
          </Flex>
          {type === 'certification' && item.badge && (
            <Flex direction="column" align="end" gap="none" style={{alignSelf: 'flex-start', marginTop: '-6px'}}>
              {item.certificationUrl ? (
                <a
                  href={item.certificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certification-badge-link"
                >
                  <img
                    src={item.badge}
                    alt={`${item.name} badge`}
                    className="certification-badge"
                    onLoad={(e) => {
                      console.log(`Badge loaded successfully: ${item.badge}`);
                      e.target.style.display = 'block';
                    }}
                    onError={(e) => {
                      console.log(`Badge failed to load: ${item.badge}`);
                      e.target.style.display = 'none';
                    }}
                  />
                </a>
              ) : (
                <img
                  src={item.badge}
                  alt={`${item.name} badge`}
                  className="certification-badge"
                  onLoad={(e) => {
                    console.log(`Badge loaded successfully: ${item.badge}`);
                    e.target.style.display = 'block';
                  }}
                  onError={(e) => {
                    console.log(`Badge failed to load: ${item.badge}`);
                    e.target.style.display = 'none';
                  }}
                />
              )}
            </Flex>
          )}
        </Flex>
      </Card.Body>
    </Card>
  );
};

export default EducationalCard;
