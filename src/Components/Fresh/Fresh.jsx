import React from 'react'
import './Fresh.css'
import productsData from '../Assets/All_products'
import Orders from '../Orders/Orders'

const Fresh = () => {
  return (
    <>
    <div className='fresh'>
      <h1>FRESH FARMS</h1>
      <hr />
      <div className="fresh-items">
       {productsData.map((items,i)=>{
        return <Orders key = {i} id={items.id} name={items.name} image={items.image} price={items.price} type={items.type} description={items.description}  />
       })}
      </div>

    </div>
    </>
  )
}

export default Fresh
