import React, { createContext, useState } from 'react';
import all_products from "../Assets/All_products";
import vegetable from "../Assets/Vegetable";
import fruit from "../Assets/Fruits";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    [...all_products, ...vegetable, ...fruit].forEach((product) => {
        cart[product.id] = 0;
    });
    return cart;
};

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                const product = all_products.find((product) => product.id === Number(item)) ||
                                vegetable.find((product) => product.id === Number(item)) ||
                                fruit.find((product) => product.id === Number(item));
                if (product) {
                    totalAmount += cartItems[item] * product.price;
                }
            }
        }
        return totalAmount;
    };

    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    };

    const contextValue = {
        vegetable,
        fruit,
        getTotalCartItems,
        getTotalCartAmount,
        all_products,
        cartItems,
        addToCart,
        removeFromCart
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
