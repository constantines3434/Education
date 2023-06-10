import React from 'react';
import Foo from './Foo';

const cars = [
    {
        name: 'Треккинговые палки',
        price: 1000,
        visible: true,
        image: 'https://tur-eda.ru/upload/iblock/8f4/w1a3a5ay0tbplybj5y9so4k7tvkzuzej.jpg'
    },
    {
        name: 'Ночник-фонарик',
        price: 1500,
        image: 'https://avatars.mds.yandex.net/get-marketpic/5410100/pic292693a2433e3e51a613a5d68fba5188/900x1200',
        visible: true
    },
    {
        name: 'Джеркбейт',
        price: 2000,
        image: 'https://jerkmania.ru/wp-content/uploads/2017/09/buster-jerk-c684-moonshadow.jpg',
        visable: true
    },
    {
        name: 'Плащ-палатка',
        price: 1000,
        image: 'https://kadet134.ru/upload/iblock/f75/f7515cd1da0c85f88d013c0597287f01.jpg',
        visable: true
    },
    {
        name: 'Будка',
        price: 15000,
        image: 'https://sc04.alicdn.com/kf/UTB8SbkIlVPJXKJkSahVq6xyzFXag.jpg',
        visable: true
    },
    {
        name: 'Тенисная ракетка',
        price: 2000,
        image: 'https://www.professionalsport.ru/spree/products/000/151/523/original/234629.jpg?1576816991',
        visable: false
    }
];

const App = () => {
    return (
        <div>
            <Foo cars={cars} />
        </div>
    );
};

export default App;