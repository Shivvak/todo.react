import React  from 'react'
import "./index.css"

const ListTodo = ({todolist,deleteHandler})=>{
    return (
        <div>
        {todolist.map((todo,index)=><div key={index}>
            <h5>{todo} &nbsp; <button className='deleteBtn' onClick={()=>deleteHandler(index)}>Delete</button></h5>
            </div>)}
        </div>
  
    )
}

export default ListTodo