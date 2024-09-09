import { useState } from "react";
import "./App.css";

function App() {
  const [Amount, setAmount] = useState(0);
  const [Type, setType] = useState("Income");
  const [Transaction, setTransaction] = useState([]);

    console.log("Amount=>", Amount);
    console.log("Type=>", Type);
    setTransaction([...Transaction, { Amount, Type }]);
  console.log("Transaction", Transaction);

  return (
    <>
      <div className="container">
        <form>
          <h2>Finance Manangement</h2>
          <input
            type="number"
            value={Amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Add Amount"
            className="myInput"
          />
          <select
            className="myInput"
            value={Type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="Income">Income</option>
            <option value="Expensive">Expensive</option>
          </select>
          <button className="btn1" onClick={handleOnButton}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
