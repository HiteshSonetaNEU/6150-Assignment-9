import React from 'react';

const Card = ({ title, content }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px', borderRadius: '5px' }}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Card;
