import { useState } from 'react'
import viteLogo from '/dragon2logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>SCRIBBYFORGE</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          3D prints, and more coming soon!
        </p>
      </div>
      <p className="read-the-docs">
        Store Under Development
      </p>
    </>
  )
}

export default App
