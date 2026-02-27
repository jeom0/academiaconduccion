"use client";

import { motion } from "framer-motion";
import { UserPlus, CreditCard, FileText, Stethoscope, Building2, Car } from "lucide-react";

export default function ProcessTimelineAnimated() {
    const steps = [
        { id: 1, title: "Inscripción RUNT", icon: <UserPlus size={24} />, extra: "Nota: te ayudamos con la inscripcion en el RUNT."  },
        { id: 2, title: "Exámenes médicos", icon: <Stethoscope size={24} /> },
        { id: 3, title: "Registro academia", icon: <CreditCard size={24} /> },
        { id: 4, title: "Formularios", icon: <FileText size={24} /> },
        { id: 5, title: "Inicio de clases teoricas", icon: <Building2 size={24} />},
        { id: 6, title: "Inicio de clases practicas", icon: <Car size={24} /> },
    ];

    return (
        <section id="proceso" className="py-24 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-bold mb-4 text-brand-green">Tu Proceso Paso a Paso</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Obtener tu licencia es muy fácil. Te guiamos en cada etapa para que no te preocupes por nada.
                    </p>
                </div>

                {/* Timeline Horizontal */}
                <div className="relative max-w-6xl mx-auto">

                    {/* Línea animada (Carretera) */}
                    <div className="absolute top-1/2 left-0 w-full h-8 bg-gray-300 -translate-y-1/2 rounded-full hidden lg:block overflow-hidden shadow-inner">
                        <motion.div
                            animate={{ x: [0, 40] }}
                            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                            className="w-[200%] h-full flex items-center"
                            style={{
                                backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 20px, white 20px, white 40px)",
                                backgroundSize: "40px 100%"
                            }}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
                        {steps.map((step, i) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                className="relative flex flex-col items-center"
                            >
                                {/* Number Badge */}
                                <div className="w-10 h-10 rounded-full bg-brand-yellow text-brand-green font-bold flex items-center justify-center text-xl mb-4 shadow-lg border-4 border-white lg:absolute lg:-top-5 z-20">
                                    {step.id}
                                </div>

                                {/* Card */}
                                <motion.div
                                    whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                                    className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex flex-col items-center text-center w-full h-full lg:mt-6 transition-all"
                                >
                                    <div className="w-16 h-16 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green mb-4">
                                        {step.icon}
                                    </div>
                                    <h3 className="font-bold text-gray-800 mb-2">{step.title}</h3>
                                    {step.extra && (
                                        <p className="text-xs text-brand-greenHover font-medium bg-green-50 p-2 rounded-lg mt-auto">
                                            {step.extra}
                                        </p>
                                    )}
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
