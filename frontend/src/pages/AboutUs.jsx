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
              <h3 className="font-medium text-blue-600">Credit History</h3>
              <p className="text-gray-600 text-sm">View and search your complete credit score history</p>
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
