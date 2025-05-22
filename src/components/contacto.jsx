import React from "react";

const Contacto = () => (
    <div>
        <h2 className="text-2xl font-bold mb-4">Contacto</h2>
        <p className="mb-4">
            Si tienes alguna pregunta o necesitas más información, no dudes en contactarnos.
        </p>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
                    Nombre
                </label>
                <input
                    type="text"
                    id="nombre"
                    placeholder="Tu nombre"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Correo Electrónico
                </label>
                <input
                    type="email"
                    id="email"
                    placeholder="Tu correo electrónico"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mensaje">
                    Mensaje
                </label>
                <textarea
                    id="mensaje"
                    placeholder="Escribe tu mensaje aquí..."
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                ></textarea>
            </div>
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Enviar
            </button>
        </form>


    </div>
)
export default Contacto;
// <div className="flex items-center justify-center min-h-screen bg-gray-100">