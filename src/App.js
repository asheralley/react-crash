import React from "react";
import Navbar from "./components/Navbar";
import Greeter from "./components/Greeter";
import Counter from "./components/Counter";
import MoodToggler from "./components/MoodToggler";
import ShoppingCart from "./components/ShoppingCart";
import "./App.css";

const items = [
    { id: 1, name: "Taco Seasoning", price: 2.25, qty: 2 },
    { id: 2, name: "Pinto Beans", price: 1.99, qty: 3 },
    { id: 3, name: "Sour Cream", price: 4.5, qty: 1 }
];

// testing autowrite
function App() {
    return (
        <div className="App">
            <Navbar />
            <Greeter name="Karen" />
            <Greeter name="Tami" age="27" />
            <Counter />
            <Counter step={3} />
            <MoodToggler />
            <ShoppingCart initalItems={items} />
        </div>
    );
}

export default App;
