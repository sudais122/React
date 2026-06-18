import React, { useState } from 'react'

const App = () => {
  const [name, setname] = useState({name: 'sudais',age:20})
  const [val, setval] = useState([10,20,30]);

  function hello(){
    const NewName = setname({...name, age:15, name: 'Ali'})
    console.log(name);
  }
  function Hello2(){
    const Newval = setval([...val,12]);
    console.log(Newval)
  }
  return (
    <>
    <p>{val.join(',')}</p>
    <button onClick={hello}>click me</button>
    <p>Age:{name.name} - Name:{name.age}</p>
    <button onClick={Hello2}>Click 2</button>
    </>
  )
}

export default App