import React from 'react'
import style from './Header.module.css'
export const Header = () => {
  return (
    <>
    <div className={style.Header}>
        <button className={style.target}>TARGET AUDIENCE</button>
        <button className={style.banking}>DIGITAL BANKING PLATFORM</button>
    </div>
    </>
  )
}
