import React from "react";

const Button = () => {

  function myFun(){
    console.log("It is clicked");
  }

  return (
    <>
      <button onClick={myFun}>
        Click Me
      </button>
      <h1>hello</h1>
    </>
  );
};

export default Button;