import React from "react";


const OutputScreenRow = (props) => {
    return (
        <div id={props.id}>
            <input  className="screenrow" type="text" readOnly value={props.value}/>
        </div>
    );
}
export default OutputScreenRow;