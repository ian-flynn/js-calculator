import React from "react";

const Button = (props) => {
    return (
        <input 
        id={props.id}
        className={props.className}
        type="button"
        value={props.label}
        onClick= { props.handleClick }
        />
    );
}

export default Button;