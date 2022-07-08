import React from "react";
import OutputScreenRow from "./OutputScreenRow";

const OutputScreen = (props) => {
    return (
        <div id="screen" >
            <OutputScreenRow value = { props.formula }/>
            <OutputScreenRow value = { props.display }/>
        </div>
    );
}
export default OutputScreen;