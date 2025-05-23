import React from 'react';

const Acerca = () => (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8 mt-10 mb-80">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">Acerca de</h2>
        <p className="text-gray-700 mb-3">
            Esta aplicación fue desarrollada para facilitar la recepción y gestión de formularios.
            Permite a los usuarios registrar, consultar y administrar información de manera eficiente.
        </p>
        <p className="text-gray-600">
            Desarrollado por <span className="font-semibold text-blue-600">Diego Aviña</span>. Para más información o soporte, por favor contacta al administrador del sistema.
        </p>
    </div>
);

export default Acerca;