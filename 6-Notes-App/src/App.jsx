import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [Submit, setSubmit] = useState('');
  const [heading, setheading] = useState('');
  const [Desc, setDesc] = useState('');
  const [Recent, setRecent] = useState([]);
  const [Error, setError] = useState('');
  const [count, setcount] = useState(0);

  function HandleSubmit(e) {
    e.preventDefault();
  }

  function HandleAdd() {
    if (heading.trim() === '' || Desc.trim() === '') {
      setError('Please input All fields');
      return;
    } else {
      setError('');
      setRecent([...Recent, {
        heading,
        Desc,
        count
      }])
      setDesc('');
      setheading('');
      setcount(count+1);
    }
  }

  const handleRemove = (indexToRemove) => {
    setRecent(Recent.filter((_, i) => i !== indexToRemove));
  };

  return (
    <>
      <div className='Left'>
        <form onSubmit={(e) => { HandleSubmit(e) }}>
          <h1>Add Notes</h1>
          <input
            type="text"
            id="Heading"
            placeholder='Enter Topic'
            value={heading}
            onChange={(e) => { setheading(e.target.value) }}
          />
          <textarea
            type="text"
            id='description'
            placeholder='Enter Description'
            value={Desc}
            onChange={(e) => { setDesc(e.target.value) }}
          />
          <p className='Error'>{Error}</p>
          <button onClick={HandleAdd}>Add Note</button>
        </form>
      </div>
      <div className='Right'>
        <p>Recent Notes</p>
        <p>Total Tasks: {count}</p>
        {Recent.map((Note, index) => (
          <div className="Recent" key={index}>
            <p id="heading">{Note.heading}</p>
            <p id="description">{Note.Desc}</p>
            <button id="Del" onClick={()=>{handleRemove(index)}}>Delete</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default App