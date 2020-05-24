/* eslint-disable react/no-array-index-key */
import React from 'react';
import star0 from '../../assets/imgs/star0.png';
import star1 from '../../assets/imgs/star1.png';

const Star = ({ star }) => <img className="rater-star" src={star} alt="" />;

const Rater = ({ value }) => (
  <div className="rater-container">
    {[1, 2, 3, 4, 5].map((i, pos) => (i <= value ? <Star key={`keyR-${pos}`} star={star0} /> : <Star star={star1} />))}
  </div>
);

export default Rater;
