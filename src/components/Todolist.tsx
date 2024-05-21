import React, { useReducer, useState } from 'react'
import './style.css'
interface Task{
    id:number,
    detail:string,
    status:boolean,
}
type State={
    list:Task[];
    task:Task;
}
type Action={type:any,payload:any};

function reducer(state:State,action:Action){
    switch(action.type){
        case 'add':
            return{...state,list:[...state.list,action.payload]};
        case 'delete':
            return{...state,list:state.list.filter(item=>item.id!==action.payload)}
        case 'change':           
            return{...state, task:{...state.task,detail:action.payload,id:Math.floor(Math.random()*10000000 + new Date().getMilliseconds())}};
        default:
            return state;
    }
}
export default function Todolist() {
    const [listTask,setListTask]=useState<Task[]>(()=>{
        let listTaskLocal=localStorage.getItem('listTask');
       let list=listTaskLocal?JSON.parse(listTaskLocal):[];
       return list;
    })
    const initialState:State={list:[...listTask],task:{id:0,detail:'',status:false}};
    const [state,dispatch]=useReducer(reducer,initialState);
    const handleInput=(e:React.ChangeEvent<HTMLInputElement>)=>{
        let value=e.target.value;
        return dispatch({type:'change',payload:value})
    }
    const handleAdd=()=>{
       return dispatch({type:'add',payload:state.task})
    }  
  return (
    <div>
      
        <input onChange={handleInput} type="text" placeholder='Nhập tên công việc' />
        <button onClick={handleAdd}>Thêm</button>      
       {state.list.map((task)=>(
           <div style={{display:'flex',gap:'20px'}}>
               <p>{task.detail}</p>
               <button onClick={()=>dispatch({type:'delete',payload:task.id})}>Xóa</button>
           </div>
       ))}
    </div>
  )
}
