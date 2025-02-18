import React, { useState } from "react";

const Form = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, email, phone, dob } = formData;
    const today = new Date();
    const dobDate = new Date(dob);

    if (!username || !email || !phone || !dob) {
      alert("All fields are required. Please fill in all the details.");
      return;
    }

    if (dobDate > today) {
      alert("Invalid date of birth. Date of Birth cannot be in the future.");
      return;
    }

    console.log("Form Data Submitted:", formData);
    closeModal(); 
  };

  return (
    <div className="w-100">
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
              pattern="[0-9]{10}"
              maxLength="10"
              value={formData.phone}
              onChange={handleChange}
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
  );
};

export default Form;
