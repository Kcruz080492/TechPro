function Gallery() {
  const images = [
    { id: 1, category: "Diseño" },
    { id: 2, category: "Desarrollo" },
    { id: 3, category: "Marketing" },
    { id: 4, category: "Análisis" },
    { id: 5, category: "Soporte" },
    { id: 6, category: "Innovación" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Nuestro Trabajo en Acción
          </h2>
        </div>
        
        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((image) => (
            <div 
              key={image.id}
              className="break-inside-avoid"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer">
                {/* Placeholder de imagen */}
                <div className="aspect-square bg-linear-to-br from-blue-400 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <p className="text-white text-2xl font-bold">
                    {image.category}
                  </p>
                </div>
                
                {/* Overlay en hover */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                  <button className="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-full">
                    Ver Detalles
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

export default Gallery;