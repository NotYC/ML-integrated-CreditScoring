import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar';
import Footer from '../components/Footer' // Assuming you have one

const MainLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 text-black">
      {/* Sidebar */}
      <Sidebar />

      {/* Page Content */}
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet /> {/* This is where your Dashboard/Home/Help will load */}
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;