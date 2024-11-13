import React from "react";
import M10 from "./M10";
function M9(props){
    return(
        <>
        <h2>The value passed is {props.data6}</h2>
        <M10  data7 ={props.data6}/>
        
        </>
    )
}
export default M9;