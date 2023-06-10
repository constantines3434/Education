import React from 'react'
import './App.css';

export default function Fullnamefunction(props) {

return(
    <div className='name'>
    <p>Группа: {props.group}</p>
    <p>Имя: {props.firstName}</p>
    <p>Фамилия: {props.lastName}</p>
    </div>
)
}