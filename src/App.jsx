import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-grey-100 p-6">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Student Management System
        </h1>
        {/* <Home /> */}
      </div>
    </>
  );
}

export default App
