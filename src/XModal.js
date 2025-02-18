import React, { useState, useRef } from 'react';
import './App.css';

const XModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [phone, setPhone] = useState('');
    const modalRef = useRef(null);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    };

    const handleSubmit = () => {
        if (!username) {
            alert('Please fill in the Username field.');
            return;
        }
        if (!email) {
            alert('Please fill in the Email field.');
            return;
        }
        if (!dob) {
            alert('Please fill in the Date of Birth field.');
            return;
        }
        if (!phone) {
            alert('Please fill in the Phone Number field.');
            return;
        }

        if (!email.includes('@')) {
            alert('Invalid email. Please check your email address.');
            return;
        }

        if (phone.length !== 10 || isNaN(phone)) {
            alert('Invalid phone number. Please enter a 10-digit phone number.');
            return;
        }

        const dobDate = new Date(dob);
        const today = new Date();
        if (dobDate > today) {
            alert('Date of Birth cannot be a future date.');
            return;
        }

        setIsOpen(false);
    };

    return (
        <div>
              <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="w-100 text-center">
          <h1>User Details Modal</h1>
          <button className="btn btn-primary" onClick={openModal}>
            Open Form
          </button>
        </div>
      </div>

            {isOpen && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content" ref={modalRef}>
                         <div className='w-100 jusitify-center align-item-center'>  <h2>Fill Details </h2></div>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <label htmlFor="dob">Date of Birth:</label>
                        <input
                            type="date"
                            id="dob"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                        />

                        <label htmlFor="phone">Phone Number:</label>
                        <input
                            type="number"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />

                        <button className="btn btn-primary mt-4" onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default XModal;
