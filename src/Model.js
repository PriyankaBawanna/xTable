import React, { useState } from "react";
import "./model.css";

const Model = ({ children }) => {
  const [show, setShow] = useState(false);

  const handleShowModel = () => {
    setShow(!show);
  };

  const handleCloseModal = (e) => {
    // Close modal only if clicking on the background, not on the modal itself
    if (e.target.classList.contains("modal-overlay")) {
      setShow(false);
    }
  };

  return (
    <div className="d-flex">
      <button onClick={handleShowModel} type="button" className="btn btn-primary">
        Open Form
      </button>

      {show && (
        <div
          className="modal-overlay w-100 h-100 d-flex justify-content-center align-items-center position-fixed top-0 start-0 bg-black bg-opacity-75"
          onClick={handleCloseModal}
        >
          <div className="modal-content bg-white w-50 p-4 rounded" onClick={(e) => e.stopPropagation()}>
            {React.cloneElement(children, { closeModal: () => setShow(false) })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Model;
