// src/pages/CreditHistory.jsx

// import React, { useEffect, useState } from 'react';
// import Cookies from 'js-cookie';
// import { getScoreColor, getRatingBadge } from '../components/ScoreRatingDisplay';
// const backS = import.meta.env.VITE_BACKEND_SERVER;
// const backP = import.meta.env.VITE_BACK_PORT;

// const CreditHistory = () => {
//   const [history, setHistory] = useState([]);

//   useEffect(() => {
//     const fetchHistory = async () => {
//       const email = Cookies.get('email');
//       const res = await fetch(`http://${backS}:${backP}/credit-history?email=${email}`);
//       const data = await res.json();
//       if (data.success) setHistory(data.history);
//     };

//     fetchHistory();
//   }, []);

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-6">Credit History</h2>

//       {/* Table */}
//       <div className="bg-white shadow-md rounded-md p-4">
//         <div className="overflow-x-auto">
//           <table className="min-w-full text-left text-sm">
//             <thead className="text-gray-600 uppercase bg-gray-100 text-xs">
//               <tr>
//                 <th className="py-3 px-6">Account Name</th>
//                 <th className="py-3 px-6">Score</th>
//                 <th className="py-3 px-6">Rating</th>
//                 <th className="py-3 px-6">Date</th>
//               </tr>
//             </thead>
//             <tbody>
//               {history.map((item, idx) => (
//                 <tr key={idx} className="border-b hover:bg-gray-50">
//                   <td className="px-6 py-4 font-medium text-gray-800">{item.accountName}</td>                  
//                   <td className={`px-6 py-4 font-semibold ${getScoreColor(item.score)}`}>
//                     {item.score}
//                   </td>
//                   <td className="px-6 py-4">
//                     {(() => {
//                       const badge = getRatingBadge(item.score);
//                       return (
//                         <span className={`inline-flex items-center px-3 py-1 text-sm font-medium rounded-full ${badge.bg} ${badge.textColor}`}>
//                           {badge.text}
//                         </span>
//                       );
//                     })()}
//                   </td>
//                   <td className="px-6 py-4 text-gray-600">{item.date}</td>
//                 </tr>
//               ))}
//               {history.length === 0 && (
//                 <tr>
//                   <td colSpan="4" className="text-center text-gray-500 py-8">
//                     No credit scores generated yet.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreditHistory;




// dummy data chart creation

// import React, { useEffect, useState } from 'react';
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from 'recharts';
// import Cookies from 'js-cookie';
// import { getScoreColor, getRatingBadge } from '../components/ScoreRatingDisplay';

// const backS = import.meta.env.VITE_BACKEND_SERVER;
// const backP = import.meta.env.VITE_BACK_PORT;

// // Dummy data with username
// const dummyHistory = [
//   { username: 'user1', score: 620, rating: 'Fair', date: '2024-01-10' },
//   { username: 'user1', score: 650, rating: 'Fair', date: '2024-01-22' },
//   { username: 'user1', score: 670, rating: 'Good', date: '2024-02-05' },
//   { username: 'user1', score: 700, rating: 'Good', date: '2024-02-20' },
//   { username: 'user1', score: 710, rating: 'Good', date: '2024-03-05' },
//   { username: 'user1', score: 690, rating: 'Good', date: '2024-03-21' },
//   { username: 'user1', score: 720, rating: 'Very Good', date: '2024-04-02' },
//   { username: 'user1', score: 740, rating: 'Very Good', date: '2024-04-10' },
//   { username: 'user1', score: 760, rating: 'Very Good', date: '2024-04-16' },
//   { username: 'user1', score: 780, rating: 'Excellent', date: '2024-04-20' },
// ];

// const CreditHistory = () => {
//   const [history, setHistory] = useState([]);

//   useEffect(() => {
//     // Simulate backend fetch
//     setTimeout(() => {
//       setHistory(dummyHistory);
//     }, 300);
//   }, []);

//   // Chart data with generation count
//   const chartData = history.map((item, idx) => ({
//     generation: `Gen ${idx + 1}`,
//     score: item.score,
//     username: item.username,
//     date: item.date,
//   }));

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-6">Credit History</h2>

//       {/* Table */}
//       <div className="bg-white shadow-md rounded-md p-4">
//         <div className="overflow-x-auto">
//           <table className="min-w-full text-left text-sm">
//             <thead className="text-gray-600 uppercase bg-gray-100 text-xs">
//               <tr>
//                 <th className="py-3 px-6">Username</th>
//                 <th className="py-3 px-6">Score</th>
//                 <th className="py-3 px-6">Rating</th>
//                 <th className="py-3 px-6">Date</th>
//               </tr>
//             </thead>
//             <tbody>
//               {history.map((item, idx) => (
//                 <tr key={idx} className="border-b hover:bg-gray-50">
//                   <td className="px-6 py-4 font-medium text-gray-800">{item.username}</td>
//                   <td className={`px-6 py-4 font-semibold ${getScoreColor(item.score)}`}>
//                     {item.score}
//                   </td>
//                   <td className="px-6 py-4">
//                     {(() => {
//                       const badge = getRatingBadge(item.score);
//                       return (
//                         <span
//                           className={`inline-flex items-center px-3 py-1 text-sm font-medium rounded-full ${badge.bg} ${badge.textColor}`}
//                         >
//                           {badge.text}
//                         </span>
//                       );
//                     })()}
//                   </td>
//                   <td className="px-6 py-4 text-gray-600">{item.date}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Chart */}
//       {history.length > 0 && (
//         <div className="mt-10 bg-white shadow-md rounded-md p-4">
//           <h3 className="text-lg font-semibold mb-4 text-blue-600">Score Progression Chart</h3>
//           <ResponsiveContainer width="100%" height={300}>
//             <LineChart data={chartData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="generation" />
//               <YAxis domain={[300, 850]} />
//               <Tooltip
//                 content={({ active, payload }) => {
//                   if (active && payload && payload.length) {
//                     const { generation, score, username, date } = payload[0].payload;
//                     return (
//                       <div className="bg-white border border-gray-300 rounded-md p-2 shadow-sm text-sm">
//                         <p><strong>{generation}</strong></p>
//                         <p>User: {username}</p>
//                         <p>Score: {score}</p>
//                         <p>Date: {date}</p>
//                       </div>
//                     );
//                   }
//                   return null;
//                 }}
//               />
//               <Line
//                 type="monotone"
//                 dataKey="score"
//                 stroke="#4F46E5"
//                 strokeWidth={2}
//                 dot={{ r: 4 }}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CreditHistory;

