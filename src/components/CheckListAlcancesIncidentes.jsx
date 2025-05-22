import React, { useState } from "react";
import { Link } from "react-router-dom";


const checklistItems = [
    {
        section: "A. Detección",
        items: [
            "¿Se ha identificado el incidente claramente?",
            "¿El incidente fue reportado por un usuario o detectado automáticamente?",
            "¿Se cuenta con evidencias (capturas, registros, logs)?",
        ],
    },
    {
        section: "B. Clasificación del incidente",
        items: [
            "¿Se ha evaluado la severidad del incidente?",
            "¿Está documentado el impacto en usuario y sistemas?",
        ],
    },
    {
        section: "C. Comunicación",
        items: [
            "¿Se notificó al equipo responsable de TI?",
            "¿Se informó a los usuarios afectados?",
            "¿Existe un registro de canal y hora de notificación?",
        ],
    },
    {
        section: "D. Contención",
        items: [
            "¿Existe un registro del canal y hora de notificación?",
            "¿Se aisló el sistema o componentes afectados?",
        ],
    },
    {
        section: "E. Resolución",
        items: [
            "¿Se aplicó un procedimiento de corrección?",
            "¿Se verificó la funcionalidad después de aplicar la solución?",
        ],
    },
    {
        section: "F. Documentación",
        items: [
            "¿El incidente fue documentado en el sistema de gestión de incidentes?",
            "¿Se actualizó la base de conocimientos con lecciones aprendidas?",
        ],
    },
];


const severities = [
    {
        nivel: "Crítico",
        descripcion: "Afecta servicios vitales; requiere acción urgente",
        ejemplo: "Caída de servidor principal, pérdida de red",
    },
    {
        nivel: "Alto",
        descripcion: "Afecta funciones importantes; requiere pronta solución",
        ejemplo: "Fallo en autenticación, corrupción de archivos",
    },
    {
        nivel: "Medio",
        descripcion: "Afecta parcialmente a usuarios o área específica",
        ejemplo: "Lentitud en la red, error en aplicación secundaria",
    },
    {
        nivel: "Bajo",
        descripcion: "No impacta el servicio, pero requiere atención",
        ejemplo: "Advertencias, mensajes de error menores",
    },
];

const responsables = [
    {
        rol: "Técnico de primer nivel",
        funcion: "Recepción y registro de incidente",
    },
    {
        rol: "Administrador de sistemas",
        funcion: "Análisis, contención y resolución de fallos.",
    },
    {
        rol: "Coordinador TI",
        funcion: "Validación del proceso y cierre del incidente",
    },
    {
        rol: "Responsable de documentación",
        funcion: "Registro, seguimiento y cierre formal en el sistema de gestión",
    },
];

export default function CheckListAlcancesIncidentes() {
    const [checked, setChecked] = useState({});
    

    const handleCheck = (sectionIdx, itemIdx) => {
        setChecked((prev) => ({
            ...prev,
            [`${sectionIdx}-${itemIdx}`]: !prev[`${sectionIdx}-${itemIdx}`],
        }));
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow">
            <h1 className="text-2xl font-bold mb-2 text-blue-800">Checklist de Alcances e Incidentes</h1>
            <p className="mb-4 text-gray-700">
                <span className="font-semibold">Objetivo:</span> Establecer un listado de verificación para identificar, clasificar y evaluar el alcance de incidentes y fallos tecnológicos que puedan afectar la operación de los sistemas de información, con el fin de garantizar una respuesta efectiva.
            </p>
            <p className="mb-4 text-gray-700">
                <span className="font-semibold">Alcance:</span> Aplica a todos los incidentes relacionados con la infraestructura tecnológica de la organización, incluyendo software, hardware, red, base de datos y servicios en la nube.
            </p>

            <h2 className="text-lg font-semibold mt-6 mb-2 text-blue-700">Clasificación de incidencias</h2>
            <table className="w-full mb-6 border text-sm">
                <thead>
                    <tr className="bg-blue-100">
                        <th className="border px-2 py-1">Nivel de Severidad</th>
                        <th className="border px-2 py-1">Descripción</th>
                        <th className="border px-2 py-1">Ejemplo</th>
                    </tr>
                </thead>
                <tbody>
                    {severities.map((sev) => (
                        <tr key={sev.nivel}>
                            <td className="border px-2 py-1">{sev.nivel}</td>
                            <td className="border px-2 py-1">{sev.descripcion}</td>
                            <td className="border px-2 py-1">{sev.ejemplo}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2 className="text-lg font-semibold mb-2 text-blue-700">Checklist de detección y respuesta</h2>
            <div className="space-y-4">
                {checklistItems.map((section, sectionIdx) => (
                    <div key={section.section}>
                        <h3 className="font-semibold text-blue-600 mb-1">{section.section}</h3>
                        <ul className="space-y-1">
                            {section.items.map((item, itemIdx) => (
                                <li key={item} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="mr-2 accent-blue-600"
                                        checked={!!checked[`${sectionIdx}-${itemIdx}`]}
                                        onChange={() => handleCheck(sectionIdx, itemIdx)}
                                    />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <h2 className="text-lg font-semibold mt-6 mb-2 text-blue-700">Responsables</h2>
            <table className="w-full border text-sm">
                <thead>
                    <tr className="bg-blue-100">
                        <th className="border px-2 py-1">Rol</th>
                        <th className="border px-2 py-1">Función</th>
                    </tr>
                </thead>
                <tbody>
                    {responsables.map((resp) => (
                        <tr key={resp.rol}>
                            <td className="border px-2 py-1">{resp.rol}</td>
                            <td className="border px-2 py-1">{resp.funcion}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}