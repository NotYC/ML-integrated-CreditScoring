// frontend/src/pages/CreditHistory.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CreditHistoryGraph from '../components/CreditHistoryGraph';
import LinkBankModal from '../components/LinkBankModal';

const CreditHistory = () => {
  const [history, setHistory] = useState([]);
  const [bankLinked, setBankLinked] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:5000/api/credit-history', {
        credentials: 'include'
      });
      const data = await res.json();
      if (!data.bankLinked) {
        setBankLinked(false);
        setShowModal(true);
      } else {
        setHistory(data.history.map(entry => ({
          date: new Date(entry.date).toLocaleDateString(),
          score: entry.score,
          _id: entry._id
        })));
      }
    })();
  }, []);

  const handleLink = () => navigate('/linkbank');

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Credit Score History</h1>
      {bankLinked ? (
        <>
          <CreditHistoryGraph data={history} />
          <ul className="mt-4 space-y-2">
            {history.map(e => (
              <li key={e._id}>
                <strong>{e.date}:</strong> {e.score}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <LinkBankModal
          isOpen={showModal}
          onLink={handleLink}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default CreditHistory;
