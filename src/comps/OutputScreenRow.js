import React from "react";


const OutputScreenRow = (props) => {
    return (
        <div className="screenrow" id={props.id}>
            <input  type="text" readOnly value={props.value}/>
        </div>
    );
}
export default OutputScreenRow;