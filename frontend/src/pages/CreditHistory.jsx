// src/pages/CreditHistory.jsx

import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { getScoreColor, getRatingBadge } from '../components/ScoreRatingDisplay';

const CreditHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const email = Cookies.get('email');
      const res = await fetch(`http://192.168.137.202:5000/credit-history?email=${email}`);
      const data = await res.json();
      if (data.success) setHistory(data.history);
    };

    fetchHistory();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Credit History</h2>

      {/* Table */}
      <div className="bg-white shadow-md rounded-md p-4">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="text-gray-600 uppercase bg-gray-100 text-xs">
              <tr>
                <th className="py-3 px-6">Account Name</th>
                <th className="py-3 px-6">Score</th>
                <th className="py-3 px-6">Rating</th>
                <th className="py-3 px-6">Date</th>
              </tr>
            </thead>
            <tbody>
              {history.map((item, idx) => (
                <tr key={idx} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-800">{item.accountName}</td>                  
                  <td className={`px-6 py-4 font-semibold ${getScoreColor(item.score)}`}>
                    {item.score}
                  </td>
                  <td className="px-6 py-4">
                    {(() => {
                      const badge = getRatingBadge(item.score);
                      return (
                        <span className={`inline-flex items-center px-3 py-1 text-sm font-medium rounded-full ${badge.bg} ${badge.textColor}`}>
                          {badge.text}
                        </span>
                      );
                    })()}
                  </td>
                  <td className="px-6 py-4 text-gray-600">{item.date}</td>
                </tr>
              ))}
              {history.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center text-gray-500 py-8">
                    No credit scores generated yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CreditHistory;
