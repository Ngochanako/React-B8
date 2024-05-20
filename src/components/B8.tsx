import React, { useReducer } from 'react'
type State={
    gender:string,
} 
type Action={type:'choice',payload:string};
function reducer(state:State,action:Action){
    switch(action.type){
        case 'choice':
            return {gender:action.payload};
        default:
            throw new Error('Unknown')
    }
}
export default function B8() {
    const initialState={gender:'Nam'};
    const [state,dispatch]=useReducer(reducer,initialState);
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        return dispatch({type:'choice',payload:e.target.value});
    }
  return (
    <div>
       <p>Bài 8</p>
       <p>Chọn giới tính</p>
       <label htmlFor="">
        <input type="radio" value='Nam' checked={state.gender==='Nam'} onChange={handleChange} />Nam
       </label>
       <label htmlFor="">
        <input type="radio" value='Nữ' checked={state.gender==='Nữ'} onChange={handleChange}/>Nữ
       </label>
       <label htmlFor="">
        <input type="radio" value='Khác' checked={state.gender==='Khác'} onChange={handleChange} />Khác
       </label>
       <p>Selected Gender:{state.gender}</p>
    </div>
  )
}
