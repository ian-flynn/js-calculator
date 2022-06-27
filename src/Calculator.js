import { useState } from "react";

function Calculator(){
    const [displayValue, setDisplayValue] = useState(0);
    return (
        <div id="calculator-box">
            <div id="display"></div>
            <div id="clear" className="calc-button">AC</div>
            <div id="divide" className="calc-button">/</div>
            <div id="multiply" className="calc-button">X</div>
            <div id="subtract" className="calc-button">-</div>
            <div id="add" className="calc-button">+</div>
            <div id="equals" className="calc-button">=</div>
            <div className="numbers-box">
                <div id="seven" className="numbers calc-button">7</div>
                <div id="eight" className="numbers calc-button">8</div>
                <div id="nine" className="numbers calc-button">9</div>
                <div id="four" className="numbers calc-button">4</div>
                <div id="five" className="numbers calc-button">5</div>
                <div id="six" className="numbers calc-button">6</div>
                <div id="one" className="numbers calc-button">1</div>
                <div id="two" className="numbers calc-button">2</div>
                <div id="three" className="numbers calc-button">3</div>
                <div id="zero" className="numbers calc-button zero-width">0</div>
                <div id="decimal" className="numbers calc-button">.</div>
            </div>
        </div>
    )
}
export default Calculator;