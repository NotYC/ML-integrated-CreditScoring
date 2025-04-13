import React from 'react';

const Home = () => {
  return (
    <main className="flex-1 p-8 space-y-8 bg-white text-black">
      {/* Personal and Professional Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Personal Info */}
        <div className="bg-white rounded shadow p-6">
          <h2 className="font-bold text-lg mb-4">Personal Info</h2>
          <div className="space-y-4">
            <input type="text" placeholder="Enter your name" className="w-full p-2 border rounded text-black" />
            <input type="text" placeholder="Enter your age" className="w-full p-2 border rounded text-black" />
            <input type="text" placeholder="Enter your marital status" className="w-full p-2 border rounded text-black" />
          </div>
        </div>

        {/* Professional Info */}
        <div className="bg-white rounded shadow p-6">
          <h2 className="font-bold text-lg mb-4">Professional Info</h2>
          <div className="space-y-4">
            <input type="text" placeholder="Enter your profession" className="w-full p-2 border rounded text-black" />
            <input type="text" placeholder="Enter your current job years" className="w-full p-2 border rounded text-black" />
            <input type="text" placeholder="Enter your work ex." className="w-full p-2 border rounded text-black" />
          </div>
        </div>
      </div>

      {/* Asset Info */}
      <div className="bg-white rounded shadow p-6">
        <h2 className="font-bold text-lg mb-4">Asset Info</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Enter your income" className="w-full p-2 border rounded text-black" />
          <input type="text" placeholder="Enter your state" className="w-full p-2 border rounded text-black" />
          <input type="text" placeholder="Enter ownership status" className="w-full p-2 border rounded text-black" />
          <input type="text" placeholder="Enter residence years" className="w-full p-2 border rounded text-black" />
          <input type="text" placeholder="Enter Bankruptcies" className="w-full p-2 border rounded text-black" />
        </div>
      </div>

      {/* Credit Score Section */}
      <div className="flex flex-col md:flex-row gap-6 items-center">
        {/* Score Display */}
        <div className="flex-1 flex flex-col items-center bg-white p-6 rounded shadow text-black">
          <div className="text-6xl font-bold">715</div>
          <div className="text-xl mt-2 text-green-600 font-semibold">Rating: Good</div>
          <div className="w-full h-4 mt-4 bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 rounded-full relative">
            <div className="absolute left-[60%] top-0 w-1 h-4 bg-black"></div>
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

        {/* Buttons */}
        <div className="flex flex-col gap-4">
          <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded text-black">Reset</button>
          <button className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded">Generate</button>
        </div>
      </div>
    </main>
  );
};

export default Home;
