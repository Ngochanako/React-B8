import React, { useReducer } from 'react'
import { Reducer } from './Reducer';

export default function B6() {
    const initialState={count:10};
    const [state,dispatch]=useReducer(Reducer,initialState);
  return (
    <div>
      <p>Bài 6</p>
      <p>{state.count}</p>
      <button onClick={()=>dispatch({type:'decrease'})}>Decrease</button>
    </div>
  )
}
