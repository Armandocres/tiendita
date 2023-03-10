import React from 'react'
import '../styles/Home.css'

const HomeComponents = ({descripcion, img, alt, text}) => {
  return (
    <div className='HomeConponent'>
      <div className='Item'>
        <p className='text'>{descripcion}</p>
        <p>{text}</p>
      </div>
      <figure className='Home__container'>
        <img src={img} alt={alt} className='Home__container--img'/>
      </figure>
    </div>
  )
}

export default HomeComponents;