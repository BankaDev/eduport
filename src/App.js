import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/homepage';
import Products from './components/products';
import Faculty from './components/faculty';
import ContactUs from './components/contact-us';
import Login from './components/login';
import NotFound from './components/not-found';
import Test from './components/test';




function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path='/products' element={<Products />} />
          <Route path='/faculty' element={<Faculty />} />
          <Route path='/contact-us' element={<ContactUs />} />
          {/* <Route path='/login' element={<Login />} /> */}
          <Route path='*' element={<NotFound />} /> 

          <Route path='/test' element={<Test />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
