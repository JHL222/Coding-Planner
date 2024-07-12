import React, { useState } from 'react';
import styles from './NicknameModal.module.css'; // Create and import CSS module for modal styling

const NicknameModal = ({ isOpen, onClose, onSave }) => {
  const [newNickname, setNewNickname] = useState('');

  const handleSave = () => {
    onSave(newNickname);
    setNewNickname('');
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2>Change Nickname</h2>
        <input
          type="text"
          value={newNickname}
          onChange={(e) => setNewNickname(e.target.value)}
          placeholder="Enter new nickname"
        />
        <div className={styles.modalActions}>
          <button onClick={onClose}>Cancel</button>
          <button onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default NicknameModal;