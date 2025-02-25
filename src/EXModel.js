import React, { useState } from 'react';
import "./exmodel.css"

function EXModel() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');

  // Handle modal open and close
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Handle form submit and validation
  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      alert('Invalid email. Please check your email address.');
      return;
    }

    // Phone number validation
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
      alert('Invalid phone number. Please enter a 10-digit phone number.');
      return;
    }

    // Date of Birth validation (Checking if it's not empty for simplicity)
    if (!dob) {
      alert('Invalid date of birth. Please enter a valid date of birth.');
      return;
    }

    // If all validations pass, submit the form
    console.log('Form submitted successfully!');
    closeModal();
  };

  return (
    <div>
      <button onClick={openModal}>Open Form</button>

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="bg-white p-4 ">
        <h3 className="text-center fw-bold">Fill Details</h3>
        <form onSubmit={handleSubmit} className="d-flex flex-column">
          
          <div className="d-flex flex-column align-items-center">
            <label className="fw-bold text-center mb-2">Username:</label>
            <input
              type="text"
              name="username"
              className="form-control mb-2"
              value={formData.username}
              onChange={handleChange}
            />
          </div>

          <div className="d-flex flex-column align-items-center">
            <label className="fw-bold text-center mb-2">Email Address:</label>
            <input
              type="email"
              name="email"
              className="form-control mb-2"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="d-flex flex-column align-items-center">
            <label className="fw-bold text-center mb-2">Phone Number:</label>
            <input
              type="tel"
              name="phone"
              className="form-control mb-2"
              value={formData.phone}
              onChange={handleChange}
              maxLength="10"
            />
          </div>

          <div className="d-flex flex-column align-items-center">
            <label className="fw-bold text-center mb-2">Date of Birth:</label>
            <input
              type="date"
              name="dob"
              className="form-control mb-3"
              value={formData.dob}
              onChange={handleChange}
              max={new Date().toISOString().split("T")[0]} // Restrict future dates
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>
      </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EXModel;
