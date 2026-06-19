import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [title, setTitle] = useState("");
  const [income, setIncome] = useState("");
  const [type, setType] = useState("");
  const [inputErr, setInputErr] = useState("");

  const [balance, setBalance] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  const [History, setHistory] = useState([])

  function handleInputs(e) {
    e.preventDefault();

    if (
      title.trim() === "" ||
      income.trim() === "" ||
      type === ""
    ) {
      setInputErr("Please input all fields");
      return;
    }

    const amount = Number(income);

    if (amount < 1) {
      setInputErr("Amount must be greater than 0");
      return;
    }

    setInputErr("");

    if (type === "income") {
      setTotalIncome(prev => prev + amount);
      setBalance(prev => prev + amount);
    } else {
      setTotalExpense(prev => prev + amount);
      setBalance(prev => prev - amount);
    }

    setTitle("");
    setIncome("");
    setType("");
  }

  function RecHistory(){
    setHistory([...History,{
      income,
      title,
      type,
    }])
  }

  function HnadleRemvoe(indextoremove){
    setHistory(History.filter((_,i) => i !== indextoremove))
  }
  return (
    <div className="container">

      {/* LEFT SIDE */}
      <div className="left">
        <h1 className="title">Expense Tracker</h1>

        <form className="form" onSubmit={handleInputs}>

          <input
            type="text"
            placeholder="Enter Title (e.g Salary, Rent)"
            className="input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="number"
            placeholder="Enter Amount"
            className="input"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
          />

          <select
            className="input"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">Select Type</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>

          <p className="Err">{inputErr}</p>

          <button className="btn" type="submit" onClick={RecHistory}>
            Add Transaction
          </button>

        </form>
      </div>

      {/* RIGHT SIDE */}
      <div className="right">

        <div className="card balance">
          <h2>Balance</h2>
          <h3>${balance}</h3>
        </div>

        <div className="card income-expense">
          <div>
            <h3>Income</h3>
            <p className="income">${totalIncome}</p>
          </div>

          <div>
            <h3>Expense</h3>
            <p className="expense">${totalExpense}</p>
          </div>
        </div>

        <div className="transactions">
          <h2>History</h2>

        {History.map((Details,index)=>(
          <div className="transaction income" key = {index}>
            <span>{Details.title}</span>

            <span>
              <span>{Details.type === 'income' ? '+' : '-'}</span>
            <span>{Details.income}</span>
            </span>
            <button className="delete" onClick={()=> {HnadleRemvoe(index)}}>X</button>
          </div>
        ))}
        </div>
      </div>

    </div>
  );
};

export default App;