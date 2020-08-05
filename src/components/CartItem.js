import React from "react";

const CartItem = ({ id, name, price, qty, updateQty }) => {
    const addOne = () => {
        updateQty(id, qty + 1);
    };
    const subtrackOne = () => {
        updateQty(id, qty - 1);
    };
    return (
        <div className="CartItem">
            <div>Name: {name}</div>
            <div>Price: ${price}</div>
            <button onClick={subtrackOne}>-</button>
            <div>{qty}</div>
            <button onClick={addOne}>+</button>
            <div>Total: ${qty * price}</div>
        </div>
    );
};

export default CartItem;
