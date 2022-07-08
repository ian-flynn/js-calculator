import React from "react";
import OutputScreenRow from "./OutputScreenRow";

const OutputScreen = (props) => {
    return (
        <div id="screen" >
            <OutputScreenRow id={'formula'} value={ props.formula }/>
            <OutputScreenRow id={'display'} value={ props.display }/>
        </div>
    );
}
export default OutputScreen;