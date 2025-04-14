import { useEffect, useState } from "react";
import BankSwitcher from "../components/BankSwitcher";
import TransactionTable from "../components/TransactionTable";

const TransactionHistory = () => {
  const [selectedBank, setSelectedBank] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [banks, setBanks] = useState([]);
  const userId = localStorage.getItem("userId"); // Assuming it's stored on login

  useEffect(() => {
    const fetchBanks = async () => {
      try {
        const res = await fetch(`/api/banks/${userId}`);
        if (res.ok) {
          const data = await res.json();
          setBanks(data);
          if (data.length > 0) setSelectedBank(data[0]);
        } else {
          console.error("Failed to fetch banks");
        }
      } catch (error) {
        console.error("Error fetching banks:", error);
      }
    };
    fetchBanks();
  }, [userId]);

  useEffect(() => {
    const fetchTransactions = async () => {
      if (!selectedBank) return;
      try {
        const res = await fetch(`/api/transactions/${userId}?bankId=${selectedBank._id}`);
        if (res.ok) {
          const data = await res.json();
          setTransactions(data);
        } else {
          console.error("Failed to fetch transactions");
        }
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };
    fetchTransactions();
  }, [selectedBank, userId]);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Transaction History</h1>
        <BankSwitcher banks={banks} selectedBank={selectedBank} setSelectedBank={setSelectedBank} />
      </div>
      <TransactionTable transactions={transactions} />
    </div>
  );
};

export default TransactionHistory;
