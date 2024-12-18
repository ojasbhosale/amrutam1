import React from "react";
import { Star } from 'lucide-react';
import "../../styles/DoctorReview.css";
import review1 from '../../images/review1.jpg'
import review2 from '../../images/review2.jpg'

const DoctorReview = () => {
  const reviews = [
    {
      id: 1,
      name: "Alicent Hightower",
      image: review1, // Directly use the imported image
      consultationType: "Consulted for Skin care",
      rating: 5,
      date: "20 January 2023",
      review: "Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods"
    },
    {
      id: 2,
      name: "Alicent Hightower",
      image: review2, // Directly use the imported image
      consultationType: "Consulted for Pregnancy",
      rating: 5,
      date: "20 January 2023",
      review: "Might be bit early to confirm but yes I can see noticeable difference. will write again after using it for longer periods"
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`star-icon ${index < rating ? 'filled' : ''}`}
        size={16}
      />
    ));
  };

  return (
    <div className="doctor-review-container">
      <div className="review-header">
        <h3>Featured Reviews <span className="review-count">(102)</span></h3>
      </div>
      
      <div className="reviews-grid">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <div className="review-user">
              <div className="user-info">
                <div className="user-avatar">
                  <img 
                    src={review.image} 
                    alt={review.name}
                    width={48}
                    height={48}
                  />
                </div>
                <div className="user-details">
                  <h4 className="user-name">{review.name}</h4>
                  <p className="consultation-type">{review.consultationType}</p>
                </div>
              </div>
              <div className="review-date">{review.date}</div>
            </div>
            
            <div className="rating">
              {renderStars(review.rating)}
            </div>
            
            <p className="review-text">{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorReview;