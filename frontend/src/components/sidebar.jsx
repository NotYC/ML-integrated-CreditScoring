// // final sidebar

// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import Cookies from 'js-cookie';
// import logo from '../assets/logo-removebg-preview.png';
// import home from '../assets/Home.svg';
// import aboutus from '../assets/AboutUs.svg';
// import history from '../assets/History.svg';
// import help from '../assets/Help.svg';
// import bank from '../assets/Bank.svg';
// import logout from '../assets/logout.svg'

// const Sidebar = ({ toggleSidebar }) => {
//   const location = useLocation();
//   const [isExpanded, setIsExpanded] = useState(true);

//   const firstName = Cookies.get('firstname') || 'Your';
//   const lastName = Cookies.get('lastname') || 'Name';
//   const userEmail = Cookies.get('email') || 'yourname@email.com';
//   const userName = `${firstName} ${lastName}`;

//   const getInitials = (name) => {
//     const parts = name.trim().split(' ');
//     if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
//     return parts.map(part => part.charAt(0).toUpperCase()).join('');
//   };

//   const initials = getInitials(userName);

//   const isActive = (path) => {
//     if (path === "/Home") return location.pathname === "/Home" || location.pathname === "/";
//     return location.pathname === path;
//   };

//   const toggleSidebarState = () => {
//     const newState = !isExpanded;
//     setIsExpanded(newState);
//     toggleSidebar(newState); // Pass the state to the parent component (MainLayout)
//   };

//   return (
//     <aside
//       className={`h-screen fixed top-0 left-0 bg-white shadow-lg z-10 overflow-hidden flex flex-col transition-all duration-300 ease-in-out ${
//         isExpanded ? "w-[320px]" : "w-[80px]"
//       }`}
//     >
//       {/* Fixed height container for logo */}
//       <div className={`flex justify-center ${isExpanded ? "p-6 pb-2" : "p-4 pb-2"}`} style={{ height: '110px' }}>
//         <Link to="/Help">
//           <img
//             src={logo}
//             alt="Logo"
//             className={`object-contain transition-all duration-300 ${isExpanded ? "h-24" : "h-12"}`}
//           />
//         </Link>
//       </div>

//       {/* Navigation links with fixed position and height */}
//       <div className="flex-1 flex flex-col" style={{ minHeight: 'calc(100vh - 220px)' }}>
//         <div className={`flex flex-col items-center space-y-2 ${isExpanded ? "px-6" : "px-4"}`}>
//           <SidebarLink to="/Home" text="Home" icon={home} active={isActive("/Home")} expanded={isExpanded} />
//           <SidebarLink to="/mybank" text="My Banks" icon={bank} active={isActive("/mybank")} expanded={isExpanded} />
//           <SidebarLink to="/credit-history" text="Credit History" icon={history} active={isActive("/credit-history")} expanded={isExpanded} />
//           <SidebarLink to="/about-us" text="About Us" icon={aboutus} active={isActive("/about-us")} expanded={isExpanded} />
//           <SidebarLink to="/help" text="Help" icon={help} active={isActive("/help")} expanded={isExpanded} />
//           <SidebarLink to="/SignIn" text="Log Out" icon={logout} active={isActive("/logout")} expanded={isExpanded} />
//         </div>
//       </div>

//       {/* Fixed height container for toggle button and profile */}
//       <div className={`flex flex-col items-center space-y-4 ${isExpanded ? "p-6 pt-2" : "p-4 pt-2"}`} style={{ height: '110px' }}>
//         <button
//           onClick={toggleSidebarState}
//           className="flex items-center justify-center h-10 w-10 text-white bg-blue-500 hover:bg-blue-600 rounded-full transition transform hover:scale-110"
//           title={isExpanded ? "Collapse Sidebar" : "Expand Sidebar"}
//         >
//           {isExpanded ? '«' : '»'}
//         </button>

//         <Link to="/myprofile">
//           {isExpanded ? (
//             <div className="flex items-center space-x-2 cursor-pointer">
//               <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">
//                 {initials}
//               </div>
//               <div>
//                 <div className="font-bold text-sm">{userName}</div>
//                 <div className="text-xs text-gray-500">{userEmail}</div>
//               </div>
//             </div>
//           ) : (
//             <div
//               className="cursor-pointer bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg hover:scale-105 transition"
//               title={`${userName} | ${userEmail}`}
//             >
//               {initials}
//             </div>
//           )}
//         </Link>
//       </div>
//     </aside>
//   );
// };

// const SidebarLink = ({ to, text, icon, active, expanded }) => (
//   <Link to={to} className="w-full">
//     <div
//       className={`flex items-center px-4 py-3 rounded-md font-medium transition-all duration-200 transform hover:scale-[1.03] ${
//         active ? 'bg-blue-500 text-white' : 'text-black hover:text-blue-600 hover:bg-gray-100'
//       }`}
//     >
//       <img src={icon} alt={`${text} icon`} className="w-6 h-6" />
//       {expanded && <span className="ml-4">{text}</span>}
//     </div>
//   </Link>
// );

