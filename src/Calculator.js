import React from "react";
import CalcTitle from "./comps/CalcTitle";
import OutputScreen from "./comps/OutputScreen";
import Button from "./comps/Button";

class Calculator extends React.Component {
    constructor(){
        super();
        this.state ={
            //answer
            display: '0',
            //question
            formula: 'formulaaaa'
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        const value = e.target.value;
        switch (value) {
            case '=': {
                function evaluator(fn) {
                    return new Function('return ' + fn)();
                  }
                this.setState({display: evaluator(this.state.formula)})
                break;
            }
            case 'Clear': {
                this.setState({ formula: '', display : ''});
                break;
            }
            default: {
                this.setState({ formula: this.state.formula += value});
                break;
            }
        }
    }
    render(){
        return (
            <div>
                <CalcTitle value="Ian's New Calculator"/>
                <div id="calculator-box">
                    <OutputScreen formula={this.state.formula} display={this.state.display}/>
                    <Button id="clear" className="calc-button" />
                    <button id="divide" className="calc-button">/</button>
                    <button id="multiply" className="calc-button">X</button>
                    <button id="subtract" className="calc-button">-</button>
                    <button id="add" value="+"  className="calc-button">+</button>
                    <button id="equals" className="calc-button">=</button>
                    <div className="numbers-box">
                        <button id="seven" value="7"  className="numbers calc-button">7</button>
                        <button id="eight" value="8"  className="numbers calc-button">8</button>
                        <button id="nine" value="9"  className="numbers calc-button">9</button>
                        <button id="four" value="4"  className="numbers calc-button">4</button>
                        <button id="five" value="5" className="numbers calc-button">5</button>
                        <button id="six" value="6"  className="numbers calc-button">6</button>
                        <button id="one" value="1"  className="numbers calc-button">1</button>
                        <button id="two" value="2"  className="numbers calc-button">2</button>
                        <button id="three" value="3"  className="numbers calc-button">3</button>
                        <button id="zero" value="0"   className="numbers calc-button zero-width">0</button>
                        <button id="decimal" value="."   className="numbers calc-button">.</button>
                    </div>
                </div>
            </div>
        )
    }
    
}
export default Calculator;