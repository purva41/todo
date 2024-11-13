import React from "react";
import C3 from "./C3";
function C2(props){
    return(
        <>
        <h2>The value passed from C is {props.info}</h2>
        <C3 data={props.info}/>
        
        </>
    )
}
export default C2;