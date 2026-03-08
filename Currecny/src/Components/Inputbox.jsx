import React, { useEffect, useState } from "react";
import styles from "./inputbox.module.css";
import Apikey from "../Hooks/api";

const InputBox = () => {

  const [Amount, setamount] = useState("");
  const [rates, setrates] = useState({});
  const [from, setfrom] = useState("USD");
  const [to, setto] = useState("EUR");
  const [result, setresult] = useState(0);

  useEffect(() => {

    async function fetchData() {
      const Data = await Apikey();

      if (Data) {
        setrates(Data.rates);
      }
    }

    fetchData();

  }, []);
  useEffect(() => {

    if (rates && Amount && from && to) {

      const rate = rates[to] / rates[from];
      setresult(Amount * rate);

    }

  }, [from, to, Amount, rates]);

  return (
    <main className={styles.container}>
      <div className={styles.maindiv}>
        <h1 className={styles.head}>Currency Converter</h1>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Amount</label>

          <input
            type="number"
            value={Amount}
            onChange={(e) => setamount(e.target.value)}
            className={styles.input}
            placeholder="Enter Amount"
          />

        </div>

        <div className={styles.converterRow}>

          <div className={styles.selectGroup}>
            <label className={styles.label}>From</label>

            <select
              className={styles.select}
              value={from}
              onChange={(e) => setfrom(e.target.value)}
            >

              {Object.keys(rates).map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}

            </select>

          </div>

          <div className={styles.swapContainer}>
            <div
              className={styles.swapBtn}
              onClick={() => {
                const temp = from;
                setfrom(to);
                setto(temp);
              }}
            >
              ⇅
            </div>
          </div>

          <div className={styles.selectGroup}>
            <label className={styles.label}>To</label>

            <select
              className={styles.select}
              value={to}
              onChange={(e) => setto(e.target.value)}
            >

              {Object.keys(rates).map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}

            </select>

          </div>

        </div>

        <button className={styles.convertBtn}>Convert</button>

        <div className={styles.resultDiv}>
          <p className={styles.exchangeRate}>
            1 {from} = {(rates[to] / rates[from]).toFixed(3)} {to}
          </p>

          <h2 className={styles.finalAmount}>
            {result ? result.toFixed(2) : 0} {to}
          </h2>
        </div>

      </div>
    </main>
  );
};

export default InputBox;