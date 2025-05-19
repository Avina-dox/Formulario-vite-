import React from "react";

const NavBar = () => (
    <nav className="bg-blue-600 px-4 py-3 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
            <div className="text-white font-bold text-xl">Mi Aplicación</div>
            <ul className="flex space-x-6">
                <li>
                    <a href="#" className="text-white hover:text-blue-200 transition-colors">
                        Inicio
                    </a>
                </li>
                <li>
                    <a href="#" className="text-white hover:text-blue-200 transition-colors">
                        Acerca
                    </a>
                </li>
                <li>
                    <a href="#" className="text-white hover:text-blue-200 transition-colors">
                        Contacto
                    </a>
                </li>
            </ul>
        </div>
    </nav>
);

export default NavBar;