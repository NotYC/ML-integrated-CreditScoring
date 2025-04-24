// import React from 'react';

// const AboutUs = () => {
//   // Team members data
//   const teamMembers = [
//     {
//       id: 1,
//       name: "Alex Johnson",
//       role: "Project Lead & Full Stack Developer",
//       image: "/api/placeholder/300/300",
//       description: "Alex brings over 8 years of experience in fintech solutions. He oversees the technical architecture and ensures seamless integration between banking APIs and our front-end systems."
//     },
//     {
//       id: 2,
//       name: "Sarah Chen",
//       role: "UI/UX Designer",
//       image: "/api/placeholder/300/300",
//       description: "With a background in behavioral economics and design, Sarah creates intuitive user experiences that make complex financial operations simple and accessible for all users."
//     },
//     {
//       id: 3,
//       name: "Marcus Williams",
//       role: "Backend Developer",
//       image: "/api/placeholder/300/300",
//       description: "Marcus specializes in secure banking infrastructure and transaction systems. He ensures all financial data is handled with the highest levels of security and compliance."
//     },
//     {
//       id: 4,
//       name: "Priya Patel",
//       role: "Financial Analyst",
//       image: "/api/placeholder/300/300",
//       description: "Priya's expertise in financial services helps shape our product features. She works to ensure our platform offers meaningful insights and tools for effective money management."
//     }
//   ];

//   return (
//     <div className="ml-[320px] p-8 bg-gray-50 min-h-screen">
//       <div className="max-w-4xl mx-auto">
//         {/* Project Scope Section */}
//         <section className="mb-12">
//           <h1 className="text-3xl font-bold text-blue-600 mb-6">About Our Banking Platform</h1>
          
//           <div className="bg-white shadow-md rounded-lg p-6 mb-8">
//             <h2 className="text-xl font-semibold text-gray-800 mb-4">Our Mission</h2>
//             <p className="text-gray-700 mb-4">
//               We're dedicated to creating a seamless, secure, and user-friendly banking experience that empowers individuals to take control of their finances. Our platform combines powerful financial tools with intuitive design to make banking accessible for everyone.
//             </p>
//             <p className="text-gray-700">
//               By leveraging the latest in financial technology, we aim to bridge the gap between traditional banking services and the digital needs of today's customers.
//             </p>
//           </div>
          
//           <div className="bg-white shadow-md rounded-lg p-6">
//             <h2 className="text-xl font-semibold text-gray-800 mb-4">Project Scope</h2>
//             <div className="space-y-4">
//               <div>
//                 <h3 className="font-medium text-blue-500">Secure Multi-Bank Integration</h3>
//                 <p className="text-gray-700">Connect and manage multiple bank accounts from various institutions in one secure dashboard.</p>
//               </div>
              
//               <div>
//                 <h3 className="font-medium text-blue-500">Comprehensive Transaction History</h3>
//                 <p className="text-gray-700">View, search, and filter your complete financial history with intelligent categorization and insights.</p>
//               </div>
              
//               <div>
//                 <h3 className="font-medium text-blue-500">Financial Analytics</h3>
//                 <p className="text-gray-700">Gain valuable insights into your spending habits and financial health through intuitive visualizations and reports.</p>
//               </div>
              
//               <div>
//                 <h3 className="font-medium text-blue-500">Secure Authentication</h3>
//                 <p className="text-gray-700">Industry-leading security protocols protect your sensitive financial data at every step.</p>
//               </div>
//             </div>
//           </div>
//         </section>
        
//         {/* Team Section */}
//         <section>
//           <h2 className="text-2xl font-bold text-blue-600 mb-6">Meet Our Team</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {teamMembers.map(member => (
//               <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
//                 <div className="flex flex-col sm:flex-row">
//                   <div className="sm:w-1/3">
//                     <img 
//                       src={member.image} 
//                       alt={member.name}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div className="sm:w-2/3 p-4">
//                     <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
//                     <p className="text-blue-500 text-sm mb-2">{member.role}</p>
//                     <p className="text-gray-600 text-sm">{member.description}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;





// import React from 'react';
// import yuvraj from '../assets/yuvraj.jpg'
// import samarth from '../assets/samarth.jpg'
// import agni from '../assets/agni.jpg'
// import gautam from '../assets/gauta,.jpg'
// import sarab from '../assets/sarab.jpg'

// const AboutUs = () => {
  
//   const teamMembers = [
//     {
//       id: 1,
//       name: "Agnishwar Raychaudhuri",
//       role: "ML Modeler",
//       image: ""
//     },
//     {
//       id: 2,
//       name: "Sarab",
//       role: "Frontend Developer",
//       image: ""
//     },
//     {
//       id: 3,
//       name: "Samarth Tanay",
//       role: "Backend Developer",
//       image: ""
//     },

//     {
//         id: 4,
//         name: "Gautam Sharma",
//         role: "Database Designer",
//         image: ""
//     },
//     {
//         id: 5,
//         name: "Yuvraj Chawla",
//         role: "Backend Developer",
//         image: ""
//     }
//   ];

//   return (
//     <div className="p-6">
//       {/* Project Information */}
//       <section className="mb-8">
//         <h1 className="text-2xl font-bold text-blue-600 mb-4">Scope</h1>
        
//         <div className="bg-white shadow-md rounded-lg p-5">
//           <p className="text-gray-700 mb-4">
//           The Automating Credit Scoring System is an intelligent, end-to-end solution that leverages machine learning to evaluate an individual’s creditworthiness based on financial transactions, income patterns, employment history, and alternative data sources. It automates the entire pipeline—from data collection and preprocessing to model training, validation, and deployment—ensuring accurate and efficient credit assessments. Designed with transparency in mind, the system delivers interpretable credit scores that not only foster user trust but also align with regulatory compliance standards, making it a reliable and future-ready tool for modern financial ecosystems.
       
//           </p>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
//             <div className="bg-blue-100 p-4 rounded-md">
//               <h3 className="font-medium text-blue-600">Multi-Bank Integration</h3>
//               <p className="text-gray-600 text-sm">Connect and manage multiple bank accounts in one dashboard</p>
//             </div>
            
//             <div className="bg-blue-100 p-4 rounded-md">
//               <h3 className="font-medium text-blue-600">Transaction History</h3>
//               <p className="text-gray-600 text-sm">View and search your complete financial history</p>
//             </div>
//           </div>
//         </div>
//       </section>
      
//       {/* Team Section */}
//       <section>
//         <h2 className="text-xl font-bold text-blue-600 mb-4">Meet Our Team</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {teamMembers.map(member => (
//             <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 text-center">
//               <img 
//                 src={member.image} 
//                 alt={member.name}
//                 className="w-24 h-24 rounded-full mx-auto mt-4 object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
//                 <p className="text-blue-500 text-sm">{member.role}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AboutUs;


// about us final

import React from 'react';
import yuvraj from '../assets/yuvraj.jpg';
import samarth from '../assets/samarth.jpg';
import agni from '../assets/agni.jpg';
import gautam from '../assets/gautam.jpg';
import sarab from '../assets/sarab.jpg';

const AboutUs = () => {
  
  const teamMembers = [
    {
      id: 1,
      name: "Agnishwar Raychaudhuri",
      role: "ML Modeler",
      image: agni
    },
    {
      id: 2,
      name: "Sarab",
      role: "Frontend Developer",
      image: sarab
    },
    {
      id: 3,
      name: "Samarth Tanay",
      role: "Backend Developer",
      image: samarth
    },
    {
      id: 4,
      name: "Gautam Sharma",
      role: "Database Designer",
      image: gautam
    },
    {
      id: 5,
      name: "Yuvraj Chawla",
      role: "Backend Developer",
      image: yuvraj
    }
  ];

  return (
    <div className="p-6">
      {/* Project Information */}
      <section className="mb-8">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">Scope</h1>
        
        <div className="bg-white shadow-md rounded-lg p-5">
          <p className="text-gray-700 mb-4">
            The Automating Credit Scoring System is an intelligent, end-to-end solution that leverages machine learning to evaluate an individual’s creditworthiness based on financial transactions, income patterns, employment history, and alternative data sources. It automates the entire pipeline—from data collection and preprocessing to model training, validation, and deployment—ensuring accurate and efficient credit assessments. Designed with transparency in mind, the system delivers interpretable credit scores that not only foster user trust but also align with regulatory compliance standards, making it a reliable and future-ready tool for modern financial ecosystems.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-blue-100 p-4 rounded-md">
              <h3 className="font-medium text-blue-600">Multi-Bank Integration</h3>
              <p className="text-gray-600 text-sm">Connect and manage multiple bank accounts in one dashboard</p>
            </div>
            
            <div className="bg-blue-100 p-4 rounded-md">
              <h3 className="font-medium text-blue-600">Transaction History</h3>
              <p className="text-gray-600 text-sm">View and search your complete financial history</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section>
        <h2 className="text-xl font-bold text-blue-600 mb-4">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {teamMembers.map(member => (
            <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 text-center">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mt-4 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                <p className="text-blue-500 text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
