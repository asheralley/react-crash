import React, { useState } from "react";
import CartItem from "./CartItem";

function ShoppingCart({ initalItems }) {
    const [items, setItems] = useState(initalItems);

    const updateQty = (id, newQty) => {
        const newItems = items.map((item) => {
            if (item.id === id) {
                return { ...item, qty: newQty };
            }
            return item;
        });
        setItems(newItems);
    };

    const grandTotal = items
        .reduce((total, item) => total + item.qty * item.price, 0)
        .toFixed(2);
    return (
        <div>
            <h1>I am cart</h1>
            <div>
                {items.map((item) => (
                    <CartItem key={item.id} updateQty={updateQty} {...item} />
                ))}
            </div>
            <h3>Grand Total: ${grandTotal}</h3>
        </div>
    );
}

export default ShoppingCart;
