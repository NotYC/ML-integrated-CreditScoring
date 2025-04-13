import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-[320px] bg-white text-gray-800 p-6 flex flex-col justify-between shadow-lg h-auto">
      {/* Navigation */}
      <div className="space-y-4">
        <Link to="/Home"><SidebarButton text="Home" /></Link>
        <SidebarButton text="My Banks" />
        <SidebarButton text="Transaction History" />
        <SidebarButton text="About Us" />
        {/* <SidebarButton text="Contact Us" /> */}
        <Link to="/help"><SidebarButton text="Help" /></Link>
      </div>

      {/* Credit Card Preview + User Info */}
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg p-4 shadow">
          <div className="text-sm mb-4 font-medium">YOUR BANK</div>
          <div className="text-xl font-bold tracking-widest mb-2">XXXX XXXX XXXX XXXX</div>
          <div className="text-xs flex justify-between">
            <div>VALID FROM<br />MM/YY</div>
            <div>VALID TO<br />MM/YY</div>
          </div>
          <div className="mt-2 text-xs">ACCOUNT HOLDER'S NAME</div>
        </div>

        {/* User Info */}
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

const SidebarButton = ({ text }) => (
  <button className="w-full text-left px-4 py-3 rounded-md bg-blue-500 text-white font-medium transition-all duration-200 transform hover:bg-blue-700 hover:scale-[1.03]">
    {text}
  </button>
);

export default Sidebar;
