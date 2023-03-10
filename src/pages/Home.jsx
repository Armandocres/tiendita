import React from 'react'
import HomeComponents from '../components/HomeComponents';
import '../styles/Home.css'

const Home = () => {


  return (
    <div className='Home'>
        <HomeComponents descripcion={home?.productos?.descripcion} img={home?.productos?.img} alt={home.productos.alt} text={home.productos.text}/>
        <HomeComponents descripcion={home?.categories?.descripcion} img={home?.categories?.img} alt={home.categories.alt} text={home.productos.text}/>
        <HomeComponents descripcion={home?.precios?.descripcion} img={home?.precios?.img} alt={home.precios.alt} text={home.precios.text}/>
    </div>
  )
}

const home = {
  productos: {
    descripcion: 'Añade, elimina y consulta los productos disponibles en nuestra tienda en linea',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
    img: 'https://emprendepyme.net/wp-content/uploads/2018/02/cualidades-producto-1200x900.jpg',
    alt: 'imagen de productos'
  },
  categories: {
    descripcion: 'Añade, elimina y consulta las categorias disponibles en nuestra tienda en linea',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
    img: 'https://www.azuanet.com/web/common/modulos/noticias/imagenes/20190416211608000000.jpg',
    alt: 'imagen de categorias'
  },
  precios: {
    descripcion: 'Edita precios de productos que esten en nuestra tienda en linea',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
    img: 'https://celestinomartinez.com/wp-content/uploads/2014/04/gestion-de-precios.jpg',
    alt: 'imagen de precios'
  }
}

export default Home;