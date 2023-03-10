import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import Category from '../components/Category';

const Categories = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/category')
    .then((response) => response.json())
      .then((data) => setCategory(data));
  }, [])

  return (
    <>
      <div className='ContainerProducts'>
        {category.map(category => (
          <Category key={category.id} category={category}/>
          ))}
      </div>
      <div className='link'>
        <Link to='/altaCategory' className='link__a'>Da de alta tu departamento</Link>
        <NavLink to='/' className='BUttons_link'>Regresa</NavLink>
      </div>
    </>
  )
}

export default Categories;