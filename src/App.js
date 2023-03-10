import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Categories from './pages/Categories';
import Price from './pages/Price';
import Menu from './components/Menu';
import OnliProduct from './components/OnliProduct';
import FormAlta from './pages/FormAlta';
import OnliCategory from './components/OnliCategory';
import FormAltaCategory from './pages/FormAltaCategory';

const App = () => {
  return (
    <>
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<OnliProduct />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/categories/:id' element={<OnliCategory />} />
          <Route path='/price' element={<Price />} />
          <Route path='/alta' element={<FormAlta />} />
          <Route path='/altaCategory' element={<FormAltaCategory />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;