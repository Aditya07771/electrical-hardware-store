const brands = [
  'Havells',
  'Finolex',
  'Anchor',
  'Philips',
  'Crompton',
  'Polycab',
  'Legrand',
  'Syska',
  'Bosch',
  'Stanley',
  'GM',
  'Orient',
];

const Brands = () => {
  return (
    <section className="py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <div className="text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
            Trusted <span className="text-primary">Brands</span> We Stock
          </h2>
          <p className="text-muted-foreground">
            Only genuine products from India's leading manufacturers
          </p>
        </div>
      </div>

      {/* Infinite Scroll Animation */}
      <div className="relative">
        <div className="flex animate-scroll">
          {/* First set */}
          {brands.map((brand, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 mx-6 px-8 py-4 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="font-heading font-semibold text-lg text-foreground whitespace-nowrap">
                {brand}
              </span>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {brands.map((brand, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 mx-6 px-8 py-4 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="font-heading font-semibold text-lg text-foreground whitespace-nowrap">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Brands;
