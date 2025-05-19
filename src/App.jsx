import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import NavBar from './components/nav-bar';
import Footer from './components/footer';
import FormularioRecepcionEntrega from './components/FormularioRecepcionEntrega';


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
