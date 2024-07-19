import React, { createContext, useState } from "react";
import all_products from "../Assets/All_products";

export const ShopContext = createContext(null)
const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_products.length; index++) {
        cart[index] = 0
    }
    return cart
}

const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart())


    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const getTotalCartAmount = (props) => {
        let totalAmount = 0
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_products.find((product) => product.id === Number(item))
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount;
    }

     const getTotalCartItems = () => {
         let totalItem = 0
         for (const item in cartItems) {
             if (cartItems[item] > 0) {
                 totalItem += cartItems[item]
             }
         }
         return totalItem;
     }

    const contextValue = { getTotalCartItems ,  getTotalCartAmount, all_products, cartItems, addToCart, removeFromCart }

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;