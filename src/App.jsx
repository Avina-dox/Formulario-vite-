import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css' // Asegúrate de importar Tailwind si no está en main.jsx
import React from 'react';
import NavBar from './components/nav-bar';
import Footer from './components/footer';
import FormularioRecepcionEntrega from './components/FormularioRecepcionEntrega';
//import FormularioDatosGenerales from './components/FormularioDatosGenerales';



function App() {
  return (
    <div className="App">

      <NavBar />
      <FormularioRecepcionEntrega/>
      <Footer />
    </div>
  );
}



export default App;
