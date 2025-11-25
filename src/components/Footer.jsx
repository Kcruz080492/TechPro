function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Columna 1: Branding */}
          <div>
            <h3 className="text-white text-2xl font-bold mb-4">
              TechPro
            </h3>
            <p className="text-sm leading-relaxed">
              Soluciones tecnológicas que impulsan tu negocio hacia el futuro.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="hover:text-blue-400 transition-colors text-2xl">
                📘
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors text-2xl">
                🐦
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors text-2xl">
                📷
              </a>
            </div>
          </div>
          
          {/* Columna 2: Producto */}
          <div>
            <h4 className="text-white font-bold mb-4">
              Producto
            </h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Características</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Precios</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Casos de Uso</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integraciones</a></li>
            </ul>
          </div>
          
          {/* Columna 3: Empresa */}
          <div>
            <h4 className="text-white font-bold mb-4">
              Empresa
            </h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Carreras</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          {/* Columna 4: Legal */}
          <div>
            <h4 className="text-white font-bold mb-4">
              Legal
            </h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Privacidad</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Términos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Seguridad</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
            </ul>
          </div>
          
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>
            © 2025 TechPro. Todos los derechos reservados. | Hecho con ❤️ y Tailwind CSS
          </p>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;