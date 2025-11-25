function Testimonials() {
  const testimonials = [
    {
      name: "María González",
      role: "CEO de StartupXYZ",
      text: "Esta herramienta transformó completamente nuestra forma de trabajar. Ahorramos más de 20 horas semanales.",
      avatar: "👩‍💼"
    },
    {
      name: "Carlos Ruiz",
      role: "Director de Marketing",
      text: "La mejor inversión que hemos hecho. El ROI fue visible desde el primer mes.",
      avatar: "👨‍💼"
    },
    {
      name: "Ana Martínez",
      role: "Gerente de Operaciones",
      text: "Soporte excepcional y una plataforma intuitiva. Nuestro equipo lo adoptó inmediatamente.",
      avatar: "👩‍💻"
    }
  ];

  return (
    <section className="py-20 bg-linear-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow"
            >
              {/* Comillas decorativas */}
              <div className="text-6xl text-blue-200 leading-none mb-4">
                "
              </div>
              
              {/* Testimonio */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                {testimonial.text}
              </p>
              
              {/* Autor */}
              <div className="flex items-center gap-4 border-t pt-6">
                <div className="text-4xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-bold text-gray-800">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

export default Testimonials;