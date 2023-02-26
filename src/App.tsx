import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CheckoutPage from "./checkoutPage/CheckoutPage";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <CheckoutPage/>
    </div>
  )
}

export default App
