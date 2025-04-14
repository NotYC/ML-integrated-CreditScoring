import React, { useState } from 'react';
import { sendDataToBackend } from "..\\..\\..\\Backend_STR\\config\\model2server.js";

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    marital_status: '',
    profession: '',
    education: '',
    work_experience: '',
    income: '',
    dependents: '',
    credit_util: '',
    missed_payments: '',
    total_accounts: '',
    dti: '',
    credit_history: '',
    bankruptcies: ''
  });

  const [score, setScore] = useState(350); // default score
  const [rating, setRating] = useState('Poor'); // default rating

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleGenerate = async () => {
    const { name, work_experience, ...payload } = formData; // exclude dummy fields
    console.log("🔁 Sending to backend:", payload);

    const result = await sendDataToBackend(payload);
    if (result?.score) {
      setScore(result.score);
      setRating(result.rating);
    }
  };

  return (
    <main className="flex-1 p-8 space-y-8 bg-gray-100 text-black">
      
      <h1>Welcome xxx!</h1>
      fill the details to get your credit score!<br></br>
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

      {/* Credit Score Section - Always visible */}
      <div className="flex flex-col md:flex-row gap-6 items-center">
        {/* Score Display */}
        <div className="flex-1 flex flex-col items-center bg-white p-6 rounded shadow text-black">
          <div className="text-6xl font-bold">{score}</div>
          <div className={`text-xl mt-2 font-semibold ${
            rating === "Exceptional" ? "text-green-700" :
            rating === "Very Good"   ? "text-green-600" :
            rating === "Good"        ? "text-green-500" :
            rating === "Fair"        ? "text-yellow-500" :
                                       "text-red-500"
          }`}>
            Rating: {rating}
          </div>
          <div className="w-full h-4 mt-4 bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 rounded-full relative">
            <div
              className="absolute top-0 w-1 h-4 bg-black"
              style={{ left: `${((score - 300) / 550) * 100}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-sm w-full mt-2 px-1">
            <span>300</span>
            <span>850</span>
          </div>
        </div>

        {/* Score Info */}
        <div className="flex-1 bg-white p-6 rounded shadow text-sm text-black">
          <h3 className="font-bold mb-2">Understand your credit score</h3>
          <ul className="space-y-1">
            <li><span className="text-green-700 font-semibold">Exceptional:</span> 800–850</li>
            <li><span className="text-green-600 font-semibold">Very Good:</span> 740–799</li>
            <li><span className="text-green-500 font-semibold">Good:</span> 670–739</li>
            <li><span className="text-yellow-500 font-semibold">Fair:</span> 580–669</li>
            <li><span className="text-red-500 font-semibold">Poor:</span> 300–579</li>
          </ul>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-4 mt-6 md:flex-row">
        <button
          className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded text-black"
          onClick={() => {
            setFormData({
              name: '', age: '', marital_status: '', profession: '', education: '', work_experience: '',
              income: '', dependents: '', credit_util: '', missed_payments: '',
              total_accounts: '', dti: '', credit_history: '', bankruptcies: ''
            });
            setScore(350); // reset to default
            setRating('Poor'); // reset to default
          }}
        >
          Reset
        </button>
        <button
          className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded"
          onClick={handleGenerate}
        >
          Generate
        </button>
      </div>
    </main>
  );
};

export default Home;
