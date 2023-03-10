import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import '../styles/OnliProduct.css'

const OnliProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProducts] = useState();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const productOnly = async () => {
    const response = await fetch(`http://localhost:5000/products/${id}`);
    const data = await response.json()
    setProducts(data)
  }

  useEffect(() => {
    productOnly();
  }, [productOnly]);

  return (
    <div className='OnliProduct'>
      <div className='OnliProduct__titles'>
        <p>{product?.title}</p>
      </div>
      <div>
        <img src={product?.images} alt={product?.title} className='img'/>
        <p>{product?.description}</p>
        <p>${product?.price}</p>
      </div>
      <div className='BUttons'>
        <button onClick={(e) => {
            fetch(`http://localhost:5000/products/${product.id}`, {method: 'DELETE'})
              .then((response) => {
                if(!response.ok) {
                  throw new Error('algo paso')
                }
                navigate('/products')
              })
          }}>eliminar</button>
        <NavLink to='/products' className='BUttons_link'>Regresa</NavLink>
      </div>
      
    </div>
  )
}

export default OnliProduct;