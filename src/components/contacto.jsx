import React from "react";

const Contacto = () => (
    <div class ="flex flex-col items-center justify-center min-h-screen  p-4 ">
        <h2 className="text-4xl font-extrabold mb-2 drop-shadow">Contacto</h2>
        <p className="mb-4">
            Si tienes alguna pregunta o necesitas más información, no dudes en contactarnos.
        </p>
        <form className="bg-gradient-to-br from-white/80 via-purple-100/80 to-gray-100/80 p-10 rounded-3xl shadow-2xl border border-purple-200 backdrop-blur-md flex flex-col items-center max-w-md mx-auto">
            <div className="">
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