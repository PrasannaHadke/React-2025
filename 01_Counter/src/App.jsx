import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    if (count < 20) {
      setCount(prev => prev + 1)
    }
  }

  const decrement = () => {
    if (count > 0) {
      setCount(prev => prev - 1)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6 bg-gray-100">
      <h1 className="text-2xl font-bold">Counter App</h1>
      <div className="flex items-center gap-6">
        {/* Decrement Button */}
        <button
          onClick={decrement}
          disabled={count === 0}   // disabled at 0
          className={`px-4 py-2 rounded-lg text-white 
            ${count === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-red-500 hover:bg-red-600"}`}
        >
          -
        </button>

        <span className="text-2xl font-semibold">{count}</span>

        {/* Increment Button */}
        <button
          onClick={increment}
          disabled={count === 20}  // disabled at 20
          className={`px-4 py-2 rounded-lg text-white 
            ${count === 20 ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"}`}
        >
          +
        </button>
      </div>
    </div>
  )
}

export default App
