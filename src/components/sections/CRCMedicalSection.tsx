"use client";

import { motion } from "framer-motion";
import { Eye, BrainCircuit, Activity, Ear } from "lucide-react";

export default function CRCMedicalSection() {
    const exams = [
        { title: "Optometría", icon: <Eye size={36} />, desc: "Evaluación de agudeza visual y visión periférica." },
        { title: "Psicología", icon: <BrainCircuit size={36} />, desc: "Pruebas de coordinación motriz y tiempos de reacción." },
        { title: "Fonoaudiología", icon: <Ear size={36} />, desc: "Examen de capacidad auditiva para conducción segura."},
        { title: "Medicina General", icon: <Activity size={36} />, desc: "Valoración física integral y antecedentes médicos." },
    ];

    return (
        <section id="medico" className="py-24 bg-white border-b border-gray-100 relative">
            <div className="container mx-auto px-4 lg:px-8">

                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Info Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/3"
                    >
                        <div>
                            <img src="/images/logocrc.png" width={250} height={200} alt="logo crc"/>
                        </div> 
                        <h2 className="text-4xl font-bold mb-6 text-gray-900">Exámenes Médicos Certificados</h2>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            Realiza tus exámenes médicos en nuestro Centro de Reconocimiento de Conductores (CRC) aliado. Contamos con profesionales certificados para garantizar un proceso ágil y seguro.
                        </p>
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-center gap-3 text-gray-700 font-medium">
                                <div className="w-6 h-6 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green">✓</div>
                                Aprobación el mismo día
                            </li>
                            <li className="flex items-center gap-3 text-gray-700 font-medium">
                                <div className="w-6 h-6 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green">✓</div>
                                Reporte directo al RUNT
                            </li>
                            <li className="flex items-center gap-3 text-gray-700 font-medium">
                                <div className="w-6 h-6 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green">✓</div>
                                Equipos de última tecnología
                            </li>
                        </ul>
                    </motion.div>

                    {/* Cards Side */}
                    <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6 relative">
                        {/* Elemento decorativo */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-green/5 rounded-full blur-3xl -z-10" />

                        {exams.map((exam, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.15 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform transition-all group hover:shadow-2xl hover:border-brand-green/30"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-brand-green mb-6 transition-colors group-hover:bg-brand-green/10">
                                    {exam.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900">{exam.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{exam.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
