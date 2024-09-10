import { useState } from "react";
import './index.css'
import "./App.css";

function App() {
  // const [Amount, setAmount] = useState(0);
  // const [Type, setType] = useState("Income");
  // const [Transaction, setTransaction] = useState([]);

  //   console.log("Amount=>", Amount);
  //   console.log("Type=>", Type);
  const [Amount, setAmount] = useState(0);
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

  return (
    <>
      <div className="container">

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
          <div>
            {
            Transaction.map((data,index) => {
              return (
                <div className="userData">
                  <span></span>
                  <h3>{index+1}{")"} {data.Amount}</h3>
                  <h3>{data.Type}</h3>
                </div>
                
              )
            })
            }
          </div>
          <button  onClick={handleOnButton} className="btn1">
            Submit
          </button>
      </div>
    </>
  );
}

export default App;
