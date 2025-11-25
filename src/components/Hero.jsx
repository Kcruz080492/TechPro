function Hero() {
  return (
    <section className="bg-linear-to-br from-blue-500 via-purple-500 to-pink-500 min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Contenido de Texto */}
          <div className="text-white space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Transforma tu Negocio con 
              <span className="block text-yellow-300">
                Tecnología de Vanguardia
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
              Descubre la solución integral que revolucionará tu forma de trabajar. 
              Más de 10,000 empresas confían en nosotros.
            </p>
            
            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transform hover:-translate-y-1 transition-all shadow-2xl">
                Comenzar Ahora
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-all">
                Ver Demo
              </button>
            </div>
            
            {/* Estadísticas */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div>
                <p className="text-3xl font-bold">10K+</p>
                <p className="text-blue-200">Clientes</p>
              </div>
              <div>
                <p className="text-3xl font-bold">98%</p>
                <p className="text-blue-200">Satisfacción</p>
              </div>
              <div>
                <p className="text-3xl font-bold">24/7</p>
                <p className="text-blue-200">Soporte</p>
              </div>
            </div>
          </div>
          
          {/* Imagen/Mockup */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform">
              <div className="aspect-video bg-linear-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-400 text-xl">Imagen del Producto</p>
              </div>
            </div>
            
            {/* Decoración flotante */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-400 rounded-full opacity-20 blur-xl"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Hero;