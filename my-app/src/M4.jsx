import React from "react";
import M5 from "./M5";
function M4(props){
    return(
        <>
        <h2>The value passed is {props.data1}</h2>
        <M5 data2 ={props.data1}/>
        
        </>
    )
}
export default M4;