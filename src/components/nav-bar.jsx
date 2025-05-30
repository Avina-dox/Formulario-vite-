import React from "react";

import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";


const NavBar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className="bg-[#6A2C75] px-6 py-4 shadow-xl border-b-2 border-fuchsia-500/50 backdrop-blur-md">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center space-x-10" >
                    <img
                        src="https://dasavena.com/cdn/shop/files/NuevoLogoDasavena.png?v=1740593766&width=165%20165w,//dasavena.com/cdn/shop/files/NuevoLogoDasavena.png?v=1740593766&width=330%20330w,//dasavena.com/cdn/shop/files/NuevoLogoDasavena.png?v=1740593766&width=535%20535w,//dasavena.com/cdn/shop/files/NuevoLogoDasavena.png?v=1740593766&width=750%20750w,//dasavena.com/cdn/shop/files/NuevoLogoDasavena.png?v=1740593766%20760w"
                        alt="Dasavena Logo"
                        className="w-10 h-10 object-contain rounded-full shadow-md bg-white"
                    />
                    <span className="text-purple-100 font-serif text-3xl tracking-widest drop-shadow-lg select-none ">
                        Dasavena TI
                    </span>
                </div>
                <ul className="flex space-x-8 items-center">
                    <li>
                        <Link
                            to="/"
                            className="relative text-purple-200 hover:text-white transition-colors duration-200 font-semibold px-3 py-1 rounded-lg hover:bg-purple-700/30 focus:outline-none focus:ring-2 focus:ring-purple-400"
                        >
                            <span className="before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-purple-400 before:transition-all before:duration-300 hover:before:w-full">
                                Inicio
                            </span>
                        </Link>
                    </li>
                    <li></li>
                    <li className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setDropdownOpen((open) => !open)}
                            className="relative text-purple-200 hover:text-white transition-colors duration-200 font-semibold px-3 py-1 rounded-lg hover:bg-cyan-700/30 focus:outline-none focus:ring-2 focus:ring-purple-400 flex items-center"
                        >
                            <span className="before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-purple-400 before:transition-all before:duration-300 group-hover:before:w-full">
                                Menú
                            </span>
                            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {dropdownOpen && (
                            <ul className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg transition-opacity duration-200 z-100 py-2">
                                <li>
                                    <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-cyan-100 rounded-b-lg" onClick={() => setDropdownOpen(false)}>Inicio</Link>
                                </li>
                                <li>
                                    <Link to="/incidentes" className="block px-4 py-2 text-gray-700 hover:bg-cyan-100 rounded-b-lg" onClick={() => setDropdownOpen(false)}>Alcances Incidentes</Link>
                                </li>
                                <li>
                                    <Link to="/recepcion" className="block px-4 py-2 text-gray-700 hover:bg-cyan-100 rounded-b-lg" onClick={() => setDropdownOpen(false)}>Recepción y entrega</Link>
                                </li>
                                <li>
                                    <Link to="/configuracion" className="block px-4 py-2 text-gray-700 hover:bg-cyan-100" onClick={() => setDropdownOpen(false)}>Configuración</Link>
                                </li>
                                <li>
                                    <Link to="/logout" className="block px-4 py-2 text-gray-700 hover:bg-cyan-100 rounded-b-lg" onClick={() => setDropdownOpen(false)}>Cerrar sesión</Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <Link
                            to="/acerca"
                            className="relative text-purple-200 hover:text-white transition-colors duration-200 font-semibold px-3 py-1 rounded-lg hover:bg-purple-700/30 focus:outline-none focus:ring-2 focus:ring-purple-400"
                        >
                            <span className="before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-purple-400 before:transition-all before:duration-300 hover:before:w-full">
                                Acerca
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/CalendarioTI"
                            className="relative text-purple-200 hover:text-white transition-colors duration-200 font-semibold px-3 py-1 rounded-lg hover:bg-purple-700/30 focus:outline-none focus:ring-2 focus:ring-purple-400"
                        >
                            <span className="before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-purple-400 before:transition-all before:duration-300 hover:before:w-full">
                                Calendario
                            </span>
                        </Link>
                    </li>
                   
                    
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;