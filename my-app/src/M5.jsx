import React from "react";
import M6 from "./M6";
function M5(props){
    return(
        <>
        <h2>The value passed is {props.data2}</h2>
        <M6 data3 ={props.data2}/>
        
        </>
    )
}
export default M5;