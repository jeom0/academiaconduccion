"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function VehiclesShowcase3D() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-[80vh] flex items-center py-20 overflow-hidden perspective-1000 bg-gradient-to-br from-[#0f4d28] via-[#10592e] to-brand-green"
        >
            {/* Parallax Background Grid */}
            <motion.div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    y: bgY,
                    backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                    transform: "rotateX(60deg) scale(2)",
                    transformOrigin: "top"
                }}
            />

            <div className="container mx-auto px-4 z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg"
                    >
                        Flota de <span className="text-brand-yellow">Último Modelo</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-white/80 text-xl max-w-2xl mx-auto"
                    >
                        Aprende a conducir en vehículos modernos, cómodos y seguros para una experiencia de aprendizaje superior.
                    </motion.p>
                </div>

                {/* 3D Showcase Cards */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto perspective-1000 mt-12">
                    {[
                        { title: "Motocicletas", desc: "Categorías A1 y A2", img: "/images/v2_updates/FMPH0039.png" },
                        { title: "Automóviles", desc: "Categoría B1 y C1", img: "/images/v2_updates/FMPH0048.png" },
                        { title: "Camionetas y Vans", desc: "Categoría C2 y C3", img: "/images/v2_updates/FMPH0057.png" }
                    ].map((vehicle, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50, rotateX: 20 }}
                            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: i * 0.2, type: "spring", stiffness: 100 }}
                            whileHover={{ y: -15, rotateY: 5, rotateX: 5, scale: 1.05 }}
                            className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden border-4 border-white/20 bg-black/40 backdrop-blur-sm cursor-pointer group transform-style-3d shadow-elegant hover:shadow-glow-yellow transition-shadow"
                        >
                            {/* 
                             * ==========================================
                             * INSTRUCCIÓN PARA CAMBIAR FOTO DE VEHÍCULO
                             * ==========================================
                             * Encuentra la variable del arreglo mapeado arriba.
                             * Cambia `vehicle.img` por la foto de tu moto/carro/camioneta.
                             */}
                            <Image
                                src={vehicle.img}
                                alt={`Vehículo CONDUSER: ${vehicle.title}`}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                            {/* Shine effect on hover */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 z-10" />

                            {/* Content */}
                            <div className="absolute bottom-6 left-6 right-6 z-20 transform group-hover:translate-y-[-10px] transition-transform duration-500">
                                <h3 className="text-2xl font-black text-white mb-1 shadow-black drop-shadow-md">{vehicle.title}</h3>
                                <p className="text-brand-yellow font-bold text-sm bg-black/50 inline-block px-3 py-1 rounded-full">{vehicle.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
