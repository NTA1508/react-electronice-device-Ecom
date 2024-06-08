import React, { useState } from 'react';

const ProductIncrement = ({ maxIncrement }) => {
    const [inputValue, setInputValue] = useState(1);

    const handleInput = (event) => {
        let newValue = parseInt(event.target.value, 10);

        if (isNaN(newValue) || newValue <= 0) {
            newValue = 1;
        } else if (newValue > maxIncrement) {
            newValue = maxIncrement;
        }

        setInputValue(newValue);
    };

    const increment = () => {
        const newValue = inputValue + 1;

        if (newValue <= maxIncrement) {
            setInputValue(newValue);
        } else {
            setInputValue(maxIncrement);
            alert('Cannot exceed the maximum value: ' + maxIncrement);
        }
    };

    const decrement = () => {
        const newValue = inputValue - 1;

        if (newValue >= 1) {
            setInputValue(newValue);
        } else {
            alert('Cannot be less than 1');
        }
    };

    return (
        <div className="pro-mumber">
            <button id="number-prev" type="button" onClick={decrement}>
                -
            </button>
            <input
                id="number-text"
                type="text"
                placeholder={1}
                value={inputValue}
                onInput={handleInput}
            />
            <button id="number-next" type="button" onClick={increment}>
                +
            </button>
        </div>
    );
};

export default ProductIncrement;
