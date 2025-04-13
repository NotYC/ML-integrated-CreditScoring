import React, { useState } from 'react';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    marital_status: '',
    profession: '',
    education: '',
    work_experience: '', // dummy
    income: '',
    dependents: '',
    credit_util: '',
    missed_payments: '',
    total_accounts: '',
    dti: '',
    credit_history: '',
    bankruptcies: ''
  });

  const [score, setScore] = useState(null);
  const [rating, setRating] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleGenerate = async () => {
    const { name, work_experience, ...payload } = formData; // omit dummy fields

    try {
      const res = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await res.json();
      if (result.score) {
        setScore(result.score);
        setRating(result.rating);
      }
    } catch (err) {
      console.error('Error:', err);
    }
  };

  return (
    <main className="flex-1 p-8 space-y-8 bg-white text-black">
      {/* Personal Info */}
      <div className="bg-white rounded shadow p-6">
        <h2 className="font-bold text-lg mb-4">Personal Info</h2>
        <div className="space-y-4">
          <input name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" className="w-full p-2 border rounded text-black" />
          <input name="age" value={formData.age} onChange={handleChange} placeholder="Enter your age" className="w-full p-2 border rounded text-black" />
          <input name="marital_status" value={formData.marital_status} onChange={handleChange} placeholder="Enter your marital status" className="w-full p-2 border rounded text-black" />
        </div>
      </div>

      {/* Professional Info */}
      <div className="bg-white rounded shadow p-6">
        <h2 className="font-bold text-lg mb-4">Professional Info</h2>
        <div className="space-y-4">
          <input name="profession" value={formData.profession} onChange={handleChange} placeholder="Enter your profession" className="w-full p-2 border rounded text-black" />
          <input name="education" value={formData.education} onChange={handleChange} placeholder="Enter your education level" className="w-full p-2 border rounded text-black" />
          <input name="work_experience" value={formData.work_experience} onChange={handleChange} placeholder="Enter your work experience" className="w-full p-2 border rounded text-black" />
        </div>
      </div>

      {/* Asset Info */}
      <div className="bg-white rounded shadow p-6">
        <h2 className="font-bold text-lg mb-4">Asset Info</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="income" value={formData.income} onChange={handleChange} placeholder="Enter your income" className="w-full p-2 border rounded text-black" />
          <input name="dependents" value={formData.dependents} onChange={handleChange} placeholder="Number of dependents" className="w-full p-2 border rounded text-black" />
          <input name="credit_util" value={formData.credit_util} onChange={handleChange} placeholder="Credit utilization ratio" className="w-full p-2 border rounded text-black" />
          <input name="missed_payments" value={formData.missed_payments} onChange={handleChange} placeholder="Missed payments (90 days)" className="w-full p-2 border rounded text-black" />
          <input name="total_accounts" value={formData.total_accounts} onChange={handleChange} placeholder="Total credit accounts" className="w-full p-2 border rounded text-black" />
          <input name="dti" value={formData.dti} onChange={handleChange} placeholder="Debt to income ratio" className="w-full p-2 border rounded text-black" />
          <input name="credit_history" value={formData.credit_history} onChange={handleChange} placeholder="Length of credit history" className="w-full p-2 border rounded text-black" />
          <input name="bankruptcies" value={formData.bankruptcies} onChange={handleChange} placeholder="Bankruptcies" className="w-full p-2 border rounded text-black" />
        </div>
      </div>

      {/* Score Display */}
      {score && (
        <div className="flex flex-col items-center bg-white p-6 rounded shadow text-black">
          <div className="text-6xl font-bold">{score}</div>
          <div className="text-xl mt-2 font-semibold">Rating: {rating}</div>
        </div>
      )}

      {/* Buttons */}
      <div className="flex gap-4">
        <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded text-black" onClick={() => setFormData({ name: '', age: '', marital_status: '', profession: '', education: '', work_experience: '', income: '', dependents: '', credit_util: '', missed_payments: '', total_accounts: '', dti: '', credit_history: '', bankruptcies: '' })}>
          Reset
        </button>
        <button className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded" onClick={handleGenerate}>
          Generate
        </button>
      </div>
    </main>
  );
};

export default Home;
