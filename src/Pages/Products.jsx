import React from 'react'
import './CSS/Products.css'
import all_products from '../Components/Assets/All_products'
import Orders from '../Components/Orders/Orders'

const Products = () => {
  return (
    <>
      <div className='products'>
        <h1>Fresh Farms Veggies</h1>
        <hr />
      
    
        <div className="products-veggies">
          {all_products.map((items, i) => {
            return <Orders key={i} id={items.id} name={items.name} image={items.image} price={items.price} type={items.type} description={items.description} />
          })}
        </div>
        <h1>Fresh Farms Fruits</h1>
        <hr />
        <div className="products-veggies">
          {all_products.map((items, i) => {
            return <Orders key={i} id={items.id} name={items.name} image={items.image} price={items.price} type={items.type} description={items.description} />
          })}
        </div>
        </div>
    </>
  )
}

export default Products
