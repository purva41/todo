import React from "react";
import { useState } from "react";
function State(){
    let a=0;
    function newValue(){
        a=a+1;
        console.log(a);
    }
    return(
<>
<h1>a</h1>
<button onClick ={() =>newValue()} >Increment</button>


        
    
</>
    )
}
export default State;