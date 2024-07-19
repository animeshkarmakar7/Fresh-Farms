import React from 'react'
import './CSS/Products.css'
import vegetable from '../Components/Assets/Vegetable'
import fruits from '../Components/Assets/Fruits'
import Orders from '../Components/Orders/Orders'

const Products = () => {
  return (
    <>
      <div className='products'>
        <h1>Fresh Farms Veggies</h1>
        <hr />
      
    
        <div className="products-veggies">
          {vegetable.map((items, i) => {
            return <Orders key={i} id={items.id} name={items.name} image={items.image} price={items.price}   />
          })}
        </div>
        <h1>Fresh Farms Fruits</h1>
        <hr />
        <div className="products-veggies">
          {fruits.map((items, i) => {
            return <Orders key={i} id={items.id} name={items.name} image={items.image} price={items.price}  />
          })}
        </div>
        </div>
    </>
  )
}

export default Products
