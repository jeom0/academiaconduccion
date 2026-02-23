"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";

export default function Testimonials3D() {
    return (
        <section className="py-24 bg-gray-50 border-y border-gray-100 overflow-hidden relative">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-yellow/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-brand-green">Lo que dicen nuestros alumnos</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Miles de conductores confían en CONDUSER para obtener su licencia de manera segura y eficiente.
                    </p>
                </div>

                {/* CSS Carousel / Slider container */}
                <div className="flex w-full overflow-hidden py-10 perspective-1000 -mx-4 px-4 sm:mx-0 sm:px-0">
                    <motion.div
                        animate={{ x: [0, -2000] }}
                        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                        className="flex items-center gap-8 pl-4 lg:pl-0 hover:[animation-play-state:paused]"
                    >
                        {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10, rotateY: 5, rotateX: 5, scale: 1.02 }}
                                className="w-[350px] sm:w-[400px] shrink-0 bg-white p-8 rounded-3xl shadow-lg border border-gray-100 transform-style-3d cursor-ew-resize group"
                            >
                                <Quote className="text-brand-yellow/30 w-16 h-16 absolute top-6 right-6 -z-10 group-hover:text-brand-yellow/50 transition-colors" />

                                <div className="flex gap-1 mb-6">
                                    {[...Array(t.rating)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: i * 0.1 }}
                                        >
                                            <Star className="w-5 h-5 text-brand-yellow fill-brand-yellow" />
                                        </motion.div>
                                    ))}
                                </div>

                                <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                                    &quot;{t.text}&quot;
                                </p>

                                <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                                    {/* 
                                     * ==========================================
                                     * INSTRUCCIÓN PARA CAMBIAR FOTO DE TESTIMONIO
                                     * ==========================================
                                     * Las fotos de testimonios se configuran en el archivo:
                                     * src/data/testimonials.ts
                                     * Ábrelo para editar los nombres, reseñas y la ruta de la foto (`image`).
                                     */}
                                    <div className="w-14 h-14 rounded-full bg-gray-200 overflow-hidden relative">
                                        <Image
                                            src={t.image}
                                            alt={`Foto de perfil de ${t.name}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">{t.name}</h4>
                                        <span className="text-brand-green text-sm font-medium">{t.location}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
