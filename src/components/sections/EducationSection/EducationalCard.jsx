import React from 'react';
import Card from '../../ui/Card/Card';
import './EducationalCard.css';

const EducationalCard = ({ item, type }) => {
  const cardClass = 'educational-card';
  const weightClass = `weight-${item.weight}`;

  return (
    <Card className={`${cardClass} ${weightClass}`}>
      <Card.Body>
        {/* Primera fila: título y badge */}
        <div className="educational-card-header">
          <span className="educationalcard-title">
            {item.name}
          </span>
          {type === 'certification' && item.badge && (
            <div className="badge-container">
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
            </div>
          )}
        </div>
        
        {/* Segunda fila: subtítulo */}
        <p className="educationalcard-subtitle">
          {item.issuer}, {item.year}
        </p>
      </Card.Body>
    </Card>
  );
};

export default EducationalCard;
