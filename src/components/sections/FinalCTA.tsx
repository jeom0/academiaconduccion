"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function FinalCTA() {
    const checks = [
        "Aprobación rápida garantizada*",
        "Horarios flexibles de clases",
        "Acompañamiento personalizado",
        "Material de estudio incluido"
    ];

    return (
        <section className="py-24 bg-brand-green relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-10">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full text-white fill-current">
                    <path d="M0 100 C 20 0 50 0 100 100 Z" />
                </svg>
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10 flex flex-col items-center text-center">

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl w-full bg-white rounded-3xl p-10 lg:p-16 shadow-2xl relative overflow-hidden"
                >
                    {/* Inner Glow Spotlight */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-32 bg-brand-green/20 blur-[60px] pointer-events-none rounded-full" />

                    <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight">
                        ¿Listo para tomar <br />el volante?
                    </h2>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Inicia tu proceso hoy con CONDUSER. Somos tu mejor opción en Dosquebradas para obtener o renovar tu licencia.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
                        {checks.map((text, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="flex items-center gap-2 text-gray-800 font-medium"
                            >
                                <CheckCircle2 className="text-brand-green fill-brand-green/20" size={24} />
                                {text}
                            </motion.div>
                        ))}
                    </div>

                    <motion.a
                        whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255,214,0,0.8)" }}
                        whileTap={{ scale: 0.95 }}
                        href="#contacto"
                        className="inline-flex items-center gap-3 bg-brand-yellow text-white shadow-glow-yellow px-10 py-5 rounded-full font-black text-2xl uppercase tracking-wider transition-all hover:bg-white hover:text-brand-green"
                    >
                        Iniciar Trámite Ahora
                        <ArrowRight size={28} />
                    </motion.a>

                    <p className="text-xs text-gray-400 mt-6">*Sujeto a cumplimiento de requisitos RUNT y CRC.</p>
                </motion.div>

            </div>
        </section>
    );
}
