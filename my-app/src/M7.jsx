import React from "react";
import M8 from "./M8";
function M7(props){
    return(
        <>
        <h2>The value passed is {props.data4}</h2>
        <M8  data5 ={props.data4}/>
        
        </>
    )
}
export default M7;