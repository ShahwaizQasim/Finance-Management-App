import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='container'>
      <form>
        <h2>Finance Manangement</h2>
        <input type="number" placeholder='Add Amount' className='myInput' />
        <select className='myInput'>
          <option value="income">Income</option>
          <option value="expensive">Expensive</option>
        </select>
      </form>
     </div>
    </>
  )
}

export default App
