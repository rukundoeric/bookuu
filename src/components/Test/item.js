/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

export default function item({ property }) {
  const {
    picture, title, description, index,
  } = property;
  return (
    <div id={`card-${index}`} className="test_card">
      <img src={picture} alt="image" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
