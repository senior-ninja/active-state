import React from 'react';

const Card = ({ title, description, Url, category }) => {
  return (
    <div className={`card ${category}`}>
      <img src={Url} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;