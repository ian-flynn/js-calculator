import React from "react";
import CalcTitle from "./comps/CalcTitle";
import OutputScreen from "./comps/OutputScreen";
import Button from "./comps/Button";


const isOperator = /[*/+-]/;
const endsWithOperator = /[*+-/]$/;
const endsWithNegativeSign = /\d[*/+-]{1}-$/;

class Calculator extends React.Component {
    constructor(){
        super();
        this.state ={
            formula: '',
            display: 0,
            evaluated: false,
            previousInput: ''
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleOperator = this.handleOperator.bind(this);
        this.handleEqual = this.handleEqual.bind(this);
    }
    handleOperator(e){
        const value = e.target.value;
        //if prevInp isnt an operand, move all numbers in display up to end of formula, plus the operand
        if (!isOperator.test(this.state.previousInput)){
            this.setState({formula: this.state.formula + this.state.display + value, 
                           display: value,
                           previousInput: value});
        }
        //if previous input is an operand, then replace the end of formula with new input
        // and also replace it in the display
         else if (isOperator.test(this.state.previousInput)){
            this.setState({formula: this.state.formula.slice(0, -1) + value, display: value})
        }
    }
    handleEqual(e){
        const value = e.target.value;
        function evaluator(fn) {
            return new Function('return ' + fn)();
        }

        //if previous input is an operand, remove it from end of formula and evaluate
        if (isOperator.test(this.state.previousInput)){
            this.setState({display: evaluator(this.state.formula.slice(0, -1)),
                           formula: this.state.formula.slice(0,-1),
                           previousInput: value,
                           evaluated: true})
        }
        // if previous input is a number, evaluate the formula plus the display
        //maths the formula plus the final display numbers
         else {
            this.setState({display: evaluator(this.state.formula  += this.state.display), 
                evaluated: true,
                previousInput: value});
         }
            
    }

    handleClick(e){
        const value = e.target.value;
        if (value == 'clear') {
            this.setState({ formula: '', display : 0, evaluated: false, previousInput: ''});
        } else if(this.state.display==0){
            this.setState({display: value, previousInput: value})
        //if it's just an operand and nothing else, replace with number
        } else if(isOperator.test(this.state.display)){
            this.setState({display: value, previousInput: value})
        } else {
            this.setState({ display: this.state.display += value, previousInput: value});
        }
    }
    render(){
        return (
            //<Button label={'Delete'} handleClick = {this.handleClick}/>
            <div>
                <CalcTitle value="Ian's New Calculator"/>
                <div id="calculator-box">
                    <OutputScreen formula={this.state.formula} display={this.state.display}/>
                    <Button id={'clear'} label={'clear'} handleClick = {this.handleClick} className={'calc-button'}/>
                    <Button id={'divide'} label={'/'} handleClick = {this.handleOperator} className={'calc-button'} />
                    <Button id={'multiply'} label={'*'} handleClick = {this.handleOperator} className={'calc-button'}/>
                    <Button id={'subtract'} label={'-'} handleClick = {this.handleOperator} className={'calc-button'}/>
                    <Button id={'add'} label={'+'} handleClick = {this.handleOperator} className={'calc-button'}/>
                    <Button id={'equals'} label={'='} handleClick = {this.handleEqual} className={'calc-button'}/>
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
                        <Button id={'zero'} label={'0'} handleClick = {this.handleClick} className={'numbers calc-button zero-width'}/>
                        <Button id={'decimal'} label={'.'} handleClick = {this.handleClick} className={'numbers calc-button'}/>
                    </div>
                </div>
            </div>
        )
    }
    
}
export default Calculator;