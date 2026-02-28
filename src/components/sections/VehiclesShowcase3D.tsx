"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function VehiclesShowcase3D() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

    const vehicles = [
        {
            title: "Moto",
            desc: "Categorías A1 y A2",
            img: "/images/v2_updates/moto1.jpg",
            backTitle: "Para motocicletas",
            backText: "Plan de formación diseñado para que avances rápido y con seguridad.",
            bullets: ["15 clases teóricas", "7 clases prácticas", "Cada clase: 90 minutos"],
            badge: "A1 / A2",
        },
        {
            title: "Carro",
            desc: "Particular y Servicio Público",
            img: "/images/v2_updates/carro.jpeg",
            backTitle: "Para automóviles",
            twoPlans: [
                {
                    name: "Particular",
                    items: ["16 clases teóricas", "10 clases prácticas", "Cada clase: 90 minutos"],
                },
                {
                    name: "Servicio público",
                    items: ["18 clases teóricas", "15 clases prácticas", "Cada clase: 90 minutos"],
                },
            ],
            badge: "B1 / C1",
        },
        {
            title: "Camioneta",
            desc: "Categoría C2 y C3",
            img: "/images/v2_updates/camioneta.jpeg",
            backTitle: "Para Camioneta",
            backText:
                "Formación especializada para vehículos de mayor tamaño y exigencia operativa.",
            twoPlans: [
                {
                    name: "Particular",
                    items: ["30 clases teóricas", "15 clases prácticas", "Cada clase: 90 minutos"],
                },
            ],
            badge: "C2 / C3",
        },
    ];

    return (
        <section
            ref={containerRef}
            className="relative min-h-[80vh] flex items-center py-20 overflow-hidden bg-gradient-to-br from-[#0f4d28] via-[#10592e] to-brand-green"
            style={{ perspective: "1000px" }}
        >
            {/* Parallax Background Grid */}
            <motion.div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    y: bgY,
                    backgroundImage:
                        "linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                    transform: "rotateX(60deg) scale(2)",
                    transformOrigin: "top",
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

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
                    {vehicles.map((vehicle, i) => (
                        <FlipCard key={i} vehicle={vehicle} priority={i === 0} />
                    ))}
                </div>
            </div>
        </section>
    );
}

interface Vehicle {
    title: string;
    desc: string;
    img: string;
    backTitle: string;
    backText?: string;
    bullets?: string[];
    twoPlans?: { name: string; items: string[] }[];
    badge: string;
}

function FlipCard({
    vehicle,
    priority,
}: {
    vehicle: Vehicle;
    priority: boolean;
}) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        // ✅ Contenedor estable: aquí vive el hover, NO se rota
        <motion.div
            className="relative w-full aspect-[4/5]"
            style={{ perspective: "1200px" }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
        >
            {/* ✅ Elemento que rota: se anima por estado, así no “parpadea” */}
            <motion.div
                className="absolute inset-0"
                style={{ transformStyle: "preserve-3d" }}
                animate={{
                    rotateY: isHovered ? 180 : 0,
                    rotateX: isHovered ? 3 : 0,
                    rotateZ: isHovered ? -0.4 : 0,
                }}
                transition={{ type: "spring", stiffness: 160, damping: 18 }}
            >
                {/* ===== FRONT ===== */}
                <div
                    className="absolute inset-0 rounded-3xl overflow-hidden border-4 border-white/20 bg-black/40 backdrop-blur-sm shadow-elegant transition-shadow"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <Image
                        src={vehicle.img}
                        alt={`Vehículo CONDUSER: ${vehicle.title}`}
                        fill
                        className="object-cover transition-transform duration-700"
                        priority={priority}
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-85" />

                    {/* Glow controlado por estado (no depende del hover del elemento que rota) */}
                    <div
                        className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"
                            }`}
                        style={{ boxShadow: "0 0 45px rgba(255,214,0,0.35)" }}
                    />

                    {/* Shine */}
                    <div
                        className="absolute inset-0 z-10 pointer-events-none"
                        style={{
                            background:
                                "linear-gradient(45deg, transparent 0%, rgba(255, 255, 255, 1) 50%, transparent 100%)",
                            transform: isHovered ? "translateX(160%)" : "translateX(-160%)",
                            transition: "transform 900ms ease",
                        }}
                    />

                    {/* Content */}
                    <div className="absolute bottom-6 left-6 right-6 z-20">
                        <div className="flex items-center justify-between gap-3">
                            <h3 className="text-3xl font-black text-white drop-shadow-md">
                                {vehicle.title}
                            </h3>
                            <span className="text-xs font-black bg-brand-yellow text-black px-3 py-1 rounded-full">
                                {vehicle.badge}
                            </span>
                        </div>

                        <p className="text-white/80 text-sm mt-2">{vehicle.desc}</p>

                        <p className="text-white/70 text-sm mt-3">
                            Pasa el mouse para ver el plan
                        </p>
                    </div>
                </div>

                {/* ===== BACK ===== */}
                <div
                    className="absolute inset-0 rounded-3xl border-4 border-white/20 overflow-hidden"
                    style={{
                        transform: "rotateY(180deg)",
                        backfaceVisibility: "hidden",
                        background:
                            "linear-gradient(135deg, rgba(189, 159, 10, 0.97), rgba(255,214,0,0.86))",
                        boxShadow: "0 0 55px rgba(255, 213, 0, 0.68)",
                    }}
                >
                    <div className="absolute inset-0 bg-black/5" />

                    <div className="relative z-10 h-full w-full p-7 flex flex-col justify-between text-brand-black">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-black mb-3">
                                {vehicle.backTitle}
                            </h3>
                            <p className="font-semibold text-base md:text-lg leading-snug">
                                {vehicle.backText}
                            </p>

                            {vehicle.twoPlans ? (
                                <div className="mt-5 grid gap-4">
                                    {vehicle.twoPlans.map((plan: { name: string; items: string[] }, idx: number) => (
                                        <div key={idx} className="bg-white/65 rounded-2xl p-4">
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm font-black">{plan.name}</span>
                                                <span className="text-xs font-black bg-brand-green text-white px-3 py-1 rounded-full">
                                                    {vehicle.badge}
                                                </span>
                                            </div>
                                            <ul className="mt-3 space-y-2">
                                                {plan.items.map((it: string, j: number) => (
                                                    <li key={j} className="text-sm font-bold">
                                                        • {it}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <ul className="mt-5 space-y-2">
                                    {vehicle.bullets?.map((b: string, idx: number) => (
                                        <li
                                            key={idx}
                                            className="bg-white/65 rounded-xl px-4 py-2 text-sm font-bold"
                                        >
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>


                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}