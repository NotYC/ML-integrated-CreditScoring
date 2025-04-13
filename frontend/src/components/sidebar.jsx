

// static sidebar with padding
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Sidebar = () => {
//   return (
//     <aside className="w-[320px] h-screen bg-white text-gray-800 p-6 flex flex-col justify-between shadow-lg overflow-hidden fixed top-0 left-0 z-10">
//       {/* Navigation */}
//       <div className="space-y-5 pt-10">
//         <Link to="/Home"><SidebarButton text="Home" /></Link>
//         <SidebarButton text="My Banks" />
//         <SidebarButton text="Transaction History" />
//         <SidebarButton text="About Us" />
//         <Link to="/help"><SidebarButton text="Help" /></Link>
//       </div>

//       {/* Credit Card Preview + User Info */}
//       <div className="space-y-6 pb-4">
//         <div className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg p-4 shadow">
//           <div className="text-sm mb-4 font-medium">YOUR BANK</div>
//           <div className="text-xl font-bold tracking-widest mb-2">XXXX XXXX XXXX XXXX</div>
//           <div className="text-xs flex justify-between">
//             <div>VALID FROM<br />MM/YY</div>
//             <div>VALID TO<br />MM/YY</div>
//           </div>
//           <div className="mt-2 text-xs">ACCOUNT HOLDER'S NAME</div>
//         </div>

//         <div className="flex items-center space-x-2">
//           <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">X</div>
//           <div>
//             <div className="font-bold text-sm">Your Name</div>
//             <div className="text-xs text-gray-500">yourname@email.com</div>
//           </div>
//         </div>
//       </div>
//     </aside>
//   );
// };

// const SidebarButton = ({ text }) => (
//   <button className="w-full text-left px-4 py-3 rounded-md bg-blue-500 text-white font-medium transition-all duration-200 transform hover:bg-blue-700 hover:scale-[1.03]">
//     {text}
//   </button>
// );

// export default Sidebar;




// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';

// const Sidebar = () => {
//   const location = useLocation();
//   const isActive = (path) => location.pathname === path;

//   return (
//     <aside className="w-[320px] h-screen fixed top-0 left-0 bg-white shadow-lg p-6 z-10 overflow-hidden flex flex-col justify-between">
//       {/* Navigation */}
//       <div className="flex flex-col space-y-2 mt-40">
//         <Link to="/Home" className="w-full">
//           <SidebarButton text="Home" active={isActive("/Home")} />
//         </Link>
//         <Link to="/my-banks" className="w-full">
//           <SidebarButton text="My Banks" active={isActive("/my-banks")} />
//         </Link>
//         <Link to="/transaction-history" className="w-full">
//           <SidebarButton text="Transaction History" active={isActive("/transaction-history")} />
//         </Link>
//         <Link to="/about-us" className="w-full">
//           <SidebarButton text="About Us" active={isActive("/about-us")} />
//         </Link>
//         {/* <Link to="/contact-us" className="w-full">
//           <SidebarButton text="Contact Us" active={isActive("/contact-us")} />
//         </Link> */}
//         <Link to="/help" className="w-full">
//           <SidebarButton text="Help" active={isActive("/help")} />
//         </Link>
//       </div>
//       {/* Credit Card Preview + User Info */}
//       <div className="space-y-6 mb-8">
//         <div className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg p-4 shadow">
//           <div className="text-sm mb-4 font-medium">YOUR BANK</div>
//           <div className="text-xl font-bold tracking-widest mb-2">XXXX XXXX XXXX XXXX</div>
//           <div className="text-xs flex justify-between">
//             <div>VALID FROM<br />MM/YY</div>
//             <div>VALID TO<br />MM/YY</div>
//           </div>
//           <div className="mt-2 text-xs">ACCOUNT HOLDER'S NAME</div>
//         </div>
//         <div className="flex items-center space-x-2">
//           <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">X</div>
//           <div>
//             <div className="font-bold text-sm">Your Name</div>
//             <div className="text-xs text-gray-500">yourname@email.com</div>
//           </div>
//         </div>
//       </div>
//     </aside>
//   );
// };

// const SidebarButton = ({ text, active }) => (
//   <div className={`w-full px-4 py-3 rounded-md font-medium transition-all duration-200 transform hover:scale-[1.03] ${
//     active
//       ? 'bg-blue-500 text-white'
//       : 'text-black hover:text-blue-600'
//   }`}>
//     {text}
//   </div>
// );

// export default Sidebar;
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo-removebg-preview.png'; // adjust based on actual location

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/Home") {
      return location.pathname === "/Home" || location.pathname === "/";
    }
    return location.pathname === path;
  };

  return (
    <aside className="w-[320px] h-screen fixed top-0 left-0 bg-white shadow-lg p-6 z-10 overflow-hidden flex flex-col justify-between">
      {/* Logo + Navigation */}
      <div>
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <img
            src={logo}
            alt="Logo"
            className="h-24 w-auto object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Navigation */}
        <div className="flex flex-col space-y-2">
          <Link to="/Home" className="w-full">
            <SidebarButton text="Home" active={isActive("/Home")} />
          </Link>
          <Link to="/my-banks" className="w-full">
            <SidebarButton text="My Banks" active={isActive("/my-banks")} />
          </Link>
          <Link to="/transaction-history" className="w-full">
            <SidebarButton text="Transaction History" active={isActive("/transaction-history")} />
          </Link>
          <Link to="/about-us" className="w-full">
            <SidebarButton text="About Us" active={isActive("/about-us")} />
          </Link>
          <Link to="/help" className="w-full">
            <SidebarButton text="Help" active={isActive("/help")} />
          </Link>
        </div>
      </div>

      {/* Credit Card + User Info */}
      <div className="space-y-6 mb-8">
        <div className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="text-sm mb-4 font-medium">YOUR BANK</div>
          <div className="text-xl font-bold tracking-widest mb-2">XXXX XXXX XXXX XXXX</div>
          <div className="text-xs flex justify-between">
            <div>VALID FROM<br />MM/YY</div>
            <div>VALID TO<br />MM/YY</div>
          </div>
          <div className="mt-2 text-xs">ACCOUNT HOLDER'S NAME</div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">X</div>
          <div>
            <div className="font-bold text-sm">Your Name</div>
            <div className="text-xs text-gray-500">yourname@email.com</div>
          </div>
        </div>
      </div>
    </aside>
  );
};

const SidebarButton = ({ text, active }) => (
  <div
    className={`w-full px-4 py-3 rounded-md font-medium transition-all duration-200 transform hover:scale-[1.03] ${
      active ? 'bg-blue-500 text-white' : 'text-black hover:text-blue-600'
    }`}
  >
    {text}
  </div>
);

export default Sidebar;

