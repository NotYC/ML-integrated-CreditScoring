// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import Sidebar from '../components/sidebar';
// import Footer from '../components/Footer' // Assuming you have one

// const MainLayout = () => {
//   return (
//     <div className="flex min-h-screen bg-gray-100 text-black">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Page Content */}
//       <div className="flex-1 flex flex-col">
//         <main className="flex-1 p-6 overflow-y-auto">
//           <Outlet /> {/* This is where your Dashboard/Home/Help will load */}
//         </main>

//         {/* Footer */}
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default MainLayout;


// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import Sidebar from '../components/sidebar';
// import Footer from '../components/Footer'; // Assuming you have one

// const MainLayout = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 text-black">
//       {/* Sidebar - fixed on the left */}
//       <Sidebar />

//       {/* Main content wrapper with left margin to match Sidebar width */}
//       <div className="ml-[320px] flex flex-col min-h-screen">
//         {/* Page Content */}
//         <main className="flex-1 p-6 overflow-y-auto">
//           <Outlet /> {/* This is where your Dashboard/Home/Help will load */}
//         </main>

//         {/* Footer */}
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default MainLayout;


// import React, { useState } from 'react';
// import { Outlet } from 'react-router-dom';
// import Sidebar from '../components/sidebar';
// import Footer from '../components/Footer'; // Assuming you have one

// const MainLayout = () => {
//   const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

//   // Function to toggle sidebar state from child component
//   const toggleSidebar = (state) => {
//     setIsSidebarExpanded(state);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 text-black flex">
//       {/* Sidebar - fixed on the left */}
//       <Sidebar toggleSidebar={toggleSidebar} />

//       {/* Main content wrapper with dynamic left margin */}
//       <div
//         className={`flex-1 min-h-screen p-6 overflow-y-auto transition-all duration-300 ${
//           isSidebarExpanded ? 'ml-[320px]' : 'ml-[80px]'
//         }`}
//       >
//         {/* Page Content */}
//         <main className="flex-1">
//           <Outlet /> {/* This is where your Dashboard/Home/Help will load */}
//         </main>

//         {/* Footer */}
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default MainLayout;




// final main layout with footer placed at bootom
// import React, { useState } from 'react';
// import { Outlet } from 'react-router-dom';
// import Sidebar from '../components/sidebar';
// import Footer from '../components/Footer'; // Assuming you have one

// const MainLayout = () => {
//   const [isSidebarExpanded, setIsSidebarExpanded] = useState(true); // To track the sidebar state

//   const toggleSidebar = (expanded) => {
//     setIsSidebarExpanded(expanded); // Update sidebar state when it is toggled
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 text-black flex flex-col">
//       {/* Sidebar - fixed on the left */}
//       <Sidebar toggleSidebar={toggleSidebar} isExpanded={isSidebarExpanded} />

//       {/* Main content wrapper with dynamic left margin based on sidebar state */}
//       <div className={`flex-1 flex flex-col ${isSidebarExpanded ? 'ml-[320px]' : 'ml-[80px]'}`}>
//         {/* Page Content */}
//         <main className="flex-1 p-6 overflow-y-auto">
//           <Outlet /> {/* This is where your Dashboard/Home/Help will load */}
//         </main>

//         {/* Footer */}
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default MainLayout;

import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar';
import Footer from '../components/Footer'; // Assuming you have one

const MainLayout = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true); // To track the sidebar state

  const toggleSidebar = (expanded) => {
    setIsSidebarExpanded(expanded); // Update sidebar state when it is toggled
  };

  return (
    <div className="min-h-screen bg-gray-100 text-black flex">
      {/* Sidebar - fixed on the left */}
      <Sidebar toggleSidebar={toggleSidebar} isExpanded={isSidebarExpanded} />

      {/* Main content wrapper with dynamic left margin based on sidebar state */}
      <div className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarExpanded ? 'ml-[320px]' : 'ml-[80px]'}`}>
        {/* Page Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet /> {/* This is where your Dashboard/Home/Help will load */}
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;

