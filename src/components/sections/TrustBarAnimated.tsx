"use client";

import { motion } from "framer-motion";

export default function TrustBarAnimated() {
    const logos = [
        "Aprobado por Mintransporte",
        "Certificados RUNT",
        "Vigilado Supertransporte",
        "CRC Aliados",
        "Instructores Certificados",
        "Flota Moderna",
    ];

    return (
        <section className="bg-brand-greenHover py-5 overflow-hidden border-y border-white/10 relative z-20">
            <div className="flex w-full overflow-hidden">
                <motion.div
                    animate={{ x: [0, -1030] }}
                    transition={{
                        repeat: Infinity,
                        duration: 15,
                        ease: "linear",
                    }}
                    className="flex items-center gap-12 whitespace-nowrap pl-12"
                >
                    {[...logos, ...logos, ...logos, ...logos].map((text, i) => (
                        <div key={i} className="flex items-center gap-3 text-white/90 font-bold text-sm md:text-base uppercase tracking-wider">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
                            {text}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
