import React from 'react'

const TodoList = (props) => {
  return (
    <div>
      <li className="list-item" >
        {props.item}
        <span className='icons'> 
        <i className="fa-solid fa-trash" onClick={e=>{
            props.deleteItem(props.index)
        }}></i>

        </span>
      </li>
    </div>
  )
}

export default TodoList
