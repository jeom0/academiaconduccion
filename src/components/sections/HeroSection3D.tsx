"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function HeroSection3D() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
    const y2 = useTransform(scrollY, [0, 1000], [0, -100]);

    return (
        <section className="relative min-h-screen bg-brand-green flex items-center justify-center overflow-hidden pt-20">
            {/* 3D Floating Elements Background */}

            {/* Cono 3D */}
            <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                style={{ y: y1 }}
                className="absolute left-4 lg:left-10 top-1/4 w-24 h-24 opacity-80 z-0"
            >
                <div className="w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[60px] border-b-orange-500 drop-shadow-2xl"></div>
                <div className="w-16 h-3 bg-orange-600 rounded-full blur-sm mt-1 mx-auto hidden md:block"></div>
            </motion.div>

            {/* Señal de tránsito */}
            <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                style={{ y: y2 }}
                className="absolute right-4 lg:right-20 top-1/3 w-20 h-20 bg-brand-yellow rounded-full border-4 border-white flex items-center justify-center opacity-80 shadow-elegant shadow-white/20 z-0"
            >
                <span className="text-brand-green font-bold text-xl">60</span>
            </motion.div>

            {/* Auto ilustrado cruzando la pantalla */}
            <motion.div
                animate={{ x: ['-20vw', '120vw'] }}
                transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                className="absolute bottom-20 left-0 w-48 h-16 opacity-30 z-0 bg-white/20 rounded-t-2xl rounded-b-lg backdrop-blur-sm"
            />

            {/* Partículas suaves flotantes */}
            {[...Array(12)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [0, -100, 0],
                        opacity: [0, 0.5, 0],
                        scale: [1, 1.5, 1]
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 4 + Math.random() * 4,
                        delay: Math.random() * 2,
                        ease: "easeInOut"
                    }}
                    className="absolute w-1.5 h-1.5 bg-white rounded-full z-0"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`
                    }}
                />
            ))}

            <div className="container mx-auto px-4 z-10 grid lg:grid-cols-2 gap-12 items-center">
                {/* Texto Hero */}
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
                        Acompañamiento completo, instalaciones modernas y preparación experta para tu proceso y el examen CALE en Dosquebradas.
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

                {/* Imagen Hero */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative perspective-1000"
                >
                    <motion.div
                        whileHover={{ rotateY: -10, rotateX: 5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 transform-style-3d bg-brand-greenHover flex items-center justify-center"
                    >
                        {/* 
                         * ==========================================
                         * INSTRUCCIÓN PARA CAMBIAR FOTO HEROE
                         * ==========================================
                         * Cambia el valor de `src` abajo por la ruta de tu nueva foto.
                         * Por ejemplo: src="/images/v2_updates/FMPH0001.png"
                         */}
                        <div className="absolute inset-0 bg-black/10 z-10 transition-opacity hover:opacity-0" />

                        <Image
                            src="/images/v2_updates/FMPH0006.png"
                            alt="Fachada de la Academia CONDUSER"
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
