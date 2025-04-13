import React from 'react';
import instagramLogo from '../assets/instagram.svg';
import githubLogo from '../assets/github.svg';
import linkedinLogo from '../assets/linkedin.svg';
import jiralogo from '../assets/jira.svg'

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Social Media Links - Spaced evenly */}
        <div className="flex space-x-12 mb-4">
          {/* <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagramLogo} alt="Instagram" className="w-8 h-8" />
          </a> */}
          <a href="https://agnishwarraychaudhuri.atlassian.net/jira/software/projects/MICS/summary?atlOrigin=eyJpIjoiYWI0MTY2OGVkYjFhNDUwYWE5Yjc3MmRiODE2ZTg4ZDEiLCJwIjoiaiJ9" target="_blank" rel="noopener noreferrer">
            <img src={jiralogo} alt="Jira Board" className="w-8 h-8" />
          </a>
          <a href="https://github.com/NotYC/ML-integrated-CreditScoring" target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} alt="GitHub" className="w-8 h-8" />
          </a>
          {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} alt="LinkedIn" className="w-8 h-8" />
          </a> */}
        </div>

        {/* All Rights Reserved Text */}
        <div className="text-center text-sm italic">
          <p>© {new Date().getFullYear()},  Know your credit score. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;