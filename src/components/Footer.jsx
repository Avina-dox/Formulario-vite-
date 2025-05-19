import React from "react";

const Footer = () => (
    <footer className="bg-gray-800 text-white py-6 mt-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
            <span className="text-sm mb-2 md:mb-0">
                © {new Date().getFullYear()} Formulario Recepción. Todos los derechos reservados.
            </span>
            <div className="flex space-x-4">
                <a
                    href="#"
                    className="hover:text-gray-300 transition-colors"
                >
                    Aviso de Privacidad
                </a>
                <a
                    href="#"
                    className="hover:text-gray-300 transition-colors"
                >
                    Contacto
                </a>
            </div>
        </div>
    </footer>
);

export default Footer;