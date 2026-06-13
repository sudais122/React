import React from 'react'
import style from './Hero.module.css'
import {ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <div className={style.main}>
      <h1>Prospective Customer Segmentation</h1>
      <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at Stsince 1966, when designers at Letraset and James Mosley, the librarian at St</h5>
      <div className={style.arrow}>
        <ArrowUpRight size={80} />
      </div>
    </div>
  )
}

export default Hero