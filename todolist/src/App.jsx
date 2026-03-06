import { useState } from 'react';
import React from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if(input.trim() !== ""){
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((i) => i !== index));
  };
  return (
    <>
      <div className='main'>
          <input 
            type="text" 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            className='input' 
            placeholder='Enter task'
          />
          <button className='Addbtn' onClick={addTask}>ADD</button>
      </div>

      <div className='tasks'>
          <ul className='list'>
              {tasks.map((task, index) => (
                <li className='item' key={index}>
                  {task}
                  <button className='remove' onClick={() => removeTask(index)}>Remove</button>
                </li>
              ))}
          </ul>
      </div>
    </>
  );
}

export default App;