import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

export default function Footer() {
    
    return (
        <footer className="bg-brand-green text-white py-12 lg:py-16">
            <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                {/* Logo & About */}
                <div className="flex flex-col gap-4">
               <div className="flex items-center">
  <a
    href="/"
    className="bg-white/80 backdrop-blur-sm rounded-2xl px-3 py-2 shadow-lg flex items-center justify-center"
  >
    <img
      src="/images/logo.png"
      alt="Conduser Logo"
      className="h-14 w-auto object-contain"
    />
  </a>
</div>
                    <p className="text-white/80 mt-2">
                        Tu academia de conducción de confianza en Dosquebradas. Innovación, seguridad y excelencia en cada clase.
                    </p>
                    <div className="flex gap-4 mt-2">
                        <a href="https://www.instagram.com/cea_conduser?igsh=MTJmOWhqd2hoNTBrZA%3D%3D&utm_source=qr" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-brand-green transition-colors">
                            <Instagram size={20} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-brand-green transition-colors">
                            <Facebook size={20} />
                        </a>
                        
                      <a
  href="https://tiktok.com"
  target="_blank"
  rel="noopener noreferrer"
  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-brand-green transition-colors text-white"
  aria-label="TikTok"
>
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M12.525 0h3.05a5.482 5.482 0 0 0 1.52 3.658 5.462 5.462 0 0 0 3.66 1.52v3.05a8.518 8.518 0 0 1-5.18-1.75v7.383a6.51 6.51 0 1 1-6.51-6.51c.207 0 .41.01.61.03v3.23a3.28 3.28 0 1 0 2.85 3.25V0z" />
  </svg>
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
