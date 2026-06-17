import React from 'react'
import Button from './components/button'

const App = () => {

  function hello(elem) {
    console.log(elem.target.value);
  }
  function mouseEnter(){
    console.log('mouse enter');
  }
  return (
    <>

      <input onChange={(elem)=>{
          hello(elem)
      }} type="text" name="" id="text"  placeholder='Enter something'/>
    </>
  );
}

export default App;