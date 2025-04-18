{
    _id: ObjectId("..."),
    bank_id: ObjectId("..."),       // foreign key to bank_accounts._id
    user_id: ObjectId("..."),       // redundant but useful for direct lookup
    input: {
      Age: 30,
      Marital_Status: "Married",
      Employment_Status: "Employed",
      Education_Level: "Postgraduate",
      Income: 75000,
      Number_of_Dependents: 2,
      Credit_Utilization_Ratio: 0.25,
      Missed_Payments_90days: 0,
      Total_Credit_Accounts: 5,
      Debt_to_Income_Ratio: 0.18,
      Length_of_Credit_History: 6.2,
      Bankruptcies: 0
    },
    score: 770,
    rating: "Very Good",
    timestamp: ISODate("2025-04-19T14:30:00Z")
  }
  