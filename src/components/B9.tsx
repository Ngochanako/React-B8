import React, { useReducer, useState } from 'react'
import './style.css'
interface Task{
    id:number,
    detail:string,
    status:boolean,
}
type State={
    list:Task[];
}
type Action={type:'add',newTask:Task}|{type:'delete',id:number};
function reducer(state:State,action:Action){
    switch(action.type){
        case 'add':
            return{list:[...state.list,action.newTask]};
        case 'delete':
            return{list:state.list.filter(item=>item.id!==action.id)}
        default:
            return state;
    }
}

export default function B9() {
    const [listTask,setListTask]=useState<Task[]>(()=>{
        let listTaskLocal=localStorage.getItem('listTask');
       let list=listTaskLocal?JSON.parse(listTaskLocal):[];
       return list;
    })
    const initialState:State={list:[...listTask]};
    const [state,dispatch]=useReducer(reducer,initialState);
    const [task,setTask]=useState<string>('');
    const handleInput=(e:React.ChangeEvent<HTMLInputElement>)=>{
        let value=e.target.value;
        setTask(value);
    }
    const handleAdd=()=>{
        let newTask={
            id:Math.floor(Math.random()*99999999999+new Date().getMilliseconds()),
            detail:task,
            status:false,
        }
        return dispatch({type:'add',newTask:newTask})
    }
  return (
    <div>
      
        <input onChange={handleInput} type="text" placeholder='Nhập tên công việc' />
        <button onClick={handleAdd}>Thêm</button>
    
       {state.list.map((task)=>(
           <div style={{display:'flex',gap:'20px'}}>
               <p>{task.detail}</p>
               <button onClick={()=>dispatch({type:'delete',id:task.id})}>Xóa</button>
           </div>
       ))}
    </div>
  )
}
