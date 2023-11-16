import React from 'react';
import styles from './Modal.module.scss';

interface ModalProps {
  onClose: () => void;
}

const Modal = ({ onClose }: ModalProps) => (
  <div className={styles.modal}>
    <div className={styles.modalContent}>
      <span className={styles.closeButton} onClick={onClose}>
        &times;
      </span>
      <h2>로그인</h2>
    </div>
  </div>
);

export default Modal;
