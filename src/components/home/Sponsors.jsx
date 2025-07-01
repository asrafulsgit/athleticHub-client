import React from "react";

const sponsors = [
  {
    name: "Nike",
    logo: "https://i.ibb.co/R4kx4yjB/images.png",
    website: "https://www.nike.com",
  },
  {
    name: "Adidas",
    logo: "https://i.ibb.co/MF8dhV2/Adidas-Logo-wine.png",
    website: "https://www.adidas.com",
  },
  {
    name: "Puma",
    logo: "https://i.ibb.co/XxnSDsvM/PUM-DE-BIG-3030b719.png",
    website: "https://www.puma.com",
  },
  {
    name: "Under Armour",
    logo: "https://i.ibb.co/wZvHChvG/png-clipart-under-armour-t-shirt-clothing-logo-brand-t-shirt-logo-monochrome-removebg-preview.png",
    website: "https://www.underarmour.com",
  },
  {
    name: "Reebok",
    logo: "https://i.ibb.co/KpX2PK5T/Reebok-Logo-Transparent.png",
    website: "https://www.reebok.com",
  },
  {
    name: "Asics",
    logo: "https://i.ibb.co/9HngZ2Gv/asics-logo.png",
    website: "https://www.asics.com",
  },
];

const Sponsors = () => {
  return (
    <section className="py-16 px-5 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">Our Sponsors & Partners</h2>
        <p className="sm:text-lg text-gray-600">
          We are proud to collaborate with these amazing brands to bring you the best athletic events.
        </p></div>

        <div className="grid grid-cols-2 sm:grid-cols-3  
        lg:grid-cols-6 gap-8 items-center">
          {sponsors.map((sponsor, index) => (
            <a
              key={index}
              href={sponsor.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-4 bg-white rounded shadow hover:shadow-lg transition-shadow duration-300"
              title={sponsor.name}
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-h-12 object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
