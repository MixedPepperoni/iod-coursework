import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// This creates a new component as a function that returns some JSX.
// Add this in App.jsx ABOVE the App component
function ExampleComponent() {
  return (
  <div className="ExampleComponent componentBox">
  <h1>My Example Component</h1>
  <p>My first React component!</p>
  </div>
  )
 }
 

function App() {
  const [count, setCount] = useState(0)
  const invalidJSX = <p>paragraph 1 & paragraph 2</p>; /*Corrected the parant element by removing the extra element.*/

  return (
    <>
    {/* This renders the component, calling the function and
including its JSX output at this point in the code. Add this
INSIDE the return block of the App component.  */}
<ExampleComponent/>

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
