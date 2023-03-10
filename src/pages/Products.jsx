import React, { useEffect, useState } from 'react';
import Product from '../components/Product';
import '../styles/products.css'
import { Link } from 'react-router-dom';


const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/products')
    .then((response) => response.json())
      .then((data) => setProducts(data));
  }, [])
  
  return (
    <>
      <div className='ContainerProducts'>
        {products.map(product => (
          <Product key={product.id} product={product}/>
          ))}
      </div>
      <div className='link'>
        <Link to='/alta' className='link__a'>Da de alta tu producto</Link>
      </div>
    </>
  )
}

export default Products;