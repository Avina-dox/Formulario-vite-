import React from "react";

const menuItems = [
    { label: "Perfil", icon: "👤" },
    { label: "Notificaciones", icon: "🔔" },
    { label: "Seguridad", icon: "🔒" },
    { label: "Preferencias", icon: "⚙️" },
    { label: "Cerrar sesión", icon: "🚪" },
];

const Configuracion = () => (
    <div className="w-full max-w-sm mx-auto mt-10 bg-white rounded-lg shadow-lg mb-30">
        <h2 className="text-2xl font-bold text-center py-4 border-b">Configuración</h2>
        <ul className="divide-y">
            {menuItems.map((item) => (
                <li
                    key={item.label}
                    className="flex items-center px-6 py-4 hover:bg-gray-100 cursor-pointer transition"
                >
                    <span className="text-xl mr-4">{item.icon}</span>
                    <span className="text-gray-700">{item.label}</span>
                </li>
            ))}
        </ul>
    </div>
);

export default Configuracion;