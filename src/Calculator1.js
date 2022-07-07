import React from "react";
import CalcTitle from './comps/CalcTitle'
import OutputScreen from "./comps/OutputScreen";
import Button from "./comps/Button";

class Calculator1 extends React.Component {
    constructor(){
        super();
        this.state = {
            question: '',
            answer: ''
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        const value = e.target.value;
        switch (value) {
            case '=': {

            }
            case 'Clear': {
                this.setState({ question: '', answer: ''});
                break;
            }
            default: {
                this.setState({ question: this.state.question += value});
                break;
            }
        }
    }

    render() {
        return (
            <div className="frame">
                <CalcTitle value="Ian's New Calculator"/>
                <div className="mainCalc">
                    <OutputScreen question={this.question} answer={this.answer}/>
                    <div className="button-row">
                        <Button label={'Clear'} handleClick = {this.handleClick}/>
                        <Button label={'Delete'} handleClick = {this.handleClick}/>
                        <Button label={'.'} handleClick = {this.handleClick}/>
                        <Button label={'/'} handleClick = {this.handleClick}/>
                    </div>
                    <div className="button-row">
                        <Button label={'7'} handleClick = {this.handleClick}/>
                        <Button label={'8'} handleClick = {this.handleClick}/>
                        <Button label={'9'} handleClick = {this.handleClick}/>
                        <Button label={'*'} handleClick = {this.handleClick}/>
                    </div>
                    <div className="button-row">
                        <Button label={'4'} handleClick = {this.handleClick}/>
                        <Button label={'5'} handleClick = {this.handleClick}/>
                        <Button label={'6'} handleClick = {this.handleClick}/>
                        <Button label={'-'} handleClick = {this.handleClick}/>
                    </div>
                    <div className="button-row">
                        <Button label={'1'} handleClick = {this.handleClick}/>
                        <Button label={'2'} handleClick = {this.handleClick}/>
                        <Button label={'3'} handleClick = {this.handleClick}/>
                        <Button label={'+'} handleClick = {this.handleClick}/>
                    </div>
                    <div className="button-row">
                        <Button label={'0'} handleClick = {this.handleClick}/>
                        <Button label={'='} handleClick = {this.handleClick}/>
                    </div>
                </div>
            </div>
        );
    }
}


export default Calculator1;