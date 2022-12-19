import React from 'react'
import Home from "./page/Home/Home";
import Services from './page/Services/Services';
import Formulaire from "./components/Formulaire/Formulaire"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Services' element={<Services />} />
        {/* <Route path='/Formulaire' element={<Formulaire />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;