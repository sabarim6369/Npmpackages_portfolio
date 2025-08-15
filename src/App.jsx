import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Package from "./components/Package"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Package/>
    </>
  )
}

export default App