// import React, { useEffect, useState } from 'react';
// import Cookies from 'js-cookie';
// import { getScoreColor, getRatingBadge } from '../components/ScoreRatingDisplay';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

// const backS = import.meta.env.VITE_BACKEND_SERVER;
// const backP = import.meta.env.VITE_BACK_PORT;

// const CreditHistory = () => {
//   const [history, setHistory] = useState([]);

//   useEffect(() => {
//     const fetchHistory = async () => {
//       const email = Cookies.get('email');
//       const res = await fetch(`http://${backS}:${backP}/credit-history?email=${email}`);
//       const data = await res.json();
//       if (data.success) setHistory(data.history);
//     };

//     fetchHistory();
//   }, []);

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-6">Credit History</h2>

//       {/* Table */}
//       <div className="bg-white shadow-md rounded-md p-4 mb-8">
//         <div className="overflow-x-auto">
//           <table className="min-w-full text-left text-sm">
//             <thead className="text-gray-600 uppercase bg-gray-100 text-xs">
//               <tr>
//                 <th className="py-3 px-6">Account Name</th>
//                 <th className="py-3 px-6">Score</th>
//                 <th className="py-3 px-6">Rating</th>
//                 <th className="py-3 px-6">Date</th>
//               </tr>
//             </thead>
//             <tbody>
//               {history.map((item, idx) => (
//                 <tr key={idx} className="border-b hover:bg-gray-50">
//                   <td className="px-6 py-4 font-medium text-gray-800">{item.accountName}</td>                  
//                   <td className={`px-6 py-4 font-semibold ${getScoreColor(item.score)}`}>
//                     {item.score}
//                   </td>
//                   <td className="px-6 py-4">
//                     {(() => {
//                       const badge = getRatingBadge(item.score);
//                       return (
//                         <span className={`inline-flex items-center px-3 py-1 text-sm font-medium rounded-full ${badge.bg} ${badge.textColor}`}>
//                           {badge.text}
//                         </span>
//                       );
//                     })()}
//                   </td>
//                   <td className="px-6 py-4 text-gray-600">{item.date}</td>
//                 </tr>
//               ))}
//               {history.length === 0 && (
//                 <tr>
//                   <td colSpan="4" className="text-center text-gray-500 py-8">
//                     No credit scores generated yet.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Graph */}
//       {history.length > 0 && (
//         <div className="bg-white shadow-md rounded-md p-4">
//           <h3 className="text-xl font-semibold mb-4">Credit Score Trend</h3>
//           <div className="h-64">
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart data={history}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="date" />
//                 <YAxis domain={['auto', 'auto']} />
//                 <Tooltip />
//                 <Legend />
//                 <Line type="monotone" dataKey="score" stroke="#8884d8" strokeWidth={2} />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CreditHistory;


// src/pages/CreditHistory.jsx

import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { getScoreColor, getRatingBadge } from '../components/ScoreRatingDisplay';

const backS = import.meta.env.VITE_BACKEND_SERVER;
const backP = import.meta.env.VITE_BACK_PORT;

const CreditHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const email = Cookies.get('email');
      try {
        const res = await fetch(`http://${backS}:${backP}/credit-history?email=${email}`);
        const data = await res.json();
        if (data.success) setHistory(data.history);
      } catch (err) {
        console.error('Error fetching credit history:', err);
      }
    };

    fetchHistory();
  }, []);

  const chartData = history.map((item, idx) => ({
    generation: `Gen ${idx + 1}`,
    score: item.score,
    accountName: item.accountName,
    date: item.date
  }));

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Credit History</h2>

      {/* Table */}
      <div className="bg-white shadow-md rounded-md p-4 mb-8">
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
                        <span
                          className={`inline-flex items-center px-3 py-1 text-sm font-medium rounded-full ${badge.bg} ${badge.textColor}`}
                        >
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

      {/* Score Progression Chart */}
      {history.length > 1 && (
        <div className="bg-white shadow-md rounded-md p-4">
          <h3 className="text-lg font-semibold mb-4 text-blue-600">Score Progression Chart</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="generation" />
              <YAxis domain={[300, 850]} />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const { generation, score, accountName, date } = payload[0].payload;
                    return (
                      <div className="bg-white border border-gray-300 rounded-md p-2 shadow-sm text-sm">
                        <p><strong>{generation}</strong></p>
                        <p>Account: {accountName}</p>
                        <p>Score: {score}</p>
                        <p>Date: {date}</p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Line
                type="monotone"
                dataKey="score"
                stroke="#4F46E5"
                strokeWidth={2}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default CreditHistory;
