import React from "react";
import "../../styles/ProfileSection.css";
import profileImage from "../../images/profile-pic.jpg";

const ProfileSection = () => {
  return (
    <div className="profile-section">
      {/* Background with curve */}
      <div className="profile-bg">
        <div className="profile-bg-overlay"></div>
      </div>

      {/* Content */}
      <div className="profile-content">
        {/* Profile Details */}
        <div className="profile-details">
          <div className="profile-picture-container">
            <img src={profileImage} alt="Profile" className="profile-picture" />
          </div>
          <div className="profile-info">
            <div className="profile-name-container">
              <h2 className="profile-name">Dr. Bruce Willis</h2>
              <span className="verified-badge">
                <svg viewBox="0 0 24 24" className="verify-icon">
                  <path
                    d="M20 6L9 17l-5-5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
            <p className="profile-role">Gynecologist</p>
            <div className="profile-rating">
              <span className="rating-number">4.2</span>
              <div className="stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="star">★</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="profile-stats">
          {[
            { label: "Followers", value: "850" },
            { label: "Following", value: "18K" },
            { label: "Posts", value: "250" }
          ].map((stat) => (
            <div key={stat.label} className="stat">
              <p className="stat-label">{stat.label}</p>
              <h3 className="stat-value">{stat.value}</h3>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="profile-action">
          <button className="appointment-button">
            Book an Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
