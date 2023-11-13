import React from 'react'
import './App.css'
import store from './store'

class App extends React.Component
{
  constructor()
  {
    super()
    this.state =
     {
        out: '0'
     }
  }

  render ()
  {
    return
    (
        <div className='container'>
          <div classname='output'>
              <input type='text' defaultValue={this.state.out}/>
            </div>  
            <div className='buttons'>
              {store.buttons.map(item => <button>{item.val}</button>)}
            </div>
        </div>
    )
  }
}


`jsx
import React, { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const clear = () => {
    setResult("");
  };

  return (
    <div className="calculator">
      <input type="text" value={result} />
      <div className="keypad">
        <button className="operator" name="+" onClick={handleClick}>
          +
        </button>
        <button className="operator" name="-" onClick={handleClick}>
          -
        </button>
        <button className="operator" name="*" onClick={handleClick}>
          *
        </button>
        <button className="operator" name="/" onClick={handleClick}>
          /
        </button>

        <button className="number" name="1" onClick={handleClick}>
          1
        </button>
        <button className="number" name="2" onClick={handleClick}>
          2
        </button>
        <button className="number" name="3" onClick={handleClick}>
          3
        </button>
        <button className="number" name="4" onClick={handleClick}>
          4
        </button>
        <button className="number" name="5" onClick={handleClick}>
          5
        </button>
        <button className="number" name="6" onClick={handleClick}>
          6
        </button>
        <button className="number" name="7" onClick={handleClick}>
          7
        </button>
        <button className="number" name="8" onClick={handleClick}>
          8
        </button>
        <button className="number" name="9" onClick={handleClick}>
          9
        </button>
        <button className="number" name="0" onClick={handleClick}>
          0
        </button>

        <button className="clear" onClick={clear}>
Clear
        </button>
        <button className="equal" onClick={calculate}>
          =
        </button>
      </div>
    </div>
  );
}

export default App;