
import React, {useState} from 'react'

import ToDoForm from './ToDoForm'
import { RiCloseCircleLine} from 'react-icons/ri'

function ToDo({todos, completeToDo, removeTodo}) {

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

  return todos.map((todo, index) => (
    <div className={todo.iscomplete ? 'todo-row complete' : 'todo-row'} 
         key={index}>
             <div key={todo.id} onClick={() => completeToDo(todo.id)}>
                 {todo.text}
             </div>
             <div className='icons'>
                 <RiCloseCircleLine 
                 onClick={() => removeTodo(todo.id)}
                 className='delete-icon'
                 />
                 <input type='checkbox' />
             </div>
        </div>
  
  ))
}

export default ToDo