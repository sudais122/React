import React from 'react'

const App = () => {
  const User = {
    name :"M sudais",
    age: 18,
    subject: 'Computer Science',
    Universty: "AWKUM"
  }
  localStorage.setItem("User",JSON.stringify(User));

  const Name = JSON.parse(localStorage.getItem("User"));
  console.log(Name);

  const Supervisor = {
    Name: "Dr aftab",
    age: '41',
    Speciality: "Networking",
    Education: "PHD"
  }

  localStorage.setItem("Supervisor",JSON.stringify(Supervisor));
  const Details = JSON.parse(localStorage.getItem('Supervisor'));
  console.log(Details.Name);

  return (
    <>
     
    </>
  )
}

export default App