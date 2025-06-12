import React from "react";

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

const Popular_sports = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Sports</h2>
          <p className="text-lg text-gray-600">Choose from a variety of athletic disciplines</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {sports.map((sport, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200"
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
{/* <div class="bg-white py-16" id="el-cge5ffjs">
    <div class="max-w-7xl mx-auto px-4" id="el-5vl3d60a">
      <div class="text-center mb-12" id="el-h1u12cf9">
        <h2 class="text-3xl font-bold text-gray-900 mb-4" id="el-hxfmvxqu">Popular Sports</h2>
        <p class="text-lg text-gray-600" id="el-shkyvs9f">Choose from a variety of athletic disciplines</p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6" id="el-uw6jzsp0">
        <div class="text-center p-6 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200" id="el-8bludk1e">
          <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99
          b2d8b?w=100&amp;h=100&amp;fit=crop&amp;crop=center" alt="Running" class="w-16 h-16 mx-auto mb-3 rounded-full object-cover active-edit-image" id="el-bt07zexs">
          <h3 class="font-semibold text-gray-900" id="el-fq8uawdj">Running</h3>
        </div>
        <div class="text-center p-6 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200" id="el-lj9g5h3w">
          <img src="https://images.unsplash.com/photo-1530549387789-4c10
          17266635?w=100&amp;h=100&amp;fit=crop&amp;crop=center" alt="Swimming" class="w-16 h-16 mx-auto mb-3 rounded-full object-cover" id="el-ztdxxuwc">
          <h3 class="font-semibold text-gray-900" id="el-equmdd9l">Swimming</h3>
        </div>
        <div class="text-center p-6 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200" id="el-0dc1lvor">
          <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&amp;h=100&amp;fit=crop&amp;crop=center" alt="Cycling" class="w-16 h-16 mx-auto mb-3 rounded-full object-cover" id="el-y4erx6oi">
          <h3 class="font-semibold text-gray-900" id="el-lhkdfayr">Cycling</h3>
        </div>
        <div class="text-center p-6 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200" id="el-4yu92mv3">
          <img src="https://images.unsplash.com/photo-1546519638-68e109498ffc?w=100&amp;h=100&amp;fit=crop&amp;crop=center" alt="Basketball" class="w-16 h-16 mx-auto mb-3 rounded-full object-cover" id="el-ywd7bijl">
          <h3 class="font-semibold text-gray-900" id="el-19nrb1qt">Basketball</h3>
        </div>
        <div class="text-center p-6 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200" id="el-nem9y4ou">
          <img src="https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=100&amp;h=100&amp;fit=crop&amp;crop=center" alt="Tennis" class="w-16 h-16 mx-auto mb-3 rounded-full object-cover" id="el-8cq1hp31">
          <h3 class="font-semibold text-gray-900" id="el-20xsqco9">Tennis</h3>
        </div>
        <div class="text-center p-6 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200" id="el-63uuleyd">
          <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=100&amp;h=100&amp;fit=crop&amp;crop=center" alt="Soccer" class="w-16 h-16 mx-auto mb-3 rounded-full object-cover" id="el-nc5b61zo">
          <h3 class="font-semibold text-gray-900" id="el-brba53v0">Soccer</h3>
        </div>
      </div>
    </div>
  </div> */}