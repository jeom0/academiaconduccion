/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
    return (
        <motion.a
            href="https://wa.me/573104163541?text=Hola%20quiero%20iniciar%20mi%20proceso"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
                if (typeof window !== "undefined" && (window as any).fbq) {
                    (window as any).fbq('trackCustom', 'WHATSAPP_CLICK');
                }
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg flex items-center justify-center cursor-pointer group"
        >
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 2,
                }}
                className="absolute inset-0 bg-[#25D366] rounded-full opacity-30 -z-10"
            />
            <MessageCircle size={32} />

            {/* Tooltip */}
            <div className="absolute right-full mr-4 bg-white text-gray-800 text-sm font-medium py-2 px-4 rounded-xl shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap">
                ¡Hablemos por WhatsApp!
                <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white rotate-45" />
            </div>
        </motion.a>
    );
}
