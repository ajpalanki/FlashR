import React from 'react';
import Card from './Card';

export default function CardList({ cards }) {
  return (
    <div className="card-grid">
      {cards.map((card) => {
        return <Card key={card.id} card={card} />;
      })}
    </div>
  );
}
