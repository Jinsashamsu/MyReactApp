import { useState } from "react";

//factory pattern payment gateway eg
const Credit = ({ amount }: { amount: string }) =>(
    <div>
        <label>
        Amount: <span className="readonly-amount">{amount || "Not Entered"}</span>
      </label>
      <h3>Credit Card Details</h3>
      <input
        type="text"
        placeholder="Enter Credit Card Number"
        className="credit-input"
      />
      <button className="primary">Proceed</button>
    </div>
  );
const UPI = ({ amount }: { amount: string }) => (
    <div>
        <label>
        Amount: <span className="readonly-amount">{amount || "Not Entered"}</span>
      </label>
      <h3>UPI Payment</h3>
      <input
        type="text"
        placeholder="Enter UPI ID"
        className="upi-input"
      />
      <button className="secondary">Proceed</button>
    </div>
  );
const NetBanking = ({ amount }: { amount: string }) => (
    <div>
        <label>
        Amount: <span className="readonly-amount">{amount || "Not Entered"}</span>
      </label>
      <h3>Net Banking</h3>
      <input
        type="text"
        placeholder="Enter Bank Account Number"
        className="netbanking-input"
      />
      <button className="secondary">Proceed</button>
    </div>
  );
 
// Factory function
const PaymentFactory = (type: "Credit" | "UPI" | "Net Banking", amount: string) => {
    debugger;
  if (type === "Credit") return <Credit amount={amount}/>;
  if (type === "UPI") return <UPI amount={amount}/>;
  if (type === "Net Banking") return <NetBanking amount={amount} />;
  return null;
};
 
const FactoryPatternPMGW = ({ type, amount }) => {
    debugger;
  return (
<div>
      {PaymentFactory(type, amount )}
      
</div>
  );
};




// Main component with radio buttons
const PaymentOptions = () => {
    const [selectedType, setSelectedType] = useState("Credit"); // Default to Credit
    const [amount, setAmount] = useState(""); // State to track the amount
  
    return (
      <div>

        <label>
          Enter Amount: 
          <input
            type="number"
            value={amount}
            placeholder="Enter amount"
            onChange={(e) => setAmount(e.target.value)}
            className="amount-input"
          />
        </label>

        <h3>Choose Your Payment Method</h3>
        <div>
          <label>
            <input
              type="radio"
              value="Credit"
              checked={selectedType === "Credit"}
              onChange={(e) => setSelectedType(e.target.value)}
            />
            Credit
          </label>
          <label>
            <input
              type="radio"
              value="UPI"
              checked={selectedType === "UPI"}
              onChange={(e) => setSelectedType(e.target.value)}
            />
            UPI
          </label>
          <label>
            <input
              type="radio"
              value="Net Banking"
              checked={selectedType === "Net Banking"}
              onChange={(e) => setSelectedType(e.target.value)}
            />
            Net Banking
          </label>
        </div>
  
        {/* Render the PaymentDetails component */}
        <FactoryPatternPMGW type={selectedType} amount={amount} />
      </div>
    );
  };
  
  export default PaymentOptions;