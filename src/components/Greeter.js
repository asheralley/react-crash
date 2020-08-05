import React from "react";

// props should never be changed inside a given component
// can also just use props in parameter passed to function then reference it in
// the component as props.name etc
const Greeter = ({ name, age = 18 }) => {
    const greet = () => {
        alert(`Hello there, ${name}`);
    };
    return (
        <>
            <h1>Hi there, {name}</h1>
            <p>You are {age} years old</p>
            <button onClick={() => alert("Hello!")}>Click me!</button>
            <button onClick={greet}>Click me please!</button>
        </>
    );
};

export default Greeter;
