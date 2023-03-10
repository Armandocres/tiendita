import React, { useState } from 'react';
import '../styles/Form.css';

const FormularioAlta = () => {
  const [data, setData] = useState({});
  let URL = 'http://localhost:5000/products'

  function dataPost(e) {
    e.preventDefault()
    const nombre = e.target['nombre'].value;
    const proveedor = e.target['proveedor'].value;
    const identificador = parseInt(e.target['identificador'].value);
    const imagen = e.target['imagen'].value;
    const descripcion = e.target['descripcion'].value;
    const price = e.target['precio'].value;
    const categoria = e.target['categoria'].value;
    const categoriaId = parseInt(e.target['categoriaId'].value);
    const data = {
      "id": identificador,
      "title": nombre,
      "price": price,
      "description": descripcion,
      "proveedor": proveedor,
      "images": imagen,
      "categoryId": categoriaId,
      "category": {
        "id": categoriaId,
        "name": categoria
      }
    }

    fetch(URL, {
      method: 'POST',
      headers: {
        "Content-TYpe": "application/json",
      },
      body: JSON.stringify(data)
    }).then((response) => {
      return response.json()
    })

    setData(data);
    window.location.href = '/products'
  }

  console.log(data);

  return (
    <div>
      <h2>
        FormularioAlta
      </h2>
      <form onSubmit={dataPost} className='FormContainer'>
        <label htmlFor="NombreProducto">
          <p>Nombre de tu producto</p>
          <input type="text"
            id='nombre'
            placeholder='Mesa'
          />
        </label>
        <label htmlFor="Precio">
          <p>Precio del producto</p>
          <input type="number"
            id='precio'
            placeholder='3.99'
          />
        </label>
        <label htmlFor="NombreProveedor">
          <p>Nombre del provedor</p>
          <input type="text"
            id='proveedor'
            placeholder='Grupo peñafiel'
          />
        </label>
        <label htmlFor="Descripcion">
          <p>Descripcion</p>
          <input type="text"
            id='descripcion'
            placeholder='Es una mesa buena'
          />
        </label>
        <label htmlFor="id">
          <p>Id</p>
          <input type="text"
            id='identificador'
            placeholder='9'
          />
        </label>
        <label htmlFor="image">
          <p>Imagen</p>
          <input
            id='imagen'
          />
        </label>
        <label htmlFor="categoria">
          <p>Categoria</p>
          <input
            id='categoria'
          />
        </label>
        <label htmlFor="categoria">
          <p> id de tu Categoria</p>
          <input
            id='categoriaId'
            type='number'
          />
        </label>
        <button type="submit">Da de alta</button>
      </form>
    </div>
  )
}

export default FormularioAlta;