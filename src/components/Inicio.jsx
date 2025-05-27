import React from "react";
import { useState } from "react";

const images = [
    "https://dasavena.com/cdn/shop/files/WhatsApp_Image_2025-05-20_at_8.23.08_p.m..jpg?v=1747797813&width=3043",
    "https://dasavena.com/cdn/shop/files/WhatsApp_Image_2025-05-20_at_8.19.38_p.m..jpg?v=1747797588&width=3840%203840w,%20//dasavena.com/cdn/shop/files/WhatsApp_Image_2025-05-20_at_8.19.38_p.m..jpg?v=1747797588&width=3000%203000w,%20//dasavena.com/cdn/shop/files/WhatsApp_Image_2025-05-20_at_8.19.38_p.m..jpg?v=1747797588&width=2400%202400w,%20//dasavena.com/cdn/shop/files/WhatsApp_Image_2025-05-20_at_8.19.38_p.m..jpg?v=1747797588&width=1920%201920w,%20//dasavena.com/cdn/shop/files/WhatsApp_Image_2025-05-20_at_8.19.38_p.m..jpg?v=1747797588&width=1500%201500w,%20//dasavena.com/cdn/shop/files/WhatsApp_Image_2025-05-20_at_8.19.38_p.m..jpg?v=1747797588&width=1370%201370w,%20//dasavena.com/cdn/shop/files/WhatsApp_Image_2025-05-20_at_8.19.38_p.m..jpg?v=1747797588&width=1100%201100w,%20//dasavena.com/cdn/shop/files/WhatsApp_Image_2025-05-20_at_8.19.38_p.m..jpg?v=1747797588&width=720%20720w,%20//dasavena.com/cdn/shop/files/WhatsApp_Image_2025-05-20_at_8.19.38_p.m..jpg?v=1747797588&width=660%20660w,%20//dasavena.com/cdn/shop/files/WhatsApp_Image_2025-05-20_at_8.19.38_p.m..jpg?v=1747797588&width=550%20550w,%20//dasavena.com/cdn/shop/files/WhatsApp_Image_2025-05-20_at_8.19.38_p.m..jpg?v=1747797588&width=480%20480w,%20//dasavena.com/cdn/shop/files/WhatsApp_Image_2025-05-20_at_8.19.38_p.m..jpg?v=1747797588&width=360%20360w",
    "https://dasavena.com/cdn/shop/files/WhatsApp_Image_2025-05-20_at_8.14.13_p.m..jpg?v=1747797328&width=3244"
];

const Inicio = () => {
    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="min-h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${images[current]})` }}>
            <div className="absolute top-1/2 left-6 transform -translate-y-1/2 z-10">
                <button
                    onClick={prevSlide}
                    className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-white/80 to-gray-200/80 rounded-full shadow-lg border-2 border-white hover:from-blue-100 hover:to-blue-300 hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    aria-label="Anterior"
                >
                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
            </div>
            <div className="absolute top-1/2 right-6 transform -translate-y-1/2 z-10">
                <button
                    onClick={nextSlide}
                    className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-white/80 to-gray-200/80 rounded-full shadow-lg border-2 border-white hover:from-blue-100 hover:to-blue-300 hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    aria-label="Siguiente"
                >
                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
            <div className="relative z-20">
                <div className="bg-gradient-to-br from-white-80 via-purple-100-80 to-gray-100/80 p-20  rounded-3xl shadow-2xl border border-purple-200 backdrop-blur-md flex flex-col items-center max-w-md mx-auto">
                    <div className="mb-4">
                        <svg className="w-14 h-14 text-purple-400 drop-shadow-lg" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#e0f2fe" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8M12 8v8" stroke="#60a5fa" strokeWidth="2" />
                        </svg>
                    </div>
                    <h1 className="text-4xl font-extrabold text-purple-700 mb-2 drop-shadow">Bienvenido</h1>
                    <p className="text-purple-700 text-lg mb-4 text-center">Este es el inicio de tu aplicación.</p>
                    <div className="flex flex gap-2 mt-2">
                        <span className="inline-block w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
                        <span className="inline-block w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
                        <span className="inline-block w-2 h-2 bg-purple-300 rounded-full animate-pulse"></span>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Inicio;