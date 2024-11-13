import React, {useState } from "react";
function Todolist(){
let[Todotext,setTodotext]=useState("");
let [DisplayTodo, setDisplayTodo]=useState([]);
    
function AddItems(){
    
let tempArr= [...DisplayTodo]
tempArr.push(Todotext)
setDisplayTodo(tempArr);
setTodotext('')
}
function DeleteItems(i){
let tempArr= [...DisplayTodo]
tempArr.splice(i,1);
setDisplayTodo(tempArr);

}
function EditItems(){

}

console.log("newArr",DisplayTodo)
    
    return(
        <>
        <input value={Todotext} type="text"onChange={(e)=>setTodotext(e.target.value)} />
        <button onClick={()=>AddItems()}>ADD </button>
         

         {
            DisplayTodo.map((ele,ind)=>{
                return(
<>
<p>{ind+1}.{ele}</p>
                <button onClick={()=>DeleteItems(ind)}>Delete</button>

</>
                )
                
                
            })
         }
        </>
    )
}
export default Todolist;h