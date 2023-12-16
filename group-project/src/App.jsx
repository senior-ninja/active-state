import React, { useState } from 'react';
import Card from './Card';
import ButtonBar from './ButtonBar';
import './App.css'; 

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const cardData = [
    {
      title: 'Card 1',
      description: 'Card 1',
      imageUrl: 'https://placekitten.com/300/200',
      category: 'HTML',
    },
    {
      title: 'Card 2',
      description: 'Card 2',
      imageUrl: 'https://placekitten.com/300/200',
      category: 'CSS',
    },
    {
      title: 'Card 3',
      description: 'Card 3',
      imageUrl: 'https://placekitten.com/300/200',
      category: 'JavaScript',
    },
  ];

  const categories = ['All', 'HTML', 'CSS', 'JavaScript'];

  const filteredCards =
    selectedCategory === 'All'
      ? cardData
      : cardData.filter((card) => card.category === selectedCategory);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="app">
      <ButtonBar categories={categories} onSelectCategory={handleSelectCategory} />
      <div className="cards">
        {filteredCards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default App;
