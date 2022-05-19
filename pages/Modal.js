import react,{ useState } from 'react';
import styled from 'styled-components';
import About from './about';
const Modals=styled.div`
postition:fixed;
z-index:0;
left:0;
top:0;
overflow:auto;
width:100%;
height:100%:
background-color:grey;
`
 const Inside=styled.div`
 background:white;
 margin:10% auto;
 padding:20px;
 width:50%;
 `;
 const Data=[
 {name:"tarun",
class:"VI",
occupation:"programmer",
title:"deppressed"

}
 ]
  const Modal=()=>{
    const  [show,setShow] = useState(false);
     return(
        <>
    <button onClick={()=>setShow(true)}>Show Bar</button>
    {
        show && (
            <Modals onClick={()=>setShow(false)}>
                <Inside onClick={e=>e.stopPropagation()}>
                <button onClick={()=>setShow(false)}>Hide data</button>
                <Show data={data} ></Show>
                </Inside>
            </Modals>
        )
    }
        </>
     )
 }
 export default Modal;