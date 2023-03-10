import React from 'react'
import '../styles/product.css'
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <div className='product'>
      <p>Nombre: {product.title}</p>
      <img src={product.images} alt={product.title} />
      <div className='product__dates'>
        <p>Precio: {product.price}</p>
        <p>Categoria: {product.category.name}</p>
      </div>
      <Link to={`/products/${product.id}`} className='link'>{product.title}</Link>
    </div>
  )
}

export default Product;