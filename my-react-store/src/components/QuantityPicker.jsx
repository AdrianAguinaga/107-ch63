import "./QuantityPicker.css";
import { useState } from "react";

function QuantityPicker(props) {

    const [quantity, setQuantity] = useState(1);
    //      name      fuction                initial value
    // quantity = 2; // This won't work in React
    // We need to use setQuantity to update the value
    function handleIncrease() {
        let temporalValue = quantity + 1;
        setQuantity(temporalValue);
        props.onChange(temporalValue);
    }
    function handleDecrease(){
        let temporalValue = quantity - 1;
        if(temporalValue === 0){
           return;
        }
        setQuantity(temporalValue);
        props.onChange(temporalValue);
    }
    // create the handleDecrease function 
    // prevent the quantity from going below 1 
    // disable the button
    
    return (
        <div className="quantity-picker">
            <button onClick={handleDecrease} disabled={quantity === 1}>-</button>
            <label>{quantity}</label>
            <button onClick={handleIncrease}>+</button>
        </div>
    );
}

export default QuantityPicker;