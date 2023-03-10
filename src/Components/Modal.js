import React from 'react';
import './modal.css'
import modalpic from '../images/modalpic.jpg';

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
        >
        <img className="modal-img"src={modalpic} alt='/' />
        <div className='modalRight'>
          <p className='closeBtn' onClick={onClose}>
            x
          </p>
          <div className='content'>
            <p>Do you want a</p>
            <h1>$20 CREDIT</h1>
            <p>for your first purchase?</p>
          </div>
          <div className='btnContainer'>
            <button className='btnPrimary'>
              <span className='bold'>YES</span>, I like discount!
            </button>
            <button className='btnOutline'>
              <span className='bold'>NO</span>, continue purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;