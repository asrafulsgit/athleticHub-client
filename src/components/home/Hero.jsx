import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation, EffectFade,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { apiRequiest } from '../../utilities/ApiCall';

const Hero = ({featuredEvents}) => {
  const [events,setEvents]=useState([])
  const getFeaturedEvents =async()=>{
    try {
        const data = await apiRequiest('get','/featured-events');
        setEvents(data?.events)
        featuredEvents(data?.events)
    } catch (error) {
      setEvents([])
      toast.error(error?.response?.data?.message)
    }
  }
  useEffect(()=>{
    getFeaturedEvents()
  },[])
  return (
    <div className=" relative h-[70vh] overflow-hidden 
    ">
       {/* bg-gradient-to-r from-blue-600 to-purple-700 */}
      <div className="absolute inset-0 bg-black/20 bg-opacity-40"></div>

      {/* Custom Navigation Buttons */}
      <div className="absolute z-20 top-3/6 -translate-y-1/2 w-full px-4 
      flex justify-between">
        <button className="custom-prev cursor-pointer text-white text-3xl bg-black/30 p-2 rounded-full hover:bg-black/50">
           <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" id="el-41bxzerp">
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" id="el-aw6gmd76"></path>
      </svg>
        </button>
        <button className="custom-next cursor-pointer text-white text-3xl bg-black/30 p-2 rounded-full hover:bg-black/50">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" id="el-9nyq6zl0">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" id="el-fmid0vs8"></path>
        </svg>
        </button>
      </div>

      <div className=" z-10 flex items-center justify-center 
      h-full text-center text-white ">
        <Swiper
          modules={[Autoplay,EffectFade, Navigation]}
          effect={'fade'}
          autoplay={{ delay: 2000 }}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          className="w-full h-[100%]"
        >
          {events.map((event,index)=>{
            return(
            <SwiperSlide className='relative  border-green-600
              w-[100%]' key={index}>
            <img src={event.image} className='h-[500px] sm:h-[150%] w-[700px] sm:w-[150%] object-cover'  />
            <div className='absolute w-[100%] pt-15  flex flex-col justify-center 
            items-center px-20 border-white top-0 
                    left-0 right-0 bottom-0 z-10 text-center bg-black/60'>
              <h1 className="text-[26px] sm:text-3xl md:text-4xl leading-9 md:leading-11 font-bold mb-2">
                {event?.name}
              </h1>
              <p className="md:text-xl font-[300] text-gray-300 mb-8">
                {event?.description.length > 100 ? `${event?.description.slice(0,100)}...` : event?.description}
              </p>
              <p className="text-[12px] md:text-[14px] mb-2">
                {event?.date} || {event?.time}
              </p>
             <Link to={`/event-details/${event?._id}`} > 
             <button className="bg-blue-600 text-white cursor-pointer
             px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold 
             hover:bg-blue-500 
             duration-200">
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
