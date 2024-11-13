import React from "react";
import M4 from "./M4";
function M3(props){
    return(
        <>
        <h2>The value passed is {props.info1}</h2>
        <M4 data1 ={props.info1}/>
        
        </>
    )
}
export default M3;