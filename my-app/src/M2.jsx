import React from "react";
import M3 from "./M3";
function M2(props){
    return(
        <>
        <h2>The value passed is {props.info}</h2>
        <M3 info1 ={props.info}/>
        
        </>
    )
}
export default M2;