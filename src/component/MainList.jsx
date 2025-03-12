import React, { useEffect } from 'react'
import { useStore } from '../storeMovie';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';
import MainItem from './MainItem';


function MainList(props) {
    const navigate = useNavigate();
    const movie1 = props.mPop;
    const movie2 = props.mTop;
    const tv1 = props.sPop;
    const tv2 = props.sTop;

    const category = [movie1, movie2, tv1, tv2]
    
    const menuTitle = [
        'Trending Movies', 'Top Rated Movies', 'Trending TV', 'Top Rated TV'
    ]
    
    function linkChange(t1,t2) {
        navigate(`/${t1}`,{state:{t1,t2}})
    }

  return (
    <>
        {
            category.map((c, i)=>{
                return(
                    <div className='mainList'> 
                        <div className='header' key={c.id}>
                            <h2>{menuTitle[i]}</h2>
                            <button className='moreBtn' style={{display: 'inline-block', margin: '0'}}
                                    onClick={()=>{
                                        switch(menuTitle[i]){
                                            case "Trending Movies":
                                                linkChange('movie','popular');
                                                break;
                                            case "Top Rated Movies":
                                                linkChange('movie','top_rated');
                                                break;
                                            case "Trending TV":
                                                linkChange('tv','popular');
                                                break;
                                            case "Top Rated TV":
                                                linkChange('tv','top_rated');
                                                break;
                                        }                                        
                                    }}
                            >View More</button>
                        </div>
                        <Swiper
                            slidesPerView={'auto'}
                            spaceBetween={15}
                            grabCursor={true}
                            loop={true}
                            className="mySwiper2">
                            {
                                c.map((item)=>{
                                return (
                                    <SwiperSlide key={item.id}>
                                        <MainItem item={item}/>
                                    </SwiperSlide>
                                );
                                })
                            }
                        </Swiper>
                    </div>
                )
            })
        }
  </>
  )
}

export default MainList