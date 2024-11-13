import React, { useState } from 'react';
import Todolist from './Todolist';

function App(){
// let [Username,setUsername]=useState('');
// let [display_username,setDisplay_Username]=useState('');

// let[password,setPassword]=useState("");
// let[display_password,setDisplay_Password]=useState("")

// function displayInfo(){
//   setDisplay_Username(Username);
//   setDisplay_Password(password);
//   setUsername("");
//   setPassword("");
// }
// return (
//     <>
// <label htmlFor="Username">Username:</label>
// <input type="text" value={Username} onChange={(e)=>setUsername(e.target.value)} /> <br></br>


// <label htmlFor="Password">Password:</label>
// <input type="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/> <br></br>

// <button onClick={()=>displayInfo()}>submit</button>
// <h4>Username: {display_username}</h4>
// <h4>Password: {display_password}</h4>
//   </>
// );
return(
  <>
  <Todolist/>
  </>)
}
export default App;
 
