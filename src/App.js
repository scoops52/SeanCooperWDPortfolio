import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import { About, Portfolio, Skills, Contact, Home, Layout, Error404 } from './pages';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='skills' element={<Skills />} />
          <Route path='portfolio' element={<Portfolio />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
