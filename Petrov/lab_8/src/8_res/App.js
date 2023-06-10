import React from 'react';
import './App.css';
import './Fullnamefunction.js';
import Fullnamefunction from './Fullnamefunction.js';


class App extends React.Component {

  constructor() {
    super()
    this.state={
      out: '0'
    }
    this.refOutput=React.createRef()
  }

  typeNumber(value) {
    let currentValue = value;
    let output = this.refOutput.current
    this.setState({
      out: currentValue
    });

    if (value === 'C') 
    {
      output.value = '0'
      output.value.length = output.value.length - 1
      output.value.length = output.value.length + 1
    }

    if (output.value === '0') {
      output.value = ''
    }

    if (value === '=') {
        output.value = eval(output.value)
        output.value.length = output.value.length - 1
        output.value.length = output.value.length + 1
    }
    output.value += currentValue
  }
  
  render() {
return (
    <div className="App">
      <Fullnamefunction group={"ПКС-303"} firstName={"Константин"} lastName={"Смирнов"}/>
      <div className='container'>
        <div className='output'>
        <input ref={this.refOutput} type='text' defaultValue='0'></input>
        </div>
        <div className='buttons'>
          <button onClick={() => this.typeNumber(1)}>1</button>
          <button onClick={() => this.typeNumber(2)}>2</button>
          <button onClick={() => this.typeNumber(3)}>3</button>
          <button onClick={() => this.typeNumber(4)}>4</button>
          <button onClick={() => this.typeNumber(5)}>5</button>
          <button onClick={() => this.typeNumber(6)}>6</button>
          <button onClick={() => this.typeNumber(7)}>7</button>
          <button onClick={() => this.typeNumber(8)}>8</button>
          <button onClick={() => this.typeNumber(9)}>9</button>
          <button onClick={() => this.typeNumber(0)}>0</button>
          <button onClick={() => this.typeNumber('+')}>+</button>
          <button onClick={() => this.typeNumber('-')}>-</button>
          <button onClick={() => this.typeNumber('*')}>*</button>
          <button onClick={() => this.typeNumber('/')}>/</button>
          <button onClick={() => this.typeNumber('C')}>C</button>
          <button onClick={() => this.typeNumber('=')}>=</button>
        </div>
      </div>
    </div>
  );
}
}
export default App; 