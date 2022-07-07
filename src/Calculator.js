import React, { useState } from "react";

function Calculator(){
    const [displayValue, setDisplayValue] = useState(0);
    const [formula, setFormula] = useState("");
    
    const handleReset = () => {
        setDisplayValue(0);
        setFormula("");
    }
    const handleNumber = (e) => {
        //if it's not a number
        if(isNaN(e.target.value)){
            setFormula(formula + displayValue + e.target.value);
            setDisplayValue(0)
        //if it is a number
        } else {
            if(displayValue == 0 ){
                setDisplayValue(e.target.value);
            } else if (displayValue !== 0) {
                setDisplayValue(displayValue + e.target.value);
            }
        }
        
    }
    return (
        <div id="calculator-box">
            <div id="screen">
                <div id="formula">{ formula }</div>
                <div id="display">{ displayValue }</div>
            </div>
            <button id="clear" className="calc-button" onClick={ handleReset }>AC</button>
            <button id="divide" className="calc-button">/</button>
            <button id="multiply" className="calc-button">X</button>
            <button id="subtract" className="calc-button">-</button>
            <button id="add" value="+" onClick={ handleNumber } className="calc-button">+</button>
            <button id="equals" className="calc-button">=</button>
            <div className="numbers-box">
                <button id="seven" value="7" onClick={ handleNumber } className="numbers calc-button">7</button>
                <button id="eight" value="8" onClick={ handleNumber } className="numbers calc-button">8</button>
                <button id="nine" value="9" onClick={ handleNumber } className="numbers calc-button">9</button>
                <button id="four" value="4" onClick={ handleNumber } className="numbers calc-button">4</button>
                <button id="five" value="5" onClick={ handleNumber } className="numbers calc-button">5</button>
                <button id="six" value="6" onClick={ handleNumber } className="numbers calc-button">6</button>
                <button id="one" value="1" onClick={ handleNumber } className="numbers calc-button">1</button>
                <button id="two" value="2" onClick={ handleNumber } className="numbers calc-button">2</button>
                <button id="three" value="3" onClick={ handleNumber } className="numbers calc-button">3</button>
                <button id="zero" value="0"  onClick={ handleNumber } className="numbers calc-button zero-width">0</button>
                <button id="decimal" value="."  onClick={ handleNumber } className="numbers calc-button">.</button>
            </div>
        </div>
    )
}
export default Calculator;