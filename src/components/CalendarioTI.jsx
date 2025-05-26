import React, { useState } from "react";

const initialActivities = [
    // Ejemplo: { id: 1, title: "Reunión", date: "2024-06-10", time: "10:00", description: "Reunión con el equipo de TI" }
];

export default function CalendarioTI() {
    const [activities, setActivities] = useState(initialActivities);
    const [form, setForm] = useState({
        title: "",
        date: "",
        time: "",
        description: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.title || !form.date || !form.time) return;
        setActivities([
            ...activities,
            { ...form, id: Date.now() }
        ]);
        setForm({ title: "", date: "", time: "", description: "" });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br to-purple-200 flex flex-col items-center py-10">
            <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-2xl">
                <h1 className="text-3xl font-bold text-purple-300 mb-6 text-center ">Calendario de Actividades TI</h1>
                <h2 class="text-3x1 font-blod text-purple-400 mb-6 text-center">Calendario de Ti </h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <input
                        type="text"
                        name="title"
                        placeholder="Título de la actividad"
                        value={form.title}
                        onChange={handleChange}
                        className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                        required
                    />
                    <input
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                        className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                        required
                    />
                    <input
                        type="time"
                        name="time"
                        value={form.time}
                        onChange={handleChange}
                        className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                        required
                    />
                    <input
                        type="text"
                        name="description"
                        placeholder="Descripción (opcional)"
                        value={form.description}
                        onChange={handleChange}
                        className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                    <button
                        type="submit"
                        className="md:col-span-2 bg-purple-600 text-white font-semibold py-3 rounded hover:bg-purple-700 transition"
                    >
                        Registrar Actividad
                    </button>
                </form>
                <div>
                    <h2 className="text-xl font-semibold text-purple-600 mb-4">Actividades Registradas</h2>
                    {activities.length === 0 ? (
                        <p className="text-gray-500">No hay actividades registradas.</p>
                    ) : (
                        <ul className="space-y-4">
                            {activities
                                .sort((a, b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time))
                                .map((act) => (
                                    <li key={act.id} className="bg-indigo-50 rounded-lg p-4 shadow flex flex-col md:flex-row md:items-center md:justify-between">
                                        <div>
                                            <h3 className="font-bold text-indigo-800">{act.title}</h3>
                                            <p className="text-gray-600">{act.description}</p>
                                        </div>
                                        <div className="mt-2 md:mt-0 text-right">
                                            <span className="inline-block bg-indigo-200 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium mr-2">
                                                {act.date}
                                            </span>
                                            <span className="inline-block bg-indigo-200 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                                                {act.time}
                                            </span>
                                        </div>
                                    </li>
                                ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}