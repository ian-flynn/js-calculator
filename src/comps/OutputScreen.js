import React from "react";
import OutputScreenRow from "./OutputScreenRow";

const OutputScreen = (props) => {
    return (
        <div className="screen">
            <OutputScreenRow value = { props.question }/>
            <OutputScreenRow value = { props.answer }/>
        </div>
    );
}
export default OutputScreen;