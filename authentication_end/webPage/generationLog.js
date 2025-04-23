const bank = require('../mongoFrame/bankFrame.js');
const User = require('../mongoFrame/userFrame.js')
const generationHistory = require('../mongoFrame/generationHistory.js')

async function logRegisterer(dataLog) {
  const email = dataLog.logEmail;
  const currUser = await User.findOne({email});
    if (!currUser) {
        return { success: false, message: "User not found" };
    }
  const userID = currUser._id;
  const currBank = await bank.findOne({userId: userID, bankName: `${currUser.firstName}'s_account`});

  const newgenerationHistory = new generationHistory({
    income: dataLog.income,
    NoD: dataLog.dependents,
    CUratio: dataLog.credit_util,
    MissPayment: dataLog.missed_payments,
    CrdAcc: dataLog.total_accounts,
    D2Iratio: dataLog.dti,
    lenCH: dataLog.credit_history,
    Bankruptcies: dataLog.bankruptcies,
    bankId: currBank._id,
    score: dataLog.score,
    rating: dataLog.rating
  });

  await newgenerationHistory.save();

  return { success: true, message: "Log saved successfully" };
}

module.exports = logRegisterer;
