import React from "react";
function State(){
    let a=0;
    function newVal(){
        a=a-1;
        console.log(a);
    }
    return(
<>
<h1>{a}</h1>
<button onClick ={() =>newVal()} >Decrement</button>   
</>
    )
}
export default State;