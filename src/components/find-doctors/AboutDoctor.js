import React, { useState } from "react";
import "../../styles/AboutDoctor.css";


import { Instagram, Facebook, Youtube, Twitter, Building2, Calendar, MapPin, Users } from 'lucide-react';

const AboutDoctor = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const specialties = [
    { id: 1, name: "Women's Health", icon: "👩" },
    { id: 2, name: "Skin Care", icon: "🧴" },
    { id: 3, name: "Immunity", icon: "🛡️" },
    { id: 4, name: "Hair Care", icon: "💇‍♀️" }
  ];

  const concerns = [
    "Skin Treatment", "Pregnancy", "Period Doubts", 
    "Endometriosis", "Pelvic Pain", "Ovarian Cysts"
  ];

  const experience = [
    {
      id: 1,
      clinic: "Midtown Medical Clinic",
      role: "Senior Gynecologist",
      period: "2015-PRESENT",
      location: "Mumbai, India",
      achievements: [
        "Led a team of 5 junior doctors",
        "Performed 1000+ successful deliveries",
        "Specialized in high-risk pregnancies"
      ],
      patients: "10,000+"
    },
    {
      id: 2,
      clinic: "City General Hospital",
      role: "Junior Gynecologist",
      period: "2010-2015",
      location: "Delhi, India",
      achievements: [
        "Handled emergency cases in maternity ward",
        "Conducted regular prenatal workshops",
        "Research publication on women's health"
      ],
      patients: "5,000+"
    }
  ];

  const handleSocialClick = (platform) => {
    console.log(`Clicked ${platform}`);
  };

  return (
    <div className="about-doctor-container">
      {/* About Me Section */}
      <div className="about-section">
        <div className="section-header">
          <h3>A Little About me</h3>
          <button className="follow-button">
            Follow +
          </button>
        </div>
        <p className="about-text">
          Hello! I am Dr. Bruce Willis a Gynecologist in Sanjivni Hospital Surat, love to work with all my hospital staff and various doctors. Completed my graduation in Gynecologist Medicine from the
          {!isExpanded && "..."}
        </p>
        <button 
          className="read-more-btn"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          Read More
        </button>
        
        <div className="languages">
          <span className="language-label">Language Spoken</span>
          {["English", "Hindi", "Telugu"].map((lang) => (
            <span key={lang} className="language-tag">
              {lang}
            </span>
          ))}
        </div>

        <div className="social-links">
          <button 
            className="social-icon"
            onClick={() => handleSocialClick('facebook')}
            aria-label="Visit Facebook profile"
          >
            <Facebook size={20} />
          </button>
          <button 
            className="social-icon"
            onClick={() => handleSocialClick('instagram')}
            aria-label="Visit Instagram profile"
          >
            <Instagram size={20} />
          </button>
          <button 
            className="social-icon"
            onClick={() => handleSocialClick('youtube')}
            aria-label="Visit YouTube channel"
          >
            <Youtube size={20} />
          </button>
          <button 
            className="social-icon"
            onClick={() => handleSocialClick('twitter')}
            aria-label="Visit Twitter profile"
          >
            <Twitter size={20} />
          </button>
        </div>
      </div>

      {/* Specialties Section */}
      <div className="specialties-section">
        <h3>I Specialize In</h3>
        <div className="specialties-grid">
          {specialties.map((specialty) => (
            <div key={specialty.id} className="specialty-item">
              <div className="specialty-icon">
                {specialty.icon}
              </div>
              <span>{specialty.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Concerns Section */}
      <div className="concerns-section">
        <h3>The Concerns I Treat</h3>
        <div className="concerns-grid">
          {concerns.map((concern) => (
            <span key={concern} className="concern-tag">
              {concern}
            </span>
          ))}
          <span className="concern-tag more-tag">+ 5 More</span>
        </div>
      </div>

      {/* Experience Section */}
      <div className="experience-section">
        <h3>My Work Experience</h3>
        <div className="experience-header">
          <Building2 className="experience-header-icon" />
          <span>I HAVE BEEN IN PRACTICE FOR : 7+ YEARS</span>
        </div>
        <div className="experience-timeline">
          {experience.map((exp) => (
            <div key={exp.id} className="experience-item">
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
                <div className="timeline-line"></div>
              </div>
              <div className="experience-content">
                <div className="experience-title">
                  <h4>{exp.clinic}</h4>
                  <span className="experience-period">
                    <Calendar className="exp-icon" size={16} />
                    {exp.period}
                  </span>
                </div>
                <div className="experience-role">
                  <span className="role-title">{exp.role}</span>
                  <div className="experience-location">
                    <MapPin className="exp-icon" size={16} />
                    {exp.location}
                  </div>
                </div>
                <div className="experience-achievements">
                  <ul>
                    {exp.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                <div className="experience-patients">
                  <Users className="exp-icon" size={16} />
                  <span>Patients Treated: {exp.patients}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutDoctor;
