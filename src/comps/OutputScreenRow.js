import React from "react";


const OutputScreenRow = (props) => {
    return (
            <input id={props.id}
                className="screenrow" 
                type="text" 
                readOnly 
                value={ props.value }
            />
    );
}
export default OutputScreenRow;