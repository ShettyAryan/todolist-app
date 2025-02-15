import React from 'react'
import tick from '../assets/check-mark.png'
import notTick from '../assets/radio.png'
import trash from '../assets/delete.png'
const TodoItems = ({text, id, isComplete, deleteTodo, toggle}) => {
  return (
    <div onClick={()=>{toggle(id)}}  className='flex items-center my-3 gap-2 '>
        <div className='flex flex-1 items-center cursor-pointer'>
            <img className='w-6' src={isComplete ? tick : notTick} alt="check mark" />
            <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${isComplete ? "line-through" : ""}`}>{text}</p>
        </div>

        <img  onClick={()=>{deleteTodo(id)}} src={trash} alt="check removed" className='w-4'/>

    </div>
  )
}

export default TodoItems