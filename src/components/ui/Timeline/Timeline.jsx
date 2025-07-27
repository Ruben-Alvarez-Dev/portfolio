import React from 'react';
import './Timeline.css';

const Timeline = ({ items = [], className = '' }) => {
  if (!items || items.length === 0) {
    return <div className="timeline-empty">No timeline items provided</div>;
  }

  return (
    <div className={`timeline ${className}`}>
      {items.map((item, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-year">{item.year}</div>
          <div className="timeline-marker">
            <div className="timeline-dot"></div>
          </div>
          <div className="timeline-content">
            <div className="timeline-header">
              <h3 className="timeline-title">{item.position}</h3>
              <span className="timeline-date">{item.period}</span>
            </div>
            <h4 className="timeline-subtitle">{item.company}</h4>
            {item.description && (
              <p className="timeline-description">{item.description}</p>
            )}
            {item.achievements && item.achievements.length > 0 && (
              <ul className="timeline-list">
                {item.achievements.map((achievement, achievementIndex) => (
                  <li key={achievementIndex}>{achievement}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
