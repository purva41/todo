import React from "react";
import M7 from "./M7";
function M6(props){
    return(
        <>
        <h2>The value passed is {props.data3}</h2>
        <M7 data4 ={props.data3}/>
        
        </>
    )
}
export default M6;