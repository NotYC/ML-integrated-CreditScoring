// import React from 'react';
// import Sidebar from '../components/sidebar';
// import { Outlet } from 'react-router-dom';

// const MainLayout = () => {
//   return (
//     <div className="flex h-screen">
//       <Sidebar />
//       <main className="flex-1 overflow-y-auto">
//         <Outlet />
//       </main>
//     </div>
//   );
// };

// export default MainLayout;

// src/layout/MainLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar'; // Assuming you have one

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
        <footer className="bg-white text-center py-4 shadow">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} My Credit App. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default MainLayout;
