function Calculator(){

    return (
        <div id="calculator-box">
            <div id="return-screen"></div>
            <div id="AC" className="calc-button">AC</div>
            <div id="division" className="calc-button">/</div>
            <div id="multiplication" className="calc-button">X</div>
            <div id="subtraction" className="calc-button">-</div>
            <div id="addition" className="calc-button">+</div>
            <div id="equals" className="calc-button">=</div>
            <div className="numbers-box">
                <div id="0" className="numbers calc-button">0</div>
                <div id="1" className="numbers calc-button">1</div>
                <div id="2" className="numbers calc-button">2</div>
                <div id="3" className="numbers calc-button">3</div>
                <div id="4" className="numbers calc-button">4</div>
                <div id="5" className="numbers calc-button">5</div>
                <div id="6" className="numbers calc-button">6</div>
                <div id="7" className="numbers calc-button">7</div>
                <div id="8" className="numbers calc-button">8</div>
                <div id="9" className="numbers calc-button">9</div>
                <div id="." className="numbers calc-button">.</div>
            </div>
        </div>
    )
}
export default Calculator;