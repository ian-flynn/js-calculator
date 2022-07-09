import React from "react";
import CalcTitle from "./comps/CalcTitle";
import OutputScreen from "./comps/OutputScreen";
import Button from "./comps/Button";


const isOperator = /[*/+-]/;
const endsWithOperator = /[x+-/]$/;
const endsWithNegativeSign = /\d[x/+-]{1}-$/;

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
    }
   
    handleClick(e){
        const value = e.target.value;
        switch (value) {
            case '=': {
                function evaluator(fn) {
                    return new Function('return ' + fn)();
                }
                this.setState({formula: this.state.formula += this.state.display})
                this.setState({display: evaluator(this.state.formula)})
                this.setState({evaluated: true})
                console.log(this.state.evaluated)
                break;
            }
            case 'clear': {
                this.setState({ formula: '', display : 0, evaluated: false, previousInput: ''});
                break;
            }
            case '+':
            case '-':
            case '*':
            case '/': {
               // if(this.state.previousInput ==  '+'){
                  //  this.setState({formula: this.state.formula.slice(0, -1) + value})
                    //this.setState({previousInput: value})
                   // break;
               // } else {
                    console.log('it did it')
                    this.setState({formula: this.state.formula += this.state.display += value})
                    this.setState({display: value})
                    this.setState({previousInput: value})
                    console.log(this.state.previousInput)
                    break;
              //  }
            }
            default: {
                console.log('it did default')
                if(this.state.display==0){
                    this.setState({display: value})
                    break;
                } else {
                    this.setState({ display: this.state.display += value});
                    break;
                }
               
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
                    <Button id={'clear'} label={'clear'} handleClick = {this.handleClick} className={'calc-button'}/>
                    <Button id={'divide'} label={'/'} handleClick = {this.handleClick} className={'calc-button'} />
                    <Button id={'multiply'} label={'*'} handleClick = {this.handleClick} className={'calc-button'}/>
                    <Button id={'subtract'} label={'-'} handleClick = {this.handleClick} className={'calc-button'}/>
                    <Button id={'add'} label={'+'} handleClick = {this.handleClick} className={'calc-button'}/>
                    <Button id={'equals'} label={'='} handleClick = {this.handleClick} className={'calc-button'}/>
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