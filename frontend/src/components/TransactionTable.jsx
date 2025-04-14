const TransactionTable = ({ transactions }) => {
    return (
      <div className="bg-white rounded-xl shadow p-4">
        <div className="grid grid-cols-6 font-semibold text-gray-700 mb-4">
          <div>Transaction</div>
          <div>Amount</div>
          <div>Status</div>
          <div>Date</div>
          <div>Channel</div>
          <div>Category</div>
        </div>
        {transactions.map((tx, i) => (
          <div key={i} className="grid grid-cols-6 text-sm py-2 border-t">
            <div>{tx.name}</div>
            <div className={tx.amount < 0 ? "text-red-500" : "text-green-600"}>
              {tx.amount < 0 ? `-$${Math.abs(tx.amount)}` : `$${tx.amount}`}
            </div>
            <div>
              <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full">Success</span>
            </div>
            <div>{new Date(tx.date).toLocaleString()}</div>
            <div>{tx.channel}</div>
            <div>
              <span className="px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-600">
                {tx.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default TransactionTable;
  