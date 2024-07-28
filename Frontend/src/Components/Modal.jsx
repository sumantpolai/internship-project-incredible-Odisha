import React from 'react';
import './Modal.css';

const Modal = ({ show, onClose, image, title, description }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <img src={image} alt={title} className="modal-image" />
        <h2>{title}</h2>
        <p>{description}</p>
        <button onClick={onClose} className="modal-close-button">Close</button>
      </div>
    </div>
  );
};

export default Modal;
