import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Products from './components/products';
import Faculty from './components/faculty';
import ContactUs from './components/contact-us';
import Login from './components/login';
import NotFound from './components/not-found';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/faculty' element={<Faculty />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NotFound />} /> 

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
