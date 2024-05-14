import { useState } from 'react'

import './App.css'
import './style.css'

function App() {
  const [value, setValue] = useState('')

  return (
    <div className="container">
      <div className="calculator">
        <form action="">
          <div>
            <input type='text'></input>
          </div>
          <div>
            <input type='button' value="AC"></input>
            <input type='button' value="DE"></input>
            <input type='button' value="."></input>
            <input type='button' value="/"></input>
            
          </div>
          <div>
            <input type='button' value="7"></input>
            <input type='button' value="8"></input>
            <input type='button' value="9"></input>
            <input type='button' value="*"></input>
            
          </div>
          <div>
            <input type='button' value="4"></input>
            <input type='button' value="5"></input>
            <input type='button' value="6"></input>
            <input type='button' value="+"></input>
            
          </div>

          <div>
            <input type='button' value="1"></input>
            <input type='button' value="2"></input>
            <input type='button' value="3"></input>
            <input type='button' value="-"></input>
            
          </div>
          <div>
            <input type='button' value="00"></input>
            <input type='button' value="0"></input>
            <input type='button' value="="></input>
           
            
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
