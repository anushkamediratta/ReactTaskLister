import './App.css'
import img from './itemlister.png'
import { useState } from "react"

const App = () => {
  const[todo,setTodo]= useState('')
  const[todoList,setTodoList]=useState([])
  console.log(todoList)
  const onClickHandler=()=>{
    let newtodoList=[...todoList]
    let newItem ={
      id:Math.random(),
      value:todo
    }
    newtodoList.push(newItem)
    setTodoList(newtodoList)
    setTodo('')
  }

  const onDeleteHandler = (myId) => {
    setTodoList(todoList.filter(item=> item.id!==myId))
   
  }

  return <div>
    <img src={img} width={100} height={100} className="logo"/>
  <h1 className="app-title">React TaskLister</h1>
  <div className="container">
    Add Tasks 
    <br/>
    <input className="input-text" type="Text" placeholder="Enter Task" value={todo} onChange={e=> setTodo(e.target.value)}/>
  <button type="button" className="add-btn" onClick={()=> onClickHandler()}>ADD</button>
  <div className="list">
    <br/>
    <ul>
   { 
   todoList.map((item,index)=> {
    return <div key={index}>

     <li  onClick={()=>onDeleteHandler(item.id )}>
      <input type="checkbox" name="" id="" checked={item.isDone}/>
           {item.value}</li>
    </div>
   })}
   </ul>

   </div>
  </div>
  
  </div>
}

export default App


