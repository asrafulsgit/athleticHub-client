import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Hero = () => {
  return (
    <div className=" relative h-[90vh] overflow-hidden 
    bg-gradient-to-r from-blue-600 to-purple-700">
      <div className="absolute inset-0 bg-black/20 bg-opacity-40"></div>

      {/* Custom Navigation Buttons */}
      <div className="absolute z-20 top-1/2 -translate-y-1/2 w-full px-4 flex justify-between">
        <button className="custom-prev text-white text-3xl bg-black/30 p-2 rounded-full hover:bg-black/50">
           <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" id="el-41bxzerp">
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" id="el-aw6gmd76"></path>
      </svg>
        </button>
        <button className="custom-next text-white text-3xl bg-black/30 p-2 rounded-full hover:bg-black/50">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" id="el-9nyq6zl0">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" id="el-fmid0vs8"></path>
        </svg>
        </button>
      </div>

      <div className=" relative z-10 flex items-center justify-center 
      h-full text-center text-white px-4">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 2000 }}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          className="w-full max-w-4xl h-[65%] mt-40 "
        >
          <SwiperSlide className=''>
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
