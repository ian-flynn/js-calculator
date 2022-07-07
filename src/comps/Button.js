import React from "react";

const Button = (props) => {
    return (
        <input 
        type="button"
        value={props.label}
        />
    );
}

export default Button;