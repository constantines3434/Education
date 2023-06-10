import React, { useState } from 'react';

const Foo = (props) => {
    const [isBought, setIsBought] = useState(false);

    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }
    const handleBuyNow = () => {
        setIsBought(true);
        handleClick();
    }
    const handleClose = () => {
        setIsBought(false);
        setCount(count - count);
    }
    return (
        <div className="car-listing">
            {isBought && (
                <div className="modal">
                    <div className="modal-content">
                        <div className='sms'>
                            <span className="close" onClick={handleClose}>&times;</span>
                            <p>Покупка совершена!</p> </div>
                    </div>
                </div>
            )}
            <h1><b>Сайт товаров для спорта и туризма</b></h1>
            <p>Количество заказанных товаров: {count}</p>
            <ul>
                {props.cars.map((car, index) => (
                    <li key={index}>
                        <img src={car.image} alt={car.name} />
                        <div className="car-info">
                            <h2>{car.name}</h2>
                            <p>Цена товара: {car.price}</p>
                            <button onClick={handleBuyNow}>Купить</button>
                            
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Foo;