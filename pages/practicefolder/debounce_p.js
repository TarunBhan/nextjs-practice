import React from 'react'
let count=0;

const practice = () => {


function call()
{
    const text=document.createElement("b");
    var br=document.createElement("br");
  
     const node=document.createTextNode("fetched..");
    text.appendChild(node);

    const element= document.getElementById("parent");
    element.appendChild(text);
    element.appendChild(br);
}
function debounce(fn,d){
    let timer;
    return ()=>{
       clearTimeout(timer);
        timer=setTimeout(() =>{
        call();
        },d);

    }
}
const func = debounce(call,2000);


return (
    <div id="add1"><center>
        <h1>Type Something Here</h1>
        <input id="user_input" onKeyUp={func} />
      
        <p id="parent"></p>
        </center>
        <Home/>
    </div>
  )
}

export default practice;