import React from 'react'
import './Pages.css'
import { useParams } from 'react-router-dom'


const ProductDetail = () => {
    const Parms = useParams();
  return (
    <div className='productDetails'>
        {Parms.ID} ProductDetail
    </div>
  )
}

export default ProductDetail