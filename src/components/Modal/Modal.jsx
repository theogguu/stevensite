import React, { useEffect } from 'react';
import './Modal.css';
import IconButton from '../IconButton/IconButton';

const Modal = ({ open, close, children }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && open) {
        close();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, close]);

  return (
    <div
      className={`modal ${open ? 'modal-show' : ''}`}
      tabIndex="-1"
      role="dialog"
      onClick={(evt) => {
        if (evt.target === evt.currentTarget) close();
      }}
      aria-label="Modal Window"
      data-cy="modal"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h2 id="modal-title" aria-label="Modal Title">{children.title}</h2>
            <span data-cy="modal-close-btn">
              <IconButton icon="bi bi-x" onClick={close} alt="Close Popup"/>
            </span>
          </div>
          <div className="modal-body">{children.body}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
