
import React, { useState } from 'react'
import ToDo from './ToDo';
import ToDoForm from './ToDoForm'

function ToDoList() {
    const [todos, setTodos] = useState([]);


    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
        // console.log(todo, ...todos);

    };

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removeArr);
    }

    const completeToDo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id){
                todo.isComplete = !todo.isComplete
            }
            return todo
        });

        setTodos(updatedTodos);
    } 

  return (
    <div>
        <h1>!!Welcome to TO-DO-LIST!!</h1>
        <ToDoForm onSubmit={addTodo}/>
        <ToDo todos={todos} completeToDo={completeToDo} removeTodo={removeTodo}/>
        
    </div>
  );
}

export default ToDoList;