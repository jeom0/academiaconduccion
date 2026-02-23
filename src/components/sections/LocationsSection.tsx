"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Building } from "lucide-react";
import Image from "next/image";

export default function LocationsSection() {
    const locations = [
        {
            name: "Sede Centro Pereira",
            address: "Calle 19 # 6-48",
            phone: "312 000 0000",
            image: "/images/v2_updates/FMPH0001.png"
        },
        {
            name: "Sede Principal Dosquebradas (Academia)",
            address: "Av. Simón Bolívar # 45-67",
            phone: "311 000 0000",
            image: "/images/v2_updates/FMPH0002.png"
        },
        {
            name: "Sede Dosquebradas (CRC)",
            address: "Sector La Romelia",
            phone: "313 000 0000",
            image: "/images/v2_updates/FMPH0003.png"
        },
        {
            name: "Sede Honda Tolima",
            address: "Centro Honda",
            phone: "314 000 0000",
            image: "/images/v2_updates/FMPH0006.png"
        },
        {
            name: "Sede Mariquita",
            address: "Centro Mariquita",
            phone: "315 000 0000",
            image: "/images/v2_updates/FMPH0010.png"
        },
    ];

    return (
        <section id="sedes" className="py-24 bg-white relative">
            <div className="container mx-auto px-4 lg:px-8">

                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block bg-brand-green/10 text-brand-green font-bold px-4 py-1.5 rounded-full mb-4 text-sm tracking-wide uppercase"
                    >
                        Presencia Regional
                    </motion.div>
                    <h2 className="text-4xl font-bold mb-4 text-gray-900">Encuentra tu Sede Más Cercana</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Estamos estratégicamente ubicados para brindarte la mayor comodidad.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {locations.map((loc, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -5, borderColor: "rgba(31,175,90,0.5)", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                            className="bg-white rounded-2xl border border-gray-100 shadow-sm transition-all group overflow-hidden flex flex-col"
                        >
                            {/* 
                             * ==========================================
                             * INSTRUCCIÓN PARA CAMBIAR FOTO DE SEDE
                             * ==========================================
                             * Las fotos se definen en la variable `locations` arriba (línea 8).
                             * Cambia el atributo `image` correspondiente a esta sede.
                             */}
                            <div className="relative h-48 w-full bg-gray-100 overflow-hidden">
                                <Image
                                    src={loc.image}
                                    alt={`Foto de la ${loc.name}`}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-4 left-4 text-white font-bold flex items-center gap-2">
                                    <Building size={18} />
                                    <span>{loc.name.split(' ')[1]}</span>
                                </div>
                            </div>

                            <div className="p-6 flex-grow flex flex-col gap-3">
                                <h3 className="font-bold text-gray-900 mb-1 leading-tight">{loc.name}</h3>
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <MapPin size={16} className="shrink-0 text-brand-green" />
                                    {loc.address}
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-700 font-medium mt-auto pt-4 border-t border-gray-100">
                                    <Phone size={16} className="shrink-0 text-brand-green" />
                                    {loc.phone}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
