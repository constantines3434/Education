import React from 'react';
import data from './data.js';
import data2 from './data2.js';
import Card from './card.js';
import './App.css';
import { useState, useEffect, useRef } from 'react';


function showAdditional(additional) {
  const alertInformation = Object.entries(additional)
    .map(information => `${information[1]}`)
  alert(alertInformation)
};

function App() {
  const [count, setCount] = useState(0);
  const [ticketCount, setTicketCount] = useState(0);
  const refUser = useRef("Обнуление полей");

  useEffect(() => {
    document.title = `Вы нажали на "+" ${ticketCount} раз`;
  });

  function plusCount(count, summ) {
    setCount(count + summ);
    setTicketCount(ticketCount + 1);
    return count
  }

  function resetCounts() { 
    alert(refUser.current);   
    setCount(0);
    setTicketCount(0);
  }

  return (
    <div className="wrapper">
      <header>
        <h2>сайт онлайн фильмов</h2>
      </header>
      <header>
        <h2>Заказ билетов на сеанс</h2>
      </header>
      <div className='basket'>
        <h3>Корзина</h3>
        <h5>{count} руб
        </h5>
        <p>
          <button onClick={() => {
            resetCounts();
          }}>Очистить
          </button>

          <button onClick={() => {
            alert("Заказано билетов " + ticketCount + " на сумму: " + count + " рублей");
            resetCounts();
          }}>Заказать
          </button>
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
        <button onClick={() => { plusCount(count, 200); }} className='button1'>+</button>
        <button onClick={() => { plusCount(count, 100); }} className='button2'>+</button>
        <button onClick={() => { plusCount(count, 500); }} className='button3'>+</button>
        <button onClick={() => { plusCount(count, 300); }} className='button4'>+</button>
        <button onClick={() => { plusCount(count, 400); }} className='button5'>+</button>
        <button onClick={() => { plusCount(count, 150); }} className='button6'>+</button>
      </div>
    </div>
  )
}

export default App;