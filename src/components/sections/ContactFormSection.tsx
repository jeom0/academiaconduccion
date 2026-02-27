/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";

const formSchema = z.object({
    nombre: z.string().min(2, "Mínimo 2 caracteres"),
    telefono: z.string().min(7, "Teléfono inválido"),
    servicio: z.string().min(1, "Selecciona un servicio"),
    sede: z.string().min(1, "Selecciona una sede"),
    mensaje: z.string().optional(),
    tratamiento: z.boolean().refine((val) => val === true, {
        message: "Debes aceptar el tratamiento de datos",
    }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactFormSection() {
    const [utms, setUtms] = useState<Record<string, string>>({});
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        // Capture UTMs on load
        const params = new URLSearchParams(window.location.search);
        const capturedUtms: Record<string, string> = {};
        for (const [key, value] of Array.from(params.entries())) {
            if (key.startsWith('utm_') || key === 'gclid' || key === 'fbclid') {
                capturedUtms[key] = value;
            }
        }
        setUtms(capturedUtms);
    }, []);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            tratamiento: false
        }
    });

    const onSubmit = async (data: FormValues) => {
        try {
            const payload = {
                ...data,
                ...utms,
                source_url: window.location.href,
                timestamp: new Date().toISOString()
            };

            const res = await fetch('/api/lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (res.ok) {
                setSuccess(true);
                reset();
                if ((window as any).fbq) (window as any).fbq('track', 'Lead', { content_name: data.servicio });

                // Hide success message after 5 seconds
                setTimeout(() => setSuccess(false), 5000);
            }
        } catch (error) {
            console.error('Error submitting form', error);
            alert('Hubo un error al enviar el formulario. Intenta nuevamente o contáctanos por WhatsApp.');
        }
    };

    return (
        <section id="contacto" className="py-24 bg-gray-50 border-t border-gray-200">
            <div className="container mx-auto px-4 lg:px-8 flex items-center justify-center">

                <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 w-full max-w-4xl grid md:grid-cols-2 gap-12 border border-gray-100">

                    {/* Info Side */}
                    <div className="flex flex-col justify-center">
                        <h2 className="text-3xl lg:text-4xl font-black text-brand-green mb-4">
                            ¿Listo para empezar?
                        </h2>
                        <p className="text-gray-600 mb-8 text-lg">
                            Déjanos tus datos y un asesor se pondrá en contacto contigo para brindarte toda la información y precios sin compromiso.
                        </p>
                        <div className="bg-brand-green/5 p-6 rounded-2xl border border-brand-green/10">
                            <h3 className="font-bold text-gray-900 mb-2">Canales Directos</h3>
                            <p className="text-gray-600 mb-1">📞 Teléfono: +57 310 416 3541</p>
                            <p className="text-gray-600">✉️ Email: conduser.pereira@gmail.com</p>
                        </div>
                    </div>

                    {/* Form Side */}
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                        {success && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-green-100 text-green-800 p-4 rounded-xl text-center font-medium mb-2 border border-green-200"
                            >
                                ¡Gracias! Hemos recibido tus datos correctamente. Te contactaremos pronto.
                            </motion.div>
                        )}

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">Nombre Completo *</label>
                            <input
                                type="text"
                                {...register("nombre")}
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all"
                                placeholder="Ej. Juan Pérez"
                            />
                            {errors.nombre && <span className="text-red-500 text-xs mt-1 block">{errors.nombre.message}</span>}
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">Teléfono / Celular *</label>
                            <input
                                type="tel"
                                {...register("telefono")}
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all"
                                placeholder="Ej. 3000000000"
                            />
                            {errors.telefono && <span className="text-red-500 text-xs mt-1 block">{errors.telefono.message}</span>}
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">Correo Electronico *</label>
                            <input
                                type="email"
                                {...register("correo")}
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all"
                                placeholder="Ej. juanperez@ejemplo.com"
                            />
                            {errors.nombre && <span className="text-red-500 text-xs mt-1 block">{errors.nombre.message}</span>}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Servicio de interés *</label>
                                <select
                                    {...register("servicio")}
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all bg-white"
                                >
                                    <option value="">Seleccione...</option>
                                    <option value="Licencia Moto">Licencia Moto</option>
                                    <option value="Licencia Carro">Licencia Carro</option>
                                    <option value="Licencia Moto+Carro">Licencia Moto + Carro</option>
                                    <option value="Refrendacion">Refrendación</option>
                                    <option value="Recategorizacion">Recategorización</option>
                                    <option value="SOAT">SOAT / Otros</option>
                                </select>
                                {errors.servicio && <span className="text-red-500 text-xs mt-1 block">{errors.servicio.message}</span>}
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Sede *</label>
                                <select
                                    {...register("sede")}
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all bg-white"
                                >
                                    <option value="">Seleccione...</option>
                                    <option value="Dosquebradas">Dosquebradas</option>
                                    <option value="Pereira Centro">Pereira Centro</option>
                                    <option value="Cuba">Cuba</option>
                                    <option value="Santa Rosa">Santa Rosa</option>
                                    <option value="Cerritos">Cerritos</option>
                                </select>
                                {errors.sede && <span className="text-red-500 text-xs mt-1 block">{errors.sede.message}</span>}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">Mensaje (Opcional)</label>
                            <textarea
                                {...register("mensaje")}
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all resize-none h-24"
                                placeholder="¿Tienes alguna duda adicional?"
                            />
                        </div>

                        <div className="flex items-start gap-3 mt-2">
                            <input
                                type="checkbox"
                                id="tratamiento"
                                {...register("tratamiento")}
                                className="mt-1 w-4 h-4 text-brand-green rounded border-gray-300 focus:ring-brand-green"
                            />
                            <label htmlFor="tratamiento" className="text-sm text-gray-600 cursor-pointer">
                                Acepto la política de tratamiento de datos personales y autorizo a CONDUSER a contactarme. *
                            </label>
                        </div>
                        {errors.tratamiento && <span className="text-red-500 text-xs mt-1 block px-7">{errors.tratamiento.message}</span>}

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            disabled={isSubmitting}
                            type="submit"
                            className="w-full bg-brand-green text-white font-bold py-4 rounded-xl mt-4 flex items-center justify-center gap-2 hover:bg-brand-greenHover transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                                <><Loader2 className="animate-spin" size={20} /> Procesando...</>
                            ) : (
                                <>Enviar Solicitud <Send size={20} /></>
                            )}
                        </motion.button>
                    </form>

                </div>
            </div>
        </section>
    );
}
