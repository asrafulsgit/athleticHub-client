import React from "react";
const Popular_sports = () => {
  const sports = [
  {
    name: 'Running',
    img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop&crop=center',
  },
  {
    name: 'Swimming',
    img: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=100&h=100&fit=crop&crop=center',
  },
  {
    name: 'Cycling',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&h=100&fit=crop&crop=center',
  },
  {
    name: 'Basketball',
    img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=100&h=100&fit=crop&crop=center',
  },
  {
    name: 'Tennis',
    img: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=100&h=100&fit=crop&crop=center',
  },
  {
    name: 'Soccer',
    img: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=100&h=100&fit=crop&crop=center',
  },
];
  return (
    <div className="bg-white py-10 px-5">
      <div className="max-w-7xl mx-auto ">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl 
        md:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">Popular Sports</h2>
          <p className="sm:text-lg text-gray-600">Choose from a variety of athletic disciplines</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
  {sports.map((sport, index) => (
    <div
      key={index}
      className="w-[45%] md:w-[22%] lg:w-[15%] text-center p-6 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200"
    >
      <img
        src={sport.img}
        alt={sport.name}
        className="w-16 h-16 mx-auto mb-3 rounded-full object-cover"
      />
      <h3 className="font-semibold text-gray-900">{sport.name}</h3>
    </div>
  ))}
</div>
      </div>
    </div>
  );
};

export default Popular_sports;
