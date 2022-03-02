import React, {useState} from 'react'

function ToDoForm(props) {
    const [input, setInput] = useState('');

    const handleChange = i => {
        setInput(i.target.value);
    };

    const handleSubmit = i => {
        i.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        });

        setInput('');
    };
  return (
    <form className='todo-form' onSubmit={handleSubmit}>
        <input 
        type='text' 
        placeholder='Add a todo list' 
        value={input} 
        name='text' 
        className='todo-input'
        onChange={handleChange}/>
        <button className='todo-button'>ADD</button>
    </form>
  )
}

export default ToDoForm