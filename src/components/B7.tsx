import React, { useReducer } from 'react'

type State={
    text:string
}
type Action={type:'change',load:string};
function reducer(state:State,action:Action){
    switch(action.type){
        case 'change':
            return {text:action.load}
        default:
            throw new Error('Unknown');
            
    }
}
export default function B7() {
    const initialState:State={text:""};
    const [state,dispatch]=useReducer(reducer,initialState);
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        return dispatch({type:'change',load:e.target.value});
    }
  return (
    <div>
       <p>Bài 7</p>
       <p>{state.text}</p>
       <input type="text" onChange={handleChange}/>
    </div>
  )
}
