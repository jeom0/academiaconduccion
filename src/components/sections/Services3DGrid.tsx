"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FileText, RefreshCw, ArrowUpCircle, ShieldCheck, ArrowRightLeft, Files } from "lucide-react";

export default function Services3DGrid() {
    const services = [
        {
            title: "Licencias iniciales",
            desc: "Saca tu licencia por primera vez con nuestros cursos teóricos y prácticos.",
            icon: <FileText size={32} className="text-brand-green" />,
            image: "/images/v2_updates/inicial.jpg",
        },
        {
            title: "Refrendación",
            desc: "Renueva tu licencia de conducción vencida fácil y rápido.",
            icon: <RefreshCw size={32} className="text-brand-green" />,
            image: "/images/v2_updates/refrendacion.jpg",
        },
        {
            title: "Recategorización C1 C2 C3",
            desc: "Asciende la categoría de tu licencia para conducir vehículos de mayor tonelaje.",
            icon: <ArrowUpCircle size={32} className="text-brand-green" />,
            image: "/images/v2_updates/categorizacion.jpg",
        },
        {
            title: "SOAT",
            desc: "Adquiere o renueva tu Seguro Obligatorio de Accidentes de Tránsito.",
            icon: <ShieldCheck size={32} className="text-brand-green" />,
            image: "/images/v2_updates/soat.jpg",
        },
        {
            title: "Traspasos y Duplicados",
            desc: "Gestionamos el cambio de propietario de tu vehículo ante el RUNT, ademas, Obtén una copia de tu licencia o documentos rápidamente.",
            icon: <ArrowRightLeft size={32} className="text-brand-green" />,
            image: "/images/v2_updates/tramite.jpg",
        },
        {
            title: "Todo tipo de tramite y Asesorias",
            desc: "Asesorías personalizadas para resolver tus dudas y acompañamiento en todo el proceso.",
            icon: <Files size={32} className="text-brand-green" />,
            image: "/images/v2_updates/FMPH0027.png",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section id="servicios" className="py-24 bg-gray-50 text-gray-900 border-b border-gray-200">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-brand-green">Nuestros Servicios</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Soluciones integrales para todos tus trámites de tránsito en Dosquebradas.
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000"
                >
                    {services.map((srv, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            whileHover={{ rotateY: 5, rotateX: -5, scale: 1.02, y: -10 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 transform-style-3d transition-all duration-300 group"
                        >
                            {/* 
                             * ==========================================
                             * INSTRUCCIÓN PARA CAMBIAR FOTO DE SERVICIO
                             * ==========================================
                             * Las fotos se definen en la variable `services` arriba (línea 8).
                             * Cambia el atributo `image` correspondiente a cada servicio.
                             */}
                            <div className="h-48 bg-gray-200 relative overflow-hidden flex items-center justify-center cursor-pointer">
                                <div className="absolute inset-0 bg-brand-greenHover/10 mix-blend-multiply transition-opacity group-hover:opacity-0 z-10" />
                                <Image
                                    src={srv.image}
                                    alt={srv.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            {/* Contenido */}
                            <div className="p-6 relative">
                                <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 group-hover:-rotate-6 bg-brand-green/10">
                                    {srv.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-gray-800">{srv.title}</h3>
                                <p className="text-gray-600 text-sm">{srv.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
