import React from 'react';

const Card = ({ image, id, name }) => {
  return (
    <div key={id} className="cards">
      <div className="cards--image" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="cards--infos">
        <h2 className="infos--header">{name}</h2>
      </div>
    </div>
  );
}

export default Card;