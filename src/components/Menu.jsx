import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Menu.css';


function Menu() {
  return (
    <nav className='Nav'>
      <div>
        <p>Mi tiendita</p>
      </div>
      <div>
        <ul className='LinksContainer'>
          {
            routes.map((route) => (
              <li className='Links__li'>
                <NavLink to={route.to} className='Links__li--name' style={({isActive}) => ({color: isActive ? 'black' : 'white'})} key={route.text}>
                  {route.text}
                </NavLink>
              </li>
            ))
          }
        </ul>
      </div>
    </nav>
  )
}

const routes = [];
routes.push({
  to: '/',
  text: 'Home'
})
routes.push({
  to: '/categories',
  text: 'Categories'
})
routes.push({
  to: '/products',
  text: 'Products'
})
routes.push({
  to: '/price',
  text: 'Price'
})
export default Menu;