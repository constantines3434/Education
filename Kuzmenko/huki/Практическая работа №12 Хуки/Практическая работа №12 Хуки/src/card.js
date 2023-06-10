import React from 'react';
import './card.css'

export default function Card({
  additional,
  name,
  showAdditional,
  cost,
  pic
}) {

  return (
    <div className="cardwrapper">
      <div>
        <h2>{name}{pic}</h2>
        <h4>{cost}руб</h4>
        <button onClick={() => showAdditional(additional)}>Дополнительно</button>
        <p>
          <p ></p>
          
          <p></p>
        </p>
        <p></p>
      </div>
    </div>
  );
}