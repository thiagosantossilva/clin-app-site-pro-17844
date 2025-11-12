export const TrustedClients = () => {
  const clients = [
    { name: "Apolar Imóveis" },
    { name: "Ademicon" },
    { name: "Candy Shop" },
    { name: "Honey Island" },
    { name: "PUCPR" },
    { name: "Grupo Marista" },
    { name: "CredPago" },
    { name: "TROC" },
    { name: "Hilton Garden Inn" },
    { name: "Localiza" },
    { name: "Tip" },
    { name: "Dufry" },
    { name: "Claro" },
    { name: "Living" },
    { name: "Batel" },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-primary via-accent to-primary overflow-hidden">
      {/* Wavy top border */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-full h-[60px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-white"></path>
        </svg>
      </div>

      <div className="container px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Clientes que<br />contratam e confiam
          </h2>
        </div>

        {/* Logos Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex items-center justify-center h-24 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20"
              >
                <span className="text-white font-bold text-lg text-center">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wavy bottom border */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-full h-[60px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
};
