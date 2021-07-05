import React from 'react';

const Reviews = ({ reviews }) => {
  return reviews.length > 0 ? (
    <p>{reviews[0].content}</p>
  ) : (
    <p>We don't have any reviews for this movie</p>
  );
};

export default Reviews;
