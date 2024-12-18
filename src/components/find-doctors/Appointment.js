import React, { useState } from "react";
import "../../styles/Appointment.css";


const Appointment = () => {
  const [selectedSession, setSelectedSession] = useState("video");
  const [selectedDate, setSelectedDate] = useState(1);
  const [selectedTime, setSelectedTime] = useState(null);

  const sessionTypes = [
    { id: "clinic", label: "In-Clinic", duration: "45 Mins" },
    { id: "video", label: "Video", duration: "45 Mins" },
    { id: "chat", label: "Chat", duration: "10 Mins" }
  ];

  const dates = [
    { id: 1, day: "Mon", date: "10 Oct", slots: "10 slots" },
    { id: 2, day: "Tue", date: "11 Oct", slots: "02 slots" },
    { id: 3, day: "Wed", date: "12 Oct", slots: "05 slots" }
  ];

  const morningSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:15 AM", "10:45 AM", "11:00 AM"
  ];

  const eveningSlots = [
    "04:00 PM", "04:15 PM", "04:30 PM", "04:45 PM", "05:15 PM"
  ];

  return (
    <div className="appointment-container">
      {/* Fee Section */}
      <div className="fee-section">
        <span className="fee-label">Appointment Fee</span>
        <span className="fee-amount">₹699.00</span>
      </div>

      {/* Session Type Selection */}
      <div className="session-section">
        <h3>Select your mode of session</h3>
        <div className="session-types">
          {sessionTypes.map((type) => (
            <div
              key={type.id}
              className={`session-type ${selectedSession === type.id ? 'selected' : ''}`}
              onClick={() => setSelectedSession(type.id)}
            >
              <span className="session-label">{type.label}</span>
              <span className="session-duration">{type.duration}</span>
              {selectedSession === type.id && (
                <span className="check-icon">
                  <svg viewBox="0 0 24 24" fill="none" className="check-svg">
                    <path
                      d="M20 6L9 17l-5-5"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Date Selection */}
      <div className="date-section">
        <h3>Pick a time slot</h3>
        <div className="date-slider">
          <button className="nav-button prev">
            <svg viewBox="0 0 24 24" fill="none" className="nav-icon">
              <path
                d="M15 18l-6-6 6-6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="dates">
            {dates.map((date) => (
              <div
                key={date.id}
                className={`date-card ${selectedDate === date.id ? 'selected' : ''}`}
                onClick={() => setSelectedDate(date.id)}
              >
                <div className="date-info">
                  <span className="day">{date.day}, {date.date}</span>
                  <span className="slots">{date.slots}</span>
                </div>
              </div>
            ))}
          </div>
          <button className="nav-button next">
            <svg viewBox="0 0 24 24" fill="none" className="nav-icon">
              <path
                d="M9 18l6-6-6-6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Time Slots */}
      <div className="time-slots-section">
        <div className="time-section">
          <h4>Morning</h4>
          <div className="slots-grid">
            {morningSlots.map((time) => (
              <button
                key={time}
                className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        <div className="time-section">
          <h4>Evening</h4>
          <div className="slots-grid">
            {eveningSlots.map((time) => (
              <button
                key={time}
                className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Book Button */}
      <button className="book-appointment-btn">
        Make An Appointment
      </button>
    </div>
  );
};

export default Appointment;
