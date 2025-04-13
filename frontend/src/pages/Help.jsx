import React from 'react'

const Help = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-8">
      <div className="bg-white p-8 rounded shadow w-full h-full">
        
        <u><h1 className="text-2xl font-bold mb-6">Understanding Your Credit Score</h1></u>

        <h2 className="text-xl font-bold mb-4">What is a Credit Score?</h2>
        <p className="mb-6">
          A credit score is a prediction of your credit behavior, such as how likely you are to pay a loan back on time, based on information from your credit reports. 
          Companies use credit scores to make decisions on whether to offer you a mortgage, credit card, auto loan, and other credit products, 
          as well as for tenant screening and insurance. They are also used to determine the interest rate and credit limit you receive.
        </p>

        <div className="space-y-4 text-sm mb-8">
          <p><strong className="text-green-700">Exceptional (800–850):</strong> You have an outstanding credit profile. Lenders see you as highly trustworthy. You’ll likely receive the best interest rates, quickest loan approvals, and highest credit limits.</p>

          <p><strong className="text-green-600">Very Good (740–799):</strong> You’re considered a very low-risk borrower. You’ll generally qualify for competitive interest rates and favorable loan terms, though maybe not the absolute best.</p>

          <p><strong className="text-green-500">Good (670–739):</strong> This is the average credit range. You’ll typically be approved for most loans and credit cards, though rates may not be as attractive as those with higher scores.</p>

          <p><strong className="text-yellow-500">Fair (580–669):</strong> You’re seen as a higher-risk borrower. You might still qualify for loans or credit cards, but with higher interest rates or lower credit limits. Some applications could be denied.</p>

          <p><strong className="text-red-500">Poor (300–579):</strong> Your credit score is in the lowest range. This typically means you've missed payments, defaulted on loans, or have a very limited credit history. Approval for most loans or credit cards is difficult, and interest rates will be high if you’re approved.</p>
        </div>

        <h2 className="text-xl font-bold mb-4">What Factors Impact My Credit Score?</h2>
        <div className="text-sm space-y-2">
          <p>Factors typically considered in your credit score include:</p>
          <ul className="list-disc list-inside">
            <li>Your bill-paying history</li>
            <li>Your current unpaid debt</li>
            <li>The number and type of loan accounts you have</li>
            <li>How long you have had your loan accounts open</li>
            <li>How much of your available credit you’re using</li>
            <li>New applications for credit</li>
            <li>Whether you’ve had a debt sent to collection, a foreclosure, or a bankruptcy, and how long ago</li>
          </ul>
        </div>
        
        <h2 className="text-xl font-bold mb-4">Visuals & Examples</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <img src="../assets/credit1.png" alt="Credit 1" className="w-80 h-48 object- rounded shadow" />
          <img src="./assets/credit2.png" alt="Credit 2" className="w-80 h-48 object-cover rounded shadow" />
          <img src="./assets/credit3.png" alt="Credit 3" className="w-80 h-48 object-cover rounded shadow" />
        </div>

      </div>
    </div>
  )
}

export default Help
