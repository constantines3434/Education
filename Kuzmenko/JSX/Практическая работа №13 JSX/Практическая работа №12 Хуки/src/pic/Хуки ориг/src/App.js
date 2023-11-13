import React from 'react';
import data from './data.js';
import data2 from './data2.js';
import Card from './card.js';
import './App.css';
import { useState, useEffect } from 'react';


function showAdditional(additional) {
  const alertInformation = Object.entries(additional)
    .map(information => `${information[1]}`)
  alert(alertInformation)
};

function App() {

  const [count, setCount] = useState(0);

  useEffect(() => {
     console.log(`Order summ now: ${count}`);
  });

  function pluscount(count, summ) {
    setCount(count + summ);
    return count
  }

  return (
    <div className="wrapper">
      <header>
        <h2>Курсы иностранных языков</h2>
      </header>
      <div className='basket'>
        <h3>Корзина</h3>
        <h5>{count} руб
        </h5>
        <p>
          <button onClick={() => count = setCount(0)}>Очистить</button>
          <button onClick={() => {alert("Стоимсть курсов: " + count + " рублей"); count = setCount(0)}}>Заказать</button>
        </p>
      </div>
      {data.map(item => (
        <Card
          additional={item.additional}
          name={item.name}
          showAdditional={showAdditional}
          cost={item.cost}
          pic={item.pic}
        />
      ))}
      <div className="wrapper">
        {data2.map(item => (
          <Card
            additional={item.additional}
            key={item.name}
            name={item.name}
            showAdditional={showAdditional}
            cost={item.cost}
            pic={item.pic}
          />
        ))}
        <button onClick={() => {pluscount(count, 2000); alert("Курс английского языка добавлен в корзину")}} className='button1'>+</button>
        <button onClick={() => {pluscount(count, 10000); alert("Курс франзузцского языка добавлен в корзину")}} className='button2'>+</button>
        <button onClick={() => {pluscount(count, 500); alert("Курс немецкого добавлен в корзину")}} className='button3'>+</button>
        <button onClick={() => {pluscount(count, 3000); alert("Курс китайского добавлен в корзину")}} className='button4'>+</button>
        <button onClick={() => {pluscount(count, 300); alert("Курс испанского языка добавлен в корзину")}} className='button5'>+</button>
        <button onClick={() => {pluscount(count, 150); alert("Кукс итальянского языка добавлен в корзину")}} className='button6'>+</button>
      </div>
    </div>
  )
}

export default App;