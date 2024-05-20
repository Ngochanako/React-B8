import React, { useContext, useState } from 'react'
import Context from './B1'

export default function B4() {
    const theme=useContext(Context);
    const [color,setColor]=useState(theme);
    const change=()=>{
       setColor(prev=>(prev=='red'?'blue':'red'))
    }
  return (
    <div>
      <p>Bài 4</p>
      <h4>Nền {color}</h4>
      <button onClick={change} style={{backgroundColor:color||'transparent',color:'white'}}>Click me</button>
    </div>
  )
}
