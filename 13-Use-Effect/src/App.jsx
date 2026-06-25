import React, { useState, useEffect } from 'react'

const App = () => {
  // const [joke, setJoke] = useState('');
  // const [loading, setloading] = useState('');
  // const [Error, setError] = useState(null);

  // async function Fetchdata() {
  //   try {
  //     const Response = await fetch('https://official-joke-api.appspot.com/random_joke');
  //     const Data = await Response.json();
  //     setJoke(Data.setup)
  //   } catch (error) {
  //     setError(`Error Occur: ${setError(error)}`)
  //   }
  // }

  //   const [text, setText] = useState('');
  // const [message, setMessage] = useState('');

  // useEffect(() => {
  //   // TODO: set message based on text
  //   // e.g. if text is empty, "Type something..."
  //   // otherwise, "You typed: " + text
  //   if(text === ''){
  //     setMessage('Type something...')
  //   }else{
  //     setMessage(`you types: ${text}`)
  //   }
  // }, [text]);

  // useEffect(function(){
  //   Fetchdata();
  // },[])

  function useCounter(){
    const [count, Setcount] = useState();
    const [increase, setincrease] = useState();

    useEffect(()=>{
        setincrease(count+1);

    },[])
  }
  function useCounter() {
  const [count, setCount] = useState(0);

    function increse(){
      setCount(prev =>prev+1);
    }

    const decrese = ()=>  setCount(prev => prev-1);
    return { count, increse, decrese }
}
  const { count, increse, decrese } = useCounter();
  return (
    <>
    {/* {loading && <p>Loading...</p>}
    {Error && <p>{Error}</p> }
    {!loading && !Error && <p>{joke}</p>} */}
      {/* <input value={text} onChange={(e) => setText(e.target.value)} />
      <p>{message}</p> */}
    </>
  )
}

export default App