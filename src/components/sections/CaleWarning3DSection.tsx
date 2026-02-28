/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

export default function CaleWarning3DSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (isInView && (window as any).fbq) {
            (window as any).fbq('trackCustom', 'VIEW_CALE_SECTION');
        }
    }, [isInView]);

    const handleCaleClick = () => {
        setIsModalOpen(true);
        if ((window as any).fbq) {
            (window as any).fbq('trackCustom', 'CLICK_CALE_CTA');
        }
    };

    return (
        <section id="cale" ref={ref} className="py-24 bg-brand-yellow text-black border-y-8 border-black overflow-hidden relative">
            <div className="container mx-auto px-4 lg:px-8">

                <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col gap-6"
                    >
                        <div className="inline-block bg-black text-brand-yellow font-black px-4 py-1.5 uppercase tracking-widest text-sm rounded-md w-max animate-pulse">
                            Aviso Importante
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-none tracking-tight">
                            Desde el 1 de abril el <span className="text-brand-green">examen CALE</span> es obligatorio
                        </h2>

                        <div className="text-xl font-medium bg-white/40 p-6 rounded-xl border-2 border-black/10 backdrop-blur-sm">
                            <ul className="flex flex-col gap-3">
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-black rounded-full" /> Costo aproximado: <strong>$534.000 COP</strong>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-black rounded-full" /> Incluye examen teorico, examen practico y segunda oportunidad para presentarlo
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-black rounded-full" /> Aplicado por la UNAD
                                </li>
                            </ul>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleCaleClick}
                            className="bg-black text-brand-yellow mt-4 px-8 py-4 rounded-xl font-bold text-lg text-center hover:bg-gray-900 transition-colors border border-black shadow-xl"
                        >
                            Ver detalles del examen
                        </motion.button>
                    </motion.div>

                    {/* Professional 3D Render/Photo Elements */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
                        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, type: "spring", bounce: 0.3 }}
                        className="relative h-[400px] md:h-[500px] flex items-center justify-center perspective-1000"
                        id="seccion-aviso-examen-cale"
                    >
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                            whileHover={{ rotateY: -15, rotateX: 10, scale: 1.05 }}
                            className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] border-8 border-white/10 transform-style-3d bg-black"
                        >
                            {/* 
                             * ==========================================
                             * INSTRUCCIÓN PARA CAMBIAR FOTO DEL EXAMEN CALE
                             * ==========================================
                             * Cambia el valor de `src` abajo para usar tu propia ilustración o render.
                             * Se recomienda una imagen vertical o cuadrada.
                             */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

                            <Image
                                src="/images/FMPH0037.jpg"
                                alt="Ilustración o renderizado 3D de preparación para examen CALE"
                                fill
                                className="object-cover transition-transform duration-700 hover:scale-110"
                            />

                            {/* Floating Badge */}
                            <motion.div
                                style={{ transform: "translateZ(50px)" }}
                                className="absolute bottom-8 left-8 right-8 bg-brand-yellow text-black p-4 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] z-20 font-bold flex items-center justify-center gap-3 backdrop-blur-md"
                            >
                                <span className="text-6xl">💯</span>
                                <div>
                                    <p className="text-sm uppercase tracking-wider text-black/70">Certificación</p>
                                    <p className="text-base leading-tight">Acompañamiento<br />en el proceso</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>

            {/* UNAD CALE Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.9, y: 20, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="bg-white rounded-3xl p-6 md:p-10 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <div className="inline-block bg-brand-yellow font-black px-4 py-1.5 uppercase tracking-widest text-xs rounded-md mb-6">
                                Información Oficial
                            </div>

                            <h3 className="text-2xl md:text-3xl font-black mb-6 text-gray-900 leading-tight">
                                La UNAD operará la evaluación nacional (CALE)
                            </h3>

                            <div className="space-y-4 text-gray-600">
                                <p>
                                    La <strong>Universidad Nacional Abierta y a Distancia (UNAD)</strong> ha sido designada por el Ministerio de Transporte para operar los Centros de Apoyo Logístico de Evaluación (CALE) durante los próximos 20 años.
                                </p>
                                <p>
                                    Este nuevo modelo de <strong>&quot;cero atajos&quot;</strong> busca garantizar que solo conductores idóneos lleguen a las vías, reduciendo la siniestralidad con tecnología de punta y evaluación automatizada.
                                </p>

                                <h4 className="font-bold text-gray-900 mt-6 mb-2">Pilares del nuevo sistema:</h4>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li><strong>Cobertura Nacional Real:</strong> Red de centros de evaluación operados por la UNAD.</li>
                                    <li><strong>Tecnología y Biometría:</strong> Control estricto con validación mediante huella dactilar, firma digital y fotografía para vincular cada paso con el RUNT.</li>
                                    <li><strong>Evaluación sin Subjetividad:</strong> Examen práctico monitoreado por sensores y software avanzado instalado en los vehículos, eliminando por completo el sesgo humano.</li>
                                </ul>

                                <div className="mt-8 p-4 bg-gray-50 rounded-xl border border-brand-green/20">
                                    <p className="text-sm italic">
                                        En <strong className="text-brand-green">CONDUSER</strong> te preparamos íntegramente de manera técnica y práctica para que apruebes este nuevo modelo de evaluación automatizada sin contratiempos.
                                    </p>
                                </div>
                            </div>

                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="mt-8 w-full bg-brand-green text-white font-bold py-4 rounded-xl hover:bg-green-700 transition-colors"
                            >
                                Entendido, cerrar
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
