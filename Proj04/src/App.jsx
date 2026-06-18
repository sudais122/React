import React from 'react'
import './App.css'
import { useState } from 'react'

const App = () => {
  const [vale, setvale] = useState('');      
  const [tasks, setTasks] = useState([]);    
  const [Error, SetError] = useState('');
  const handleAdd = () => {
    if (vale.trim() === '') {
      SetError('Plase Enter Your Task');
      return
    };          
    setTasks([...tasks, vale]);              
    setvale('');  
    SetError('');                  
  };

  const handleRemove = (indexToRemove) => {
    setTasks(tasks.filter((_, i) => i !== indexToRemove));
  };

  return (
    <>
      <div className='main'>
        <div className='task-box'>
          <input
            type="text"
            value={vale}
            placeholder='Enter your task'
            onChange={(val) => { setvale(val.target.value) }}
          />
          <button onClick={handleAdd}>Add</button>
        </div>
          <div className='Err'><p className='Error'>{Error}</p></div>

        {/* render one row per task in the array */}
        {tasks.map((task, index) => (
           <div className='Task-Box' key={index}>
            <input type="checkbox" />
            <p>{task}</p>
            <p onClick={() => handleRemove(index)}>Remove</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default App;