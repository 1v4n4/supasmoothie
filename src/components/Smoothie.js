import React from 'react';

const Smoothie = ({ smoothie }) => {
  console.log(smoothie);
  return (
    <div className="smoothie">
      <h3>{smoothie.title}</h3>
      <p>{smoothie.method}</p>
      <div className='rating'>{smoothie.rating}</div>
    </div>
  )
}

export default Smoothie;