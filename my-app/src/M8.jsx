import React from "react";
import M9 from "./M9";
function M8(props){
    return(
        <>
        <h2>The value passed is {props.data5}</h2>
        <M9  data6 ={props.data5}/>
        
        </>
    )
}
export default M8;