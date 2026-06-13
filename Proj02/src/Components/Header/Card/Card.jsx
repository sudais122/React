import React from 'react'
import style from './Card.module.css'

const Card = ({ id, image, subtitle, buttonText, color }) => {
  return (
    <div className={style.Main}>
      <img 
        src={image} 
        alt="Card Image" 
      />
      <div className={style.id}>{id}</div>
      
      <div className={style.Details}>
        <p>{subtitle}</p>
        <button style={{ backgroundColor: color }}>
          {buttonText}
        </button>
      </div>
    </div>
  )
}

export default Card