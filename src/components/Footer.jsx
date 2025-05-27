import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
    <footer className="bg-fuchsia-900/80 text-white py-6 mt-1">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
            <span className="text-sm mb-2 md:mb-0">
                © {new Date().getFullYear()} Dasavena. 2025.
            </span>
            <span className=" text-sm mb-2 md:mb-0  px-2 py-1 rounded-lg ">
            <p class=" font-bold text-purple-400/30 md:mb-0">Desarollado por dasavena Ti</p>

            </span>
            <div className="flex space-x-4">
                <Link
                    to="/Aviso"
                    className="text-gray-300 hover:text-purple-300 transition-colors"
                >
                    Aviso de Privacidad
                </Link>
                <Link
                    to="/contacto"
                    className="text-gray-300 hover:text-purple-300 transition-colors "
                >
                    Contacto 
                </Link> 
                
            </div>
        </div>
    </footer>
);

export default Footer;