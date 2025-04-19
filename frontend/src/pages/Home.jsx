import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { sendDataToBackend } from "../../../Backend_STR/config/model2server.js";

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

  const [score, setScore] = useState(300);
  const [rating, setRating] = useState('Poor');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleGenerate = async () => {
    const { name, work_experience, ...payload } = formData;
    console.log("Sending to backend:", payload);

    const result = await sendDataToBackend(payload);
    if (result?.score) {
      setScore(result.score);
      setRating(result.rating);
    }

    await fetch('http://localhost:5000/api/credit-history', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ score: result.score }),
    });
  };

  const resetForm = () => {
    setFormData({
      name: '', age: '', marital_status: '', profession: '', education: '', work_experience: '',
      income: '', dependents: '', credit_util: '', missed_payments: '',
      total_accounts: '', dti: '', credit_history: '', bankruptcies: ''
    });
    setScore(300);
    setRating('Poor');
  };

  return (
    <main className="flex-1 p-8 space-y-8 bg-white text-black">
      {/* Personal Information Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="font-bold text-lg mb-4">Personal Info</h2>
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your Name"
            className="w-full p-3 border rounded-lg text-black focus:ring-2 focus:ring-blue-500"
          />
          <input
            type = "number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter your Age"
            className="w-full p-3 border rounded-lg text-black focus:ring-2 focus:ring-blue-500"
          />
          <select
            name="marital_status"
            value={formData.marital_status}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg text-black focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Marital Status</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Divorced">Divorced</option>
          </select>
        </div>
      </div>

      {/* Professional Information Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="font-bold text-lg mb-4">Professional Info</h2>
        <div className="space-y-4">
          <input
            name="profession"
            value={formData.profession}
            onChange={handleChange}
            placeholder="Enter your Profession"
            className="w-full p-3 border rounded-lg text-black focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="education"
            value={formData.education}
            onChange={handleChange}
            placeholder="Enter your Education Level"
            className="w-full p-3 border rounded-lg text-black focus:ring-2 focus:ring-blue-500"
          />
          <select
              name="employment_status"
              value={formData.employment_status}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg text-black focus:ring-2 focus:ring-blue-500"
            >
            <option value="">Select Employment Status</option>
            <option value="Unemployed">Unemployed</option>
            <option value="Self-Employed">Self-Employed</option>
            <option value="Employed">Employed</option>
            <option value="Retired">Retired</option>
          </select>
          <input
            name="work_experience"
            value={formData.work_experience}
            onChange={handleChange}
            placeholder="Enter your Work Experience"
            className="w-full p-3 border rounded-lg text-black focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Asset Information Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="font-bold text-lg mb-4">Asset Info</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { name: 'income', placeholder: 'Enter your Income' },
            { name: 'dependents', placeholder: 'Number of Dependents' },
            { name: 'credit_util', placeholder: 'Credit Utilization Ratio' },
            { name: 'missed_payments', placeholder: 'Missed Payments (90 days)' },
            { name: 'total_accounts', placeholder: 'Total Credit Accounts' },
            { name: 'dti', placeholder: 'Debt to Income Ratio' },
            { name: 'credit_history', placeholder: 'Length of Credit History' },
            { name: 'bankruptcies', placeholder: 'Bankruptcies' },
          ].map((field) => (
            <input
              key={field.name}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              className="w-full p-3 border rounded-lg text-black focus:ring-2 focus:ring-blue-500"
            />
          ))}
        </div>
      </div>

      {/* Credit Score Display Section */}
      <div className="flex flex-col md:flex-row gap-6 items-stretch">
        {/* Speedometer Card */}
        <div className="flex-1 bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
          <div className="relative w-full max-w-xs h-52 mb-2">
            <svg className="w-full h-full" viewBox="0 0 200 120">
              <path
                d="M 20 100 A 80 80 0 0 1 180 100"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="14"
                strokeLinecap="round"
              />
              <path
                d="M 20 100 A 80 80 0 0 1 180 100"
                fill="none"
                stroke="url(#speedometerGradient)"
                strokeWidth="14"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="speedometerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ef4444" />
                  <stop offset="50%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>
              <circle cx="100" cy="100" r="6" fill="#1f2937" />
              <motion.path
                d="M 100 100 L 100 30"
                stroke="#1f2937"
                strokeWidth="3"
                strokeLinecap="butt"
                initial={{ rotate: -90 }}
                animate={{
                  rotate: -90 + ((score - 300) / 550) * 180,
                  transition: { 
                    type: 'spring', 
                    damping: 15,
                    stiffness: 120,
                    mass: 0.5
                  }
                }}
                transformOrigin="100 100"
                style={{ 
                  originX: '100px',
                  originY: '100px'
                }}
              />
            </svg>
            <div className="absolute bottom-0 left-0 right-0 flex justify-between px-6 text-xs text-gray-600">
              <span>300</span>
              <span>850</span>
            </div>
          </div>
          <motion.div 
            className="text-center mt-2"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring' }}
          >
            <div className="text-5xl font-bold text-gray-900">{score}</div>
            <div className={`text-xl font-semibold mt-2 px-4 py-1 rounded-full inline-block ${
              rating === "Exceptional" ? "bg-green-100 text-green-800" :
              rating === "Very Good"   ? "bg-green-100 text-green-700" :
              rating === "Good"        ? "bg-green-100 text-green-600" :
              rating === "Fair"        ? "bg-yellow-100 text-yellow-800" :
                                        "bg-red-100 text-red-800"
            }`}>
              {rating}
            </div>
          </motion.div>
        </div>

        {/* Credit Information Panel */}
        <div className="flex-1 bg-white rounded-xl shadow-lg p-6">
          <h3 className="font-bold text-lg mb-3">Credit Score Ranges</h3>
          <div className="space-y-3">
            {[
              { range: '800-850', label: 'Exceptional', color: 'bg-green-600' },
              { range: '740-799', label: 'Very Good', color: 'bg-green-500' },
              { range: '670-739', label: 'Good', color: 'bg-green-400' },
              { range: '580-669', label: 'Fair', color: 'bg-yellow-500' },
              { range: '300-579', label: 'Poor', color: 'bg-red-500' },
            ].map((item) => (
              <div key={item.label} className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${item.color} mr-2`}></div>
                <span className="font-medium">{item.range}:</span>
                <span className="ml-2 text-gray-700">{item.label}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t border-gray-200">
            <h4 className="font-semibold mb-2">Improvement Tips</h4>
            <ul className="text-sm space-y-1 text-gray-600">
              <li>• Pay bills on time</li>
              <li>• Keep credit utilization below 30%</li>
              <li>• Maintain a mix of credit types</li>
              <li>• Limit new credit applications</li>
              <li>• Keep old credit accounts open </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-4 mt-6 md:flex-row">
        <button
          className="bg-gray-200 hover:bg-gray-300 px-6 py-3 rounded-lg text-white transition-colors duration-200"
          onClick={resetForm}
        >
          Reset Form
        </button>
        <button
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white transition-colors duration-200"
          onClick={handleGenerate}
        >
          Calculate Score
        </button>
      </div>
    </main>
  );
};

export default Home;