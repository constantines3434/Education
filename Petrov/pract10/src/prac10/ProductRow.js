import React from 'react';
import './App.css'

const ProductRow = (props) => {
  let { product } = props;
  
  let name = product.stocked ? product.name : 
  <span style={{color:'red'}}>{product.name}</span>
  
  return (
    <div className='card'>
      <div>
      <p>{name}</p>
      <p><b>{product.category}</b></p>
      <p>{product.price}</p>
      <p>
      <button>Купить</button>
      </p>
      </div>
    </div>
  )
}

export default ProductRow;