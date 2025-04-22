// src/pages/dashboard/Dashboard.jsx
import React from 'react';
import Sidebar from '../components/sidebar';  // Import Sidebar
import Home from '../pages/Home';  // Import Home

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-800">
      {/* Sidebar is rendered only once here */}
      <Sidebar />

      {/* Main Content */}
      <main className="min-h-screen flex-1 p-8 overflow-y-auto">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <Home /> {/* Home component content */}
        <Help />
      </main>
    </div>
  );
};

export default Dashboard;



