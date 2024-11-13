import React from "react";
import CO3 from "./CO3";
function CO2(props){
let y=51;
    return(
        <>
<h2>value of CO1 is {y}</h2>
<CO3 N={y} M ={props.C}/>
</>
    )
}
export default CO2;