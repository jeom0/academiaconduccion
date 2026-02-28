"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function HeroSection3D() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
    const y2 = useTransform(scrollY, [0, 1000], [0, -100]);

    // 🔥 Slider images
    const images = [
        "/images/sedeuno.jpg",
        "/images/sededos.jpg",
        "/images/sedetres.jpg",
        "/images/sedecuatro.jpeg",
        "/images/sedecinco.jpg",
    ];

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="relative min-h-screen bg-brand-green flex items-center justify-center overflow-hidden pt-20">

            {/* ===== FLOATING ELEMENTS ===== */}

            <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                style={{ y: y1 }}
                className="absolute left-4 lg:left-10 top-1/4 w-24 h-24 opacity-80 z-0"
            >
                <div className="w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[60px] border-b-orange-500 drop-shadow-2xl"></div>
            </motion.div>

            <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                style={{ y: y2 }}
                className="absolute right-4 lg:right-20 top-1/3 w-20 h-20 bg-brand-yellow rounded-full border-4 border-white flex items-center justify-center opacity-80 z-0"
            >
                <span className="text-brand-green font-bold text-xl">60</span>
            </motion.div>

            {/* ===== CONTENIDO ===== */}

            <div className="container mx-auto px-4 z-10 grid lg:grid-cols-2 gap-12 items-center">

                {/* TEXTO */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-white"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                        Tu Licencia de Conducción <br />
                        <span className="text-brand-yellow">Sin Complicaciones</span>
                    </h1>

                    <p className="text-lg md:text-xl mb-10 text-white/90 max-w-lg">
                        Acompañamiento completo, instalaciones modernas y preparación experta para tu proceso.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#contacto"
                            className="bg-brand-yellow text-white px-8 py-4 rounded-xl font-bold text-lg shadow-glow-yellow hover:bg-white hover:text-brand-green text-center transition-colors"
                        >
                            Comenzar Ahora
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#servicios"
                            className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 text-center transition-colors"
                        >
                            Ver Servicios
                        </motion.a>
                    </div>
                </motion.div>

                {/* ===== SLIDER HERO ===== */}

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative perspective-1000"
                >
                    <motion.div
                        whileHover={{ rotateY: -10, rotateX: 5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 transform-style-3d"
                    >

                        <AnimatePresence>
                            {images.map((img, index) => (
                                index === current && (
                                    <motion.div
                                        key={img}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 1 }}
                                        className="absolute inset-0"
                                    >
                                        <Image
                                            src={img}
                                            alt={`Sede ${index + 1}`}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </motion.div>
                                )
                            ))}
                        </AnimatePresence>

                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}