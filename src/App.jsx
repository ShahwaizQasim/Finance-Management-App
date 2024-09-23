import { useState } from "react";
import "./index.css";
import "./App.css";

function App() {
  // const [Amount, setAmount] = useState(0);
  // const [Type, setType] = useState("Income");
  // const [Transaction, setTransaction] = useState([]);

  //   console.log("Amount=>", Amount);
  //   console.log("Type=>", Type);
  const [Amount, setAmount] = useState("Add Amount");
  const [Type, setType] = useState("Income");
  const [Transaction, setTransaction] = useState([]);

  const handleOnButton = () => {
    console.log("Amount=>", Amount);
    console.log("Type=>", Type);
    setTransaction([...Transaction, { Amount, Type }]);
    setAmount("");
    setType("Income");
  };
  console.log("Transaction", Transaction);

  // const totalIncome = Transaction.reduce((acc, trans ) => {
  //       return trans.Type === 'Income' ? acc + Number(trans.Amount) : acc,0
  // })

  const totalIncome = Transaction.reduce(
    (acc, trans) =>
      trans.type === "Income" ? acc + Number(trans.Amount) : acc,
    0
  );

  console.log("totalIncome", totalIncome);

  return (
    <>
      <div className="container">
        <h2>Finance Manangement</h2>

        <div className="parent">
          <div className="child">
            <h3>Total Income</h3>
            <h3>1000</h3>
          </div>
          <div className="child">
            <h3>Total Expense</h3>
            <h3>10000</h3>
          </div>
          <div className="child">
            <h3>Total Balance</h3>
            <h3>10000</h3>
          </div>
        </div>

        <input
          type="number"
          value={Amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Add Amount"
          className="myInput"
          required
        />
        <select
          className="myInput"
          value={Type}
          onChange={(e) => setType(e.target.value)}
          required
        >
          <option value="Income">Income</option>
          <option value="Expensive">Expensive</option>
        </select>
        <div>
          {Transaction.map((data, index) => {
            return (
              <div className="userData">
                <h3>
                  {index + 1}
                  {")"} {data.Amount}
                </h3>
                <h3
                  className={`${data.Type === "Income" ? "green" : "red"}`}
                  // style={{
                  //   color: data.Type ==="Income" ? "green": "red"
                  // }}
                >
                  {data.Type}
                </h3>
              </div>
            );
          })}
        </div>
        <button onClick={handleOnButton} disabled={Amount === ''} className="btn1">
          Submit
        </button>
      </div>
    </>
  );
}

export default App;
