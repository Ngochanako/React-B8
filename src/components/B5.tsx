import React, { useReducer } from 'react'
import { Reducer} from './Reducer';
export default function B5() {
    const initialState={count:0};
    const [state,dispatch]=useReducer(Reducer,initialState);
  return (
    <div>
        <p>Bài 5</p>
      <p>{state.count}</p>
      <button onClick={()=>dispatch({type:'increase'})}>Increase</button>
    </div>
  )
}
