import React from 'react';
import CreditCard from '../components/CreditCard'; 
// Adjust path if needed


const MyBank = () => {
  // Example data for two bank accounts (replace with dynamic data if needed)
  const userBankAccounts = [
    {
      id: 1,
      cardNumber: '**** **** **** 6258',
      name: 'John Doe',
      expiry: '10/25',
      cvv: '420',
    },
    {
      id: 2,
      cardNumber: '**** **** **** 8472',
      name: 'Jane Smith',
      expiry: '08/27',
      cvv: '133',
    },
  ];

  return (
    <div className="mybank-page">
      <h1 className="text-2xl text-blue-600 font-bold mb-6">Your Bank Accounts</h1>
      <div className="cards-container grid grid-cols-1 md:grid-cols-3 gap-4">
        {userBankAccounts.map((account) => (
          <div key={account.id} className="card-wrapper">
            <CreditCard {...account} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBank;
