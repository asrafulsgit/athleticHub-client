// HeroSlider.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Hero = () => {
  return (
    <div className="relative h-96 overflow-hidden bg-gradient-to-r from-blue-600 to-purple-700">
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 2000 }}
          pagination={{ clickable: true }}
          navigation
          className="w-full max-w-4xl"
        >
          <SwiperSlide>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Find Your Next Athletic Challenge
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Join thousands of athletes competing in events nationwide
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Browse Events
              </button>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Train with the Best</h1>
              <p className="text-xl md:text-2xl mb-8">
                Access professional coaching and training programs
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Start Training
              </button>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Track Your Progress</h1>
              <p className="text-xl md:text-2xl mb-8">
                Monitor your performance and achieve your goals
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                View Stats
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
