import React from 'react';

const Reviews = ({ reviews }) => {
  return reviews.length > 0 ? <p>{reviews[0].content}</p> : <p>no</p>;
};

export default Reviews;
