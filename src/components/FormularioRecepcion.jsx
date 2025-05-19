// src/components/FormularioRecepcion.jsx
import React, { useState } from 'react';
import axios from 'axios';

const FormularioRecepcion = () => {
  const [equipo, setEquipo] = useState('');
  const [fechaRecepcion, setFechaRecepcion] = useState('');
  const [estado, setEstado] = useState('');
  const [comentarios, setComentarios] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Cambia la fuente del documento al enviar el formulario
    document.body.style.fontFamily = "'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, 'Noto Sans', sans-serif";
    try {
      const response = await axios.post('http://localhost:5000/api/recepcion', {
        nombre: equipo,
        fechaRecepcion,
        estado,
        comentarios,
      });
      alert('Equipo recibido correctamente');
    } catch (error) {
      alert('Error al registrar la recepción del equipo');
    }
  };

  return (
    <div>
      <h2 class=" ">Formulario de Recepción de Equipo</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Equipo:</label>
          <input
            type="text"
            value={equipo}
            onChange={(e) => setEquipo(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Fecha de Recepción:</label>
          <input
            type="date"
            value={fechaRecepcion}
            onChange={(e) => setFechaRecepcion(e.target.value)}
            required
          />
        </div>
        <div>
          
          <label >Estado del Equipo:</label>
          <input
            type="text"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Comentarios:</label>
          <textarea
            value={comentarios}
            onChange={(e) => setComentarios(e.target.value)}
          />
        </div>
        <button class="#" type="submit">Registrar Recepción</button>
      </form>
    </div>
  );
};

export default FormularioRecepcion;
