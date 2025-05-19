import { useState } from 'react';


const FormularioRecepcionEntrega = () => {
  const [formData, setFormData] = useState({
    equipo: '',
    numeroSerie: '',
    estado: 'entregar', // 'entregar' o 'recibir'
    fechaEntrega: '',
    fechaRecepcion: '',
    mantenimientoDescripcion: '',
    observaciones: '',
    firmaResponsable: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes procesar los datos o enviarlos a un servidor
    console.log('Datos del formulario:', formData);
  };

  return (
     <div class="">  
        <h1 class="p-10">Formulario de Recepción y Entrega de Equipos</h1>
    <div class="justify-center bg-gray-100 flex h-dvh p-10 mt-5 mr-5 ml-5 rounded-sm">
      
      <form onSubmit={handleSubmit}>
        <div>
          <label class="ml-2">Equipo:</label> <br />
          <input class="bg-white rounded-xs mt-2 outline-2 w-100"
            type="text"
            name="equipo"
            value={formData.equipo}
            onChange={handleChange}
            required
          />
        </div>
        
        
        <h3 class="">Estado funcional</h3>
        
        <div class="Container-checbox">
          <input type="checkbox" />
          <label >EL equipo enciende correctamente</label> <br />
          <input type="checkbox" />
          <label >Estado de la bateria </label>
          <label>establecer si necesita cambio o el porcentaje de vida util </label> <input type="text" /><br /> 
          <input type="checkbox" />
          <label >Componenetes completos (tornillos, rayones, etc)</label> <br />
          <input type="checkbox" />
          <label >limpieza de equipos (suciedad, polvo)</label> <br />
          <input type="checkbox" />
          <label >EL equipo enciende correctamente</label> <br />
        </div>
        

        

        <div>
          <label>Número de Serie:</label><br />
          <input class="bg-white rounded-xs mt-2 outline-2 w-100"
            type="text"
            name="numeroSerie"
            value={formData.numeroSerie}
            onChange={handleChange}
            required
          />
        </div>

        <div class="">
          <label >Estado:</label>
          <select class="bg-white rounded-sm p-0 m-2"
            name="estado"
            value={formData.estado}
            onChange={handleChange}
            required
          >
            <option class="bg-white" value="entregar">A Entregar</option>
            <option class="bg-white" value="recibir">A Recibir</option>
          </select>
        </div>

        {formData.estado === 'entregar' && (
          <div>
            <label>Fecha de Entrega:</label>
            <input 
              type="date"
              name="fechaEntrega"
              value={formData.fechaEntrega}
              onChange={handleChange}
              required
            />
          </div>
        )}

        {formData.estado === 'recibir' && (
          <div>
            <label>Fecha de Recepción:</label>
            <div class="">
            <input classs="bg-white"
              type="date"
              name="fechaRecepcion"
              value={formData.fechaRecepcion}
              onChange={handleChange}
              required
            />
            </div>
          </div>
        )}

        <div className='flex'>
          <label class="">Descripción del Mantenimiento:</label>
          <textarea class="bg-white rounded-sm m-1 mt-1 pl-1 outline"
            name="mantenimientoDescripcion"
            value={formData.mantenimientoDescripcion}
            onChange={handleChange}
            required
          />
        </div>

        <div class="flex"> 
          <label>Observaciones:</label>
          <textarea class="bg-white rounded-sm ml-30 pl-1 outline  "
            name="observaciones"
            value={formData.observaciones}
            onChange={handleChange}
          />
        </div>

        <div class="mt-5">
          <label>Firma del Responsable:</label>
          <input class="outline rounded -sm pl-1 ml-15"
            type="text"
            name="firmaResponsable"
            value={formData.firmaResponsable}
            onChange={handleChange}
            required
          />
        </div>

        <button class="button outline rounded-sm w-100 mt-10" type="submit">Enviar</button>
      </form>
    </div>
    </div>
  );
};

export default FormularioRecepcionEntrega;
