import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const Category = ({category}) => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div>
      <p>Id: {category.id}</p>
      <p>Responsable: {category.responsable}</p>
      <p>Nombre: {category.nombre}</p>
      <p>Tipo del departamento: {category.tipo}</p>
      <Link to={`/categories/${category.id}`} className='link'>Ve a los productos del depto</Link>
      <button onClick={(e) => {
            fetch(`http://localhost:5000/category/${category.id}`, {method: 'DELETE'})
              .then((response) => {
                if(!response.ok) {
                  throw new Error('algo paso')
                }
                alert('se elimino tu deptartamento')
                navigate('/')
              })
          }}>eliminar</button>
    </div>
  )
}

export default Category;