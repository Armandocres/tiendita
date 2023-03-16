import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Product from './Product';

const OnliCategory = () => {
  const [category, setCategory] = useState();
  const { id } = useParams();
  const URL = `http://localhost:5000/category/${id}?_embed=products`;
  console.log(URL);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const productOnly = async () => {
    const response = await fetch(URL);
    const data = await response.json()
    setCategory(data)
  }

  useEffect(() => {
    productOnly();
  }, [productOnly]);

  return (
    <div>
      {category?.products.map(product => (
          <Product key={product.id} product={product}/>
          ))}
    </div>
  )
}

export default OnliCategory;