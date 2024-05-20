import React, { useContext } from 'react'
import Context from './B1'

export default function B3() {
    const theme=useContext(Context);
  return (
    <div>
        <p>Bài 3</p>
       <button style={{backgroundColor:theme||'transparent',color:'white',border:'transparent'}}>Click me</button>
    </div>
  )
}
