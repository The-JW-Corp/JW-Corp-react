import React from 'react'
import Home from "./page/Home/Home";
import Services from './page/Services/Services';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Services' element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;