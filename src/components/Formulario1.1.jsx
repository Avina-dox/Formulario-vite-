import React from "react";

const FormularioDatosGenerales = () => {
    return (
        <form className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md space-y-8">
            <h2 className="text-2xl font-bold mb-4">Datos Generales</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block font-medium">Fecha de Recepción</label>
                    <input type="date" className="mt-1 w-full border rounded px-2 py-1" />
                </div>
                <div>
                    <label className="block font-medium">Hora de Recepción</label>
                    <input type="time" className="mt-1 w-full border rounded px-2 py-1" />
                </div>
                <div>
                    <label className="block font-medium">Fecha de Entrega</label>
                    <input type="date" className="mt-1 w-full border rounded px-2 py-1" />
                </div>
                <div>
                    <label className="block font-medium">Hora de Entrega</label>
                    <input type="time" className="mt-1 w-full border rounded px-2 py-1" />
                </div>
                <div>
                    <label className="block font-medium">Nombre del Técnico Responsable</label>
                    <input type="text" className="mt-1 w-full border rounded px-2 py-1" />
                </div>
                <div>
                    <label className="block font-medium">Nombre Usuario del Equipo</label>
                    <input type="text" className="mt-1 w-full border rounded px-2 py-1" />
                </div>
                <div>
                    <label className="block font-medium">Equipo / Dispositivo</label>
                    <input type="text" className="mt-1 w-full border rounded px-2 py-1" />
                </div>
                <div>
                    <label className="block font-medium">Marca / Modelo</label>
                    <input type="text" className="mt-1 w-full border rounded px-2 py-1" />
                </div>
                <div>
                    <label className="block font-medium">Número de Serie</label>
                    <input type="text" className="mt-1 w-full border rounded px-2 py-1" />
                </div>
                <div className="md:col-span-2">
                    <label className="block font-medium">Motivo del Mantenimiento</label>
                    <textarea className="mt-1 w-full border rounded px-2 py-1" rows={2} />
                </div>
            </div>

            {/* Recepción (Antes del Mantenimiento) */}
            <section>
                <h3 className="text-xl font-semibold mb-2">Recepción (Antes del Mantenimiento)</h3>
                <div className="space-y-4">
                    {/* 1. Verificación Visual del Equipo */}
                    <div>
                        <label className="font-medium">1. Verificación Visual del Equipo:</label>
                        <div className="ml-4 space-y-2">
                            <div>
                                <input type="checkbox" id="danioFisico" className="mr-2" />
                                <label htmlFor="danioFisico">Daño físico visible (abolladuras, rayones, etc.)</label>
                                <input type="text" placeholder="Descripción del daño" className="ml-2 border rounded px-2 py-1 w-1/2" />
                            </div>
                            <div>
                                <input type="checkbox" id="componentesCompletos" className="mr-2" />
                                <label htmlFor="componentesCompletos">Componentes completos (tornillos, cables, piezas externas)</label>
                                <input type="text" placeholder="Piezas faltantes" className="ml-2 border rounded px-2 py-1 w-1/2" />
                            </div>
                            <div>
                                <input type="checkbox" id="limpiezaEquipo" className="mr-2" />
                                <label htmlFor="limpiezaEquipo">Limpieza del equipo (suciedad, polvo)</label>
                            </div>
                            <div>
                                <input type="checkbox" id="eliminadorFunciona" className="mr-2" />
                                <label htmlFor="eliminadorFunciona">El eliminador (cargador) está en correcto funcionamiento</label>
                            </div>
                            <div>
                                <input type="checkbox" id="danioCargador" className="mr-2" />
                                <label htmlFor="danioCargador">Daño físico al cargador del equipo (abolladuras, rayones, fisuras, etc.)</label>
                                <input type="text" placeholder="Descripción del daño" className="ml-2 border rounded px-2 py-1 w-1/2" />
                            </div>
                        </div>
                    </div>
                    {/* 2. Estado Funcional */}
                    <div>
                        <label className="font-medium">2. Estado Funcional:</label>
                        <div className="ml-4 space-y-2">
                            <div>
                                <input type="checkbox" id="enciendeCorrectamente" className="mr-2" />
                                <label htmlFor="enciendeCorrectamente">El equipo enciende correctamente</label>
                            </div>
                            <div>
                                <input type="checkbox" id="pantallaFunciona" className="mr-2" />
                                <label htmlFor="pantallaFunciona">Pantalla/visualización (si aplica) funciona correctamente</label>
                            </div>
                            <div>
                                <input type="checkbox" id="botonesResponden" className="mr-2" />
                                <label htmlFor="botonesResponden">Botones y controles responden adecuadamente</label>
                            </div>
                            <div>
                                <input type="checkbox" id="sonidoFunciona" className="mr-2" />
                                <label htmlFor="sonidoFunciona">Sonido/altavoces (si aplica) funciona correctamente</label>
                            </div>
                            <div>
                                <input type="checkbox" id="conectividadFunciona" className="mr-2" />
                                <label htmlFor="conectividadFunciona">Conectividad (red, wifi, bluetooth) funcionando</label>
                            </div>
                        </div>
                    </div>
                    {/* 3. Pruebas Iniciales */}
                    <div>
                        <label className="font-medium">3. Pruebas Iniciales:</label>
                        <div className="ml-4 space-y-2">
                            <div>
                                <input type="checkbox" id="pruebaBasica" className="mr-2" />
                                <label htmlFor="pruebaBasica">Prueba de funcionamiento básica realizada</label>
                            </div>
                            <div>
                                <input type="checkbox" id="registroFallos" className="mr-2" />
                                <label htmlFor="registroFallos">Registro de fallos y problemas observados</label>
                            </div>
                            <div>
                                <input type="checkbox" id="comunicacionCliente" className="mr-2" />
                                <label htmlFor="comunicacionCliente">Comunicación con el cliente para confirmar los problemas reportados</label>
                            </div>
                        </div>
                    </div>
                    {/* 4. Condiciones Ambientales del Equipo */}
                    <div>
                        <label className="font-medium">4. Condiciones Ambientales del Equipo:</label>
                        <div className="ml-4 space-y-2">
                            <div>
                                <input type="checkbox" id="temperaturaEquipo" className="mr-2" />
                                <label htmlFor="temperaturaEquipo">Temperatura del equipo (exceso de calor, frío)</label>
                            </div>
                            <div>
                                <input type="checkbox" id="humedadEquipo" className="mr-2" />
                                <label htmlFor="humedadEquipo">Humedad o condiciones externas (si aplica)</label>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Intervención Realizada */}
            <section>
                <h3 className="text-xl font-semibold mb-2">Intervención Realizada (Parte del Mantenimiento)</h3>
                <div className="space-y-4">
                    {/* 1. Servicios Realizados */}
                    <div>
                        <label className="font-medium">1. Servicios Realizados:</label>
                        <div className="ml-4 space-y-2">
                            <div>
                                <input type="checkbox" id="limpiezaInterna" className="mr-2" />
                                <label htmlFor="limpiezaInterna">Limpieza interna y/o externa</label>
                            </div>
                            <div>
                                <input type="checkbox" id="reemplazoPiezas" className="mr-2" />
                                <label htmlFor="reemplazoPiezas">Reemplazo de piezas (especificar cuáles)</label>
                                <input type="text" placeholder="Piezas reemplazadas" className="ml-2 border rounded px-2 py-1 w-1/2" />
                            </div>
                            <div>
                                <input type="checkbox" id="actualizacionSoftware" className="mr-2" />
                                <label htmlFor="actualizacionSoftware">Actualización de software/firmware</label>
                            </div>
                            <div>
                                <input type="checkbox" id="ajustesCalibraciones" className="mr-2" />
                                <label htmlFor="ajustesCalibraciones">Ajustes o calibraciones necesarias</label>
                            </div>
                            <div>
                                <input type="checkbox" id="reemplazoBaterias" className="mr-2" />
                                <label htmlFor="reemplazoBaterias">Reemplazo de baterías o componentes defectuosos</label>
                            </div>
                            <div>
                                <input type="checkbox" id="otrosServicios" className="mr-2" />
                                <label htmlFor="otrosServicios">Otros (especificar):</label>
                                <input type="text" placeholder="Otros servicios" className="ml-2 border rounded px-2 py-1 w-1/2" />
                            </div>
                        </div>
                    </div>
                    {/* 2. Verificación del Correcto Funcionamiento */}
                    <div>
                        <label className="font-medium">2. Verificación del Correcto Funcionamiento:</label>
                        <div className="ml-4 space-y-2">
                            <div>
                                <input type="checkbox" id="pruebaPostMantenimiento" className="mr-2" />
                                <label htmlFor="pruebaPostMantenimiento">Se realizó una prueba post-mantenimiento</label>
                            </div>
                            <div>
                                <input type="checkbox" id="funcionamientoConfirmado" className="mr-2" />
                                <label htmlFor="funcionamientoConfirmado">Funcionamiento confirmado en condiciones normales</label>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Checklist de Entrega */}
            <section>
                <h3 className="text-xl font-semibold mb-2">Checklist de Entrega (Después del Mantenimiento)</h3>
                <div className="space-y-4">
                    {/* 1. Verificación Visual del Equipo */}
                    <div>
                        <label className="font-medium">1. Verificación Visual del Equipo:</label>
                        <div className="ml-4 space-y-2">
                            <div>
                                <input type="checkbox" id="daniosMantenimiento" className="mr-2" />
                                <label htmlFor="daniosMantenimiento">Daños ocasionados durante el mantenimiento (si aplica)</label>
                                <input type="text" placeholder="Especifica" className="ml-2 border rounded px-2 py-1 w-1/2" />
                            </div>
                            <div>
                                <input type="checkbox" id="limpiezaGeneral" className="mr-2" />
                                <label htmlFor="limpiezaGeneral">Limpieza general del equipo</label>
                            </div>
                            <div>
                                <input type="checkbox" id="piezasInstaladas" className="mr-2" />
                                <label htmlFor="piezasInstaladas">Piezas o componentes instalados correctamente</label>
                            </div>
                            <div>
                                <input type="checkbox" id="cablesConexiones" className="mr-2" />
                                <label htmlFor="cablesConexiones">Cables y conexiones en su lugar</label>
                            </div>
                        </div>
                    </div>
                    {/* 2. Estado Funcional */}
                    <div>
                        <label className="font-medium">2. Estado Funcional:</label>
                        <div className="ml-4 space-y-2">
                            <div>
                                <input type="checkbox" id="enciendeEntrega" className="mr-2" />
                                <label htmlFor="enciendeEntrega">El equipo enciende correctamente</label>
                            </div>
                            <div>
                                <input type="checkbox" id="pantallaEntrega" className="mr-2" />
                                <label htmlFor="pantallaEntrega">Pantalla/visualización (si aplica) funciona adecuadamente</label>
                            </div>
                            <div>
                                <input type="checkbox" id="controlesEntrega" className="mr-2" />
                                <label htmlFor="controlesEntrega">Todos los controles responden adecuadamente</label>
                            </div>
                            <div>
                                <input type="checkbox" id="redEntrega" className="mr-2" />
                                <label htmlFor="redEntrega">Funcionalidad completa de red, wifi, bluetooth (si aplica)</label>
                            </div>
                            <div>
                                <input type="checkbox" id="sonidoEntrega" className="mr-2" />
                                <label htmlFor="sonidoEntrega">Sonido/altavoces funcionando bien (si aplica)</label>
                            </div>
                        </div>
                    </div>
                    {/* 3. Pruebas Finales */}
                    <div>
                        <label className="font-medium">3. Pruebas Finales:</label>
                        <div className="ml-4 space-y-2">
                            <div>
                                <input type="checkbox" id="pruebaFinal" className="mr-2" />
                                <label htmlFor="pruebaFinal">Prueba de funcionamiento realizada</label>
                            </div>
                            <div>
                                <input type="checkbox" id="cumpleExpectativas" className="mr-2" />
                                <label htmlFor="cumpleExpectativas">El equipo cumple con las expectativas del cliente</label>
                            </div>
                            <div>
                                <input type="checkbox" id="softwareVerificado" className="mr-2" />
                                <label htmlFor="softwareVerificado">Se verifica el software actualizado (si aplica)</label>
                            </div>
                        </div>
                    </div>
                    {/* 4. Recomendaciones Finales */}
                    <div>
                        <label className="font-medium">4. Recomendaciones Finales:</label>
                        <div className="ml-4 space-y-2">
                            <div>
                                <input type="checkbox" id="instruccionesCliente" className="mr-2" />
                                <label htmlFor="instruccionesCliente">Instrucciones para el cliente sobre el cuidado del equipo</label>
                            </div>
                            <div>
                                <input type="checkbox" id="notasFuturas" className="mr-2" />
                                <label htmlFor="notasFuturas">Notas sobre futuras intervenciones o mantenimiento preventivo</label>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Confirmación de Recepción y Entrega */}
            <section>
                <h3 className="text-xl font-semibold mb-2">Confirmación de Recepción y Entrega</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block font-medium">Firma del Técnico Responsable (Recepción)</label>
                        <input type="text" className="mt-1 w-full border rounded px-2 py-1" />
                    </div>
                    <div>
                        <label className="block font-medium">Firma del Cliente/Usuario (Recepción)</label>
                        <input type="text" className="mt-1 w-full border rounded px-2 py-1" />
                    </div>
                    <div>
                        <label className="block font-medium">Firma del Técnico Responsable (Entrega)</label>
                        <input type="text" className="mt-1 w-full border rounded px-2 py-1" />
                    </div>
                    <div>
                        <label className="block font-medium">Firma del Cliente/Usuario (Entrega)</label>
                        <input type="text" className="mt-1 w-full border rounded px-2 py-1" />
                    </div>
                </div>
            </section>

            <div className="flex justify-end mt-6">
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 font-semibold"
                >
                    Guardar
                </button>
            </div>
        </form>
    );
};

export default FormularioDatosGenerales;