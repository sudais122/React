import React from "react";

function InputBox({ label, amount, onAmountChange }) {
  return (
    <div className="input-box">
      <label>{label}</label>

      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => onAmountChange && onAmountChange(e.target.value)}
      />
    </div>
  );
}

export default InputBox;