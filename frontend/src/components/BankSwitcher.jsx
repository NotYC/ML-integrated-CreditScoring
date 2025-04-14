const BankSwitcher = ({ banks, selectedBank, setSelectedBank }) => {
    return (
      <select
        className="p-2 border rounded"
        value={selectedBank?._id || ""}
        onChange={(e) => {
          const bank = banks.find((b) => b._id === e.target.value);
          setSelectedBank(bank);
        }}
      >
        {banks.map((bank) => (
          <option key={bank._id} value={bank._id}>
            {bank.name}
          </option>
        ))}
      </select>
    );
  };
  
  export default BankSwitcher;
  