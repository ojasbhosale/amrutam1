import React from 'react';
import ProfileSection from './find-doctors/ProfileSection';
import Appointment from './find-doctors/Appointment';
import AboutDoctor from './find-doctors/AboutDoctor';
import DoctorReview from './find-doctors/DoctorReview';

const FindDoctors = () => {
  return (
    <section
      style={{
        paddingBottom: '2rem',
        maxWidth: '100%', /* Ensure no overflow */
        overflowX: 'hidden', /* Hide horizontal overflow */
      }}
    >
      <ProfileSection />
      <Appointment />
      <AboutDoctor />
      <DoctorReview />
    </section>
  );
}

export default FindDoctors;
