import React from 'react';
import Close from 'material-ui/svg-icons/navigation/close';
import './CloseModal.scss';

const CloseModal = ({ onClose }) => (
  <div className="close-modal" onClick={onClose}>
    <Close style={{ color: 'gray' }}/>
  </div>
);

export default CloseModal;