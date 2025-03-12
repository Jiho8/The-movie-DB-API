import React, { useEffect, useState } from 'react';
import { useStore } from '../storeMovie';
import { Swiper, SwiperSlide } from 'swiper/react';
import MainList from '../component/MainList';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

// import required modules
import { Autoplay, Scrollbar } from 'swiper/modules';


function Home() {
  const { data, fetchAllData } = useStore();

  useEffect(()=>{
    fetchAllData();
  })

  // // main swiper filter
  // const [filteredData, setFilteredData] = useState({});
  
  // useEffect(()=>{
  //   const mainData = async () => {
  //     await fetchAllData()
      
  //     // filtering
  //     const filteredMPop = data.mPop.filter(item => item.overview !== '');

  //     setFilteredData({mPop: filteredMPop})
  //   }

  //   mainData();
  // }, [fetchAllData, data])

  return (
    <>
      <Swiper
        scrollbar={{hide: true}}
        autoplay={{delay:3000, disableOnInteraction: false}}
        modules={[Scrollbar, Autoplay]}
        className="mySwiper">
        {
          data.mPop.map((item)=>{
              return (
                <SwiperSlide key={item.id}>
                  <div className='mainBox'
                      style={{
                            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('https://image.tmdb.org/t/p/original${item.backdrop_path}')`,
                            backgroundSize: 'cover',
      
                      }}>
                      <div className='text'>
                          <h3>{item.title}</h3>
                          <p>{item.overview}</p>
                          <div>
                          <button>Watch now</button>
                          <button>Watch trailer</button>
                          </div>
                      </div>
                      <p><img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} /></p>
                  </div>
                </SwiperSlide>
              );
          })
        }
      </Swiper>

      <MainList mTop={data.mTop} mPop={data.mPop}
                sTop={data.sTop} sPop={data.sPop}
      />

    </>
  )
}

export default Home