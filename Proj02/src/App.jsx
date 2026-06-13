import React from 'react'
import './App.css'
import { Header } from './Components/Header/Header'
import Hero from './Components/Header/Hero/Hero'
import Card from './Components/Header/Card/Card'

const App = () => {
  const cards = [
  {
    id: 1,
    image: "https://cdn.pixabay.com/photo/2021/11/09/15/54/mens-fashion-6781827_1280.jpg",
    subtitle: " into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software including versions of Lorem Ipsum.",
    buttonText: "View Project",
    color :"#860404"
  },
  {
    id: 2,
    image: "https://p3.hippopx.com/preview/753/596/mens-fashion-men-s-fashion-tips-fashion-fashion-basics-men-s-fashion-advice-men-s-fashion-wears-mens-fashion-tips-fashion-for-men-african-men-s-fashion-wears-teachign-mens-thumbnail.jpg",
    subtitle: "written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor , comes from a line in section",
    buttonText: "Learn More",
    color :"#196658"
  },
  {
    id: 3,
    image: "https://p3.hippopx.com/preview/175/889/man-portrait-fashion-outdoors-male-boy-profile-stylish-dp-for-facebook-kashmiri-most-handsome-boy-stylish-dp-for-boys.jpg",
    subtitle: "and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and.",
    buttonText: "Explore",
    color :"#f81e1e"
  },
];
  return (
    <>
      <Header />
      <div className='App-Container'>
        <div className='Left-text'>
          <Hero />
        </div>
        <div className='Right-images'>
          {cards.map(function(elem,index){
            return(
              <Card
                id = {elem.id}
                image = {elem.image}
                subtitle = {elem.subtitle}
                buttonText = {elem.buttonText}
                color={elem.color}
               />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App;