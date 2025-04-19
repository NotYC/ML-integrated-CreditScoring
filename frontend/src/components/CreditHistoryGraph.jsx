// frontend/src/components/CreditHistoryGraph.jsx
import React, { useState } from 'react';
import {
  ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip,
} from 'recharts';

const CreditHistoryGraph = ({ data }) => {
  const [range, setRange] = useState('all');

  // Filter data by range if needed (weeks, months, years)...

  return (
    <div>
      <div className="mb-4">
        <select value={range} onChange={e => setRange(e.target.value)}>
          <option value="all">All time</option>
          <option value="year">Last Year</option>
          <option value="month">Last Month</option>
          <option value="week">Last Week</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis domain={['auto','auto']} />
          <Tooltip />
          <Line type="monotone" dataKey="score" stroke="#8884d8" dot />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CreditHistoryGraph;
