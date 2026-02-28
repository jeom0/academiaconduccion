"use client";

import { motion } from "framer-motion";
import { Eye, BrainCircuit, Activity, Ear } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function CRCMedicalSection() {
    const [index, setIndex] = useState(0);

    const exams = [
        { title: "Optometría", icon: <Eye size={36} />, desc: "Evaluación de agudeza visual y visión periférica." },
        { title: "Psicología", icon: <BrainCircuit size={36} />, desc: "Pruebas de coordinación motriz y tiempos de reacción." },
        { title: "Fonoaudiología", icon: <Ear size={36} />, desc: "Examen de capacidad auditiva para conducción segura." },
        { title: "Medicina General", icon: <Activity size={36} />, desc: "Valoración física integral y antecedentes médicos." },
    ];

    const doctors = [
        { img: "/images/doctores/img1.jpg", name: "", specialty: "Certificación" },
        { img: "/images/doctores/img2.jpg", name: "", specialty: "Medicina General" },
        { img: "/images/doctores/img3.jpg", name: "", specialty: "Recepción" },
        { img: "/images/doctores/img4.jpg", name: "", specialty: "Recepción" },
        { img: "/images/doctores/img5.jpg", name: "", specialty: "Recepción" },
        { img: "/images/doctores/img6.jpg", name: "", specialty: "Fonoaudiología" },
        { img: "/images/doctores/img7.jpg", name: "", specialty: "Optometría" },
        { img: "/images/doctores/img8.jpg", name: "", specialty: "Psicología" },
        { img: "/images/doctores/img9.jpg", name: "", specialty: "Psicología" },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => prev + 1);
        }, 2800);
        return () => clearInterval(interval);
    }, [doctors.length]);

    return (
        <section id="medico" className="py-24 bg-white border-b border-gray-100">

            {/* ===================== */}
            {/* CONTENIDO SUPERIOR   */}
            {/* ===================== */}

            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    <div className="lg:w-1/3">
                        <Image src="/images/logocrc.png" width={250} height={200} alt="logo crc" />

                        <h2 className="text-4xl font-bold mb-6 text-gray-900">
                            Exámenes Médicos Certificados
                        </h2>

                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            Realiza tus exámenes médicos en nuestro Centro de Reconocimiento de Conductores (CRC) aliado.
                            Contamos con profesionales certificados para garantizar un proceso ágil y seguro.
                        </p>

                        <ul className="flex flex-col gap-4">
                            {["Aprobación el mismo día", "Reporte directo al RUNT", "Equipos de última tecnología"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                                    <div className="w-6 h-6 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green">
                                        ✓
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
                        {exams.map((exam, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.15 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-brand-green/30"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green mb-6">
                                    {exam.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900">{exam.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{exam.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>

            {/* ===================== */}
            {/* CARRUSEL CORREGIDO */}
            {/* ===================== */}

            <div className="mt-20 w-full"> {/* 🔥 reducido espacio */}

                <h3 className="text-3xl font-bold text-center mb-10 text-gray-900">
                    Nuestro Equipo Médico
                </h3>

                {/* 🔥 quitamos overflow-hidden para que no corte sombra */}
                <div className="relative w-full h-[420px] flex items-center justify-center">

                    {doctors.map((doctor, i) => {
                        const normalizedIndex = index % doctors.length;
                        let position = i - normalizedIndex;

                        if (position > doctors.length / 2) position -= doctors.length;
                        if (position < -doctors.length / 2) position += doctors.length;

                        const absPos = Math.abs(position);
                        if (absPos > 4) return null;

                        const isWrapping = position === Math.floor((doctors.length - 1) / 2);

                        return (
                            <motion.div
                                key={i}
                                className="absolute"
                                animate={{
                                    x: position * 265,
                                    scale: absPos === 0 ? 1 : absPos === 1 ? 0.9 : 0.75,
                                    rotateY: position * -12,
                                    zIndex: 30 - absPos,
                                    opacity: absPos >= 4 ? 0 : 1,
                                }}
                                transition={
                                    isWrapping
                                        ? { duration: 0 }
                                        : { type: "spring", stiffness: 70, damping: 18 }
                                }
                                whileHover={
                                    absPos === 0 ? {
                                        scale: 1.05,
                                        y: -10,
                                        transition: { type: "spring", stiffness: 300, damping: 20 }
                                    } : {}
                                }
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                <div className="relative w-[220px] h-[330px] rounded-3xl bg-white shadow-[0_35px_80px_rgba(0,0,0,0.28)] overflow-hidden transition-all duration-300 group">

                                    <Image
                                        src={doctor.img}
                                        alt={doctor.name}
                                        fill
                                        sizes="220px"
                                        className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-110"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out flex flex-col justify-end p-6 text-white transform translate-y-4 group-hover:translate-y-0">
                                        <h4 className="text-lg font-bold">{doctor.name}</h4>
                                        <p className="text-sm text-gray-200">{doctor.specialty}</p>
                                    </div>

                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}