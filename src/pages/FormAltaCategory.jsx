import React, { useState } from 'react'

const FormAltaCategory = () => {
  const [data, setData] = useState({});
  let URL = 'http://localhost:5000/category'

  function dataPost(e) {
    e.preventDefault()
    const id = parseInt(e.target['id'].value);
    const nombre = e.target['nombre'].value;
    const responsable = e.target['responsable'].value;
    const tipo = e.target['tipo'].value;
    const data = {
      "id": id,
      "nombre": nombre,
      "responsable": responsable,
      "tipo": tipo
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
    window.location.href = '/'
  }

  return (
    <div>
      <form onSubmit={dataPost}>
        <label htmlFor="Id">
          <p>Id del depto</p>
          <input
            type="number"
            id='id'
            placeholder='1'
          />
        </label>
        <label htmlFor="Nombre">
          <p>Nombre</p>
          <input
            type="text"
            id='nombre'
            placeholder='Juanito'
          />
        </label>
        <label htmlFor="responsable">
          <p>Responsable</p>
          <input
            type="text"
            id='responsable'
            placeholder='Armandp'
          />
        </label>
        <label htmlFor="tipo">
          <p>Tipo del depto</p>
          <input
            type="text"
            id='tipo'
            placeholder='Videojuegos'
          />
        </label>
        <button type="submit">Da de alta</button>
      </form>
    </div>
  )
}

export default FormAltaCategory;