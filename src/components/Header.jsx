function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Logo */}
          <div className="text-2xl font-bold">
            TechPro
          </div>
          
          {/* Menu - Mobile First */}
          <ul className="flex flex-col md:flex-row gap-4 md:gap-8 text-center">
            <li className="hover:text-blue-200 transition-colors cursor-pointer">
              Inicio
            </li>
            <li className="hover:text-blue-200 transition-colors cursor-pointer">
              Características
            </li>
            <li className="hover:text-blue-200 transition-colors cursor-pointer">
              Precios
            </li>
            <li className="hover:text-blue-200 transition-colors cursor-pointer">
              Contacto
            </li>
          </ul>
          
          {/* CTA Button */}
          <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition-all hover:scale-105">
            Probar Gratis
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;