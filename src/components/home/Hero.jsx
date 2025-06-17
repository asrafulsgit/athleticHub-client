import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,  Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';

const Hero = ({heroEvents}) => {
   
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
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 2000 }}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          className="w-full max-w-4xl h-[65%] mt-40 md:mt-60 "
        >
          {heroEvents.map((event,index)=>{
            return(
              <SwiperSlide className='px-15 md:px-30' key={index}>
            <div>
              <h1 className="text-[26px] sm:text-3xl md:text-4xl leading-9 md:leading-11 font-bold mb-2">
                {event?.name}
              </h1>
              <p className="md:text-xl font-[300] text-gray-300 mb-8">
                {event?.description.length > 100 ? `${event?.description.slice(0,100)}...` : event?.description}
              </p>
              <p className="text-[12px] md:text-[14px] mb-2">
                {event?.date} || {event?.time}
              </p>
             <Link to={`/event-details/${event?._id}`} > <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Book Event
              </button></Link>
            </div>
          </SwiperSlide>
            )
          }) }
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
