import { ReactNode } from 'react';
import styles from '../styles/Modal.module.css';

interface ModalProps {
  show: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, onConfirm, title, children }) => {
  if (!show) return null;

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h2>{title}</h2>
        </div>
        <div className={styles.modalBody}>
          {children}
        </div>
        <div className={styles.modalFooter}>
          <button onClick={onClose} className={styles.modalButton}>Cancel</button>
          <button onClick={onConfirm} className={styles.modalButton}>Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