// export default Sidebar;



import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
import logo from '../assets/logo-removebg-preview.png';
import home from '../assets/Home.svg';
import aboutus from '../assets/AboutUs.svg';
import history from '../assets/History.svg';
import help from '../assets/Help.svg';
import bank from '../assets/Bank.svg';
import logout from '../assets/logout.svg';

const Sidebar = ({ toggleSidebar }) => {
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(true);

  const firstName = Cookies.get('firstname') || 'Your';
  const lastName = Cookies.get('lastname') || 'Name';
  const userEmail = Cookies.get('email') || 'yourname@email.com';
  const userName = `${firstName} ${lastName}`;

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

  const toggleSidebarState = () => {
    const newState = !isExpanded;
    setIsExpanded(newState);
    toggleSidebar(newState); // Pass the state to the parent component (MainLayout)
  };

  const handleLogout = () => {
    // Remove cookies
    Cookies.remove('firstname');
    Cookies.remove('lastname');
    Cookies.remove('email');

    // // Also remove cookies with keys: '#', '##', '###'
    // Cookies.remove('#');
    // Cookies.remove('##');
    // Cookies.remove('###');
  };

  return (
    <aside
      className={`h-screen fixed top-0 left-0 bg-white shadow-lg z-10 overflow-hidden flex flex-col transition-all duration-300 ease-in-out ${
        isExpanded ? "w-[320px]" : "w-[80px]"
      }`}
    >
      {/* Fixed height container for logo */}
      <div className={`flex justify-center ${isExpanded ? "p-6 pb-2" : "p-4 pb-2"}`} style={{ height: '110px' }}>
        <Link to="/Help">
          <img
            src={logo}
            alt="Logo"
            className={`object-contain transition-all duration-300 ${isExpanded ? "h-24" : "h-12"}`}
          />
        </Link>
      </div>

      {/* Navigation links with fixed position and height */}
      <div className="flex-1 flex flex-col" style={{ minHeight: 'calc(100vh - 220px)' }}>
        <div className={`flex flex-col items-center space-y-2 ${isExpanded ? "px-6" : "px-4"}`}>
          <SidebarLink to="/Home" text="Home" icon={home} active={isActive("/Home")} expanded={isExpanded} />
          <SidebarLink to="/mybank" text="My Banks" icon={bank} active={isActive("/mybank")} expanded={isExpanded} />
          <SidebarLink to="/credit-history" text="Credit History" icon={history} active={isActive("/credit-history")} expanded={isExpanded} />
          <SidebarLink to="/about-us" text="About Us" icon={aboutus} active={isActive("/about-us")} expanded={isExpanded} />
          <SidebarLink to="/help" text="Help" icon={help} active={isActive("/help")} expanded={isExpanded} />
          <Link to="/SignIn" className="w-full" onClick={handleLogout}>
            <div
              className={`flex items-center px-4 py-3 rounded-md font-medium transition-all duration-200 transform hover:scale-[1.03] ${
                isActive("/logout") ? 'bg-blue-500 text-white' : 'text-black hover:text-blue-600 hover:bg-gray-100'
              }`}
            >
              <img src={logout} alt="Log Out icon" className="w-6 h-6" />
              {isExpanded && <span className="ml-4">Log Out</span>}
            </div>
          </Link>
        </div>
      </div>

      {/* Fixed height container for toggle button and profile */}
      <div className={`flex flex-col items-center space-y-4 ${isExpanded ? "p-6 pt-2" : "p-4 pt-2"}`} style={{ height: '110px' }}>
        <button
          onClick={toggleSidebarState}
          className="flex items-center justify-center h-10 w-10 text-white bg-blue-500 hover:bg-blue-600 rounded-full transition transform hover:scale-110"
          title={isExpanded ? "Collapse Sidebar" : "Expand Sidebar"}
        >
          {isExpanded ? '«' : '»'}
        </button>

        <Link to="/myprofile">
          {isExpanded ? (
            <div className="flex items-center space-x-2 cursor-pointer">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">
                {initials}
              </div>
              <div>
                <div className="font-bold text-sm">{userName}</div>
                <div className="text-xs text-gray-500">{userEmail}</div>
              </div>
            </div>
          ) : (
            <div
              className="cursor-pointer bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg hover:scale-105 transition"
              title={`${userName} | ${userEmail}`}
            >
              {initials}
            </div>
          )}
        </Link>
      </div>
    </aside>
  );
};

const SidebarLink = ({ to, text, icon, active, expanded }) => (
  <Link to={to} className="w-full">
    <div
      className={`flex items-center px-4 py-3 rounded-md font-medium transition-all duration-200 transform hover:scale-[1.03] ${
        active ? 'bg-blue-500 text-white' : 'text-black hover:text-blue-600 hover:bg-gray-100'
      }`}
    >
      <img src={icon} alt={`${text} icon`} className="w-6 h-6" />
      {expanded && <span className="ml-4">{text}</span>}
    </div>
  </Link>
);

export default Sidebar;

