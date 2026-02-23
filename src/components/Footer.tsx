import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-brand-green text-white py-12 lg:py-16">
            <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                {/* Logo & About */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-brand-green font-bold text-xl">
                            C
                        </div>
                        <span className="font-bold text-2xl tracking-tight">CONDUSER</span>
                    </div>
                    <p className="text-white/80 mt-2">
                        Tu academia de conducción de confianza en Dosquebradas. Innovación, seguridad y excelencia en cada clase.
                    </p>
                    <div className="flex gap-4 mt-2">
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-brand-green transition-colors">
                            <Instagram size={20} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-brand-green transition-colors">
                            <Facebook size={20} />
                        </a>
                    </div>
                </div>

                {/* Links */}
                <div>
                    <h3 className="font-bold text-lg mb-6 text-brand-yellow">Enlaces Rápidos</h3>
                    <ul className="flex flex-col gap-3 text-white/80">
                        <li><a href="#servicios" className="hover:text-white transition-colors">Nuestros Servicios</a></li>
                        <li><a href="#cale" className="hover:text-white transition-colors">Examen CALE</a></li>
                        <li><a href="#proceso" className="hover:text-white transition-colors">Proceso Paso a Paso</a></li>
                        <li><a href="#medico" className="hover:text-white transition-colors">Exámenes Médicos CRC</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="font-bold text-lg mb-6 text-brand-yellow">Contacto</h3>
                    <ul className="flex flex-col gap-4 text-white/80">
                        <li className="flex items-start gap-3">
                            <Phone size={20} className="mt-0.5 shrink-0" />
                            <span>+57 300 000 0000</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Mail size={20} className="mt-0.5 shrink-0" />
                            <span>contacto@conduser.com</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <MapPin size={20} className="mt-0.5 shrink-0" />
                            <span>Av. Principal #12-34<br />Dosquebradas, Risaralda</span>
                        </li>
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <h3 className="font-bold text-lg mb-6 text-brand-yellow">Legal</h3>
                    <ul className="flex flex-col gap-3 text-white/80">
                        <li><a href="#" className="hover:text-white transition-colors">Política de Privacidad</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Tratamiento de Datos</a></li>
                    </ul>
                </div>

            </div>
            <div className="container mx-auto px-4 mt-12 pt-8 border-t border-white/20 text-center text-white/60 text-sm">
                &copy; {new Date().getFullYear()} Academia de Conducción CONDUSER. Todos los derechos reservados.
            </div>
        </footer>
    );
}
