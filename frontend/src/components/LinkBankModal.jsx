// frontend/src/components/LinkBankModal.jsx
import React from 'react';

const LinkBankModal = ({ isOpen, onLink, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">Link Your Bank Account</h2>
        <p className="mb-4">You must link your bank account to view your credit history.</p>
        <button onClick={onLink} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
          Link Bank Account
        </button>
        <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default LinkBankModal;
