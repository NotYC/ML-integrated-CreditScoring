// Sidebar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie'; // <-- Added import
import logo from '../assets/logo-removebg-preview.png';
import home from '../assets/Home.svg';
import aboutus from '../assets/AboutUs.svg';
import history from '../assets/History.svg';
import help from '../assets/Help.svg';
import bank from '../assets/Bank.svg';

const Sidebar = () => {
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(true);

  // Retrieve user info from cookies
  const firstName = Cookies.get('firstname') || 'Your';
  const lastName = Cookies.get('lastname') || 'Name';
  const userEmail = Cookies.get('email') || 'yourname@email.com';
  const userName = `${firstName} ${lastName}`;

  // Function to compute initials from full name
  const getInitials = (name) => {
    const parts = name.trim().split(' ');
    if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
    return parts.map(part => part.charAt(0).toUpperCase()).join('');
  };

  const initials = getInitials(userName);

  const isActive = (path) => {
    if (path === "/Home") return location.pathname === "/Home" || location.pathname === "/";
    return location.pathname === path;
  };

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <aside
      className={`h-screen fixed top-0 left-0 bg-white shadow-lg z-10 overflow-hidden flex flex-col justify-between transition-all duration-300 ease-in-out ${
        isExpanded ? "w-[320px] p-6" : "w-[80px] p-4"
      }`}
    >
      {/* Top Section */}
      <div>
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <Link to="/Help">
            <img
              src={logo}
              alt="Logo"
              className={`object-contain transition-all duration-300 ${isExpanded ? "h-24" : "h-12"}`}
            />
          </Link>
        </div>

        {/* Navigation */}
        <div className="flex flex-col space-y-2">
          <SidebarLink to="/Home" text="Home" icon={home} active={isActive("/Home")} expanded={isExpanded} />
          <SidebarLink to="/mybank" text="My Banks" icon={bank} active={isActive("/mybank")} expanded={isExpanded} />
          <SidebarLink to="/credit-history" text="Credit History" icon={history} active={isActive("/credit-history")} expanded={isExpanded} />
          <SidebarLink to="/about-us" text="About Us" icon={aboutus} active={isActive("/about-us")} expanded={isExpanded} />
          <SidebarLink to="/help" text="Help" icon={help} active={isActive("/help")} expanded={isExpanded} />
          <button
              onClick={toggleSidebar}
              className="flex items-center justify-center h-12 w-12 text-white hover:text-black transition text-xl"
              title={isExpanded ? "Collapse Sidebar" : "Expand Sidebar"}
            >
              {isExpanded ? '«' : '»'}
            </button>

          {/* Toggle Button */}
          <div className="mt-4">
          </div>
        </div>
      </div>

      {/* Bottom Section - Profile Preview */}
      <Link to="/myprofile">
        {isExpanded ? (
          <div className="space-y-6 mb-8 cursor-pointer">
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
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">
                {initials}
              </div>
              <div>
                <div className="font-bold text-sm">{userName}</div>
                <div className="text-xs text-gray-500">{userEmail}</div>
              </div>
            </div>
          </div>
        ) : (
          <div className="mb-4 flex justify-center">
            <div
              className="cursor-pointer bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg hover:scale-105 transition"
              title={`${userName} | ${userEmail}`}
            >
              {initials}
            </div>
          </div>
        )}
      </Link>
    </aside>
  );
};

const SidebarLink = ({ to, text, icon, active, expanded }) => (
  <Link to={to} className="w-full">
    <div
      className={`flex items-center px-4 py-3 rounded-md font-medium transition-all duration-200 transform hover:scale-[1.03] ${
        active ? 'bg-blue-500 text-white' : 'text-black hover:text-blue-600'
      }`}
    >
      <img src={icon} alt={`${text} icon`} className="w-6 h-6" />
      {expanded && <span className="ml-4">{text}</span>}
    </div>
  </Link>
);

export default Sidebar;
