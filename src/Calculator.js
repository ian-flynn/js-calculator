import React from "react";
import CalcTitle from "./comps/CalcTitle";
import OutputScreen from "./comps/OutputScreen";
import Button from "./comps/Button";

class Calculator extends React.Component {
    constructor(){
        super();
        this.state ={
            //answer
            display: 0,
            //question
            formula: ''
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
            case 'AC': {
                this.setState({ formula: '', display : 0});
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
            //<Button label={'Delete'} handleClick = {this.handleClick}/>
            <div>
                <CalcTitle value="Ian's New Calculator"/>
                <div id="calculator-box">
                    <OutputScreen formula={this.state.formula} display={this.state.display}/>
                    <Button id={'clear'} label={'AC'} handleClick = {this.handleClick} className="calc-button" />
                    <button id="divide" className="calc-button">/</button>
                    <button id="multiply" className="calc-button">X</button>
                    <button id="subtract" className="calc-button">-</button>
                    <button id="add" value="+"  className="calc-button">+</button>
                    <button id="equals" className="calc-button">=</button>
                    <div className="numbers-box">
                        <Button id={'seven'} label={'7'} handleClick = {this.handleClick} className={'numbers calc-button'}/>
                        <Button id={'eight'} label={'8'} handleClick = {this.handleClick} className={'numbers calc-button'}/>
                        <Button id={'nine'} label={'9'} handleClick = {this.handleClick} className={'numbers calc-button'}/>
                        <Button id={'four'} label={'4'} handleClick = {this.handleClick} className={'numbers calc-button'}/>
                        <Button id={'five'} label={'5'} handleClick = {this.handleClick} className={'numbers calc-button'}/>
                        <Button id={'six'} label={'6'} handleClick = {this.handleClick} className={'numbers calc-button'}/>
                        <Button id={'one'} label={'1'} handleClick = {this.handleClick} className={'numbers calc-button'}/>
                        <Button id={'two'} label={'2'} handleClick = {this.handleClick} className={'numbers calc-button'}/>
                        <Button id={'three'} label={'3'} handleClick = {this.handleClick} className={'numbers calc-button'}/>
                        <Button id={'zero'} label={'0'} handleClick = {this.handleClick} className={'numbers calc-button'}/>
                        
                        <button id="decimal" value="."   className="numbers calc-button">.</button>
                    </div>
                </div>
            </div>
        )
    }
    
}
export default Calculator;