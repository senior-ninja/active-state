import React from 'react';

const ButtonBar = ({ categories, onSelectCategory }) => {
  return (
    <div className="button-bar">
      {categories.map((category, index) => (
        <button key={index} onClick={() => onSelectCategory(category)}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default ButtonBar;