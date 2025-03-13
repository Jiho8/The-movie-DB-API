import React, { useEffect, useState } from 'react'
import { useStore } from '../storeMovie';
import { NavLink, useLocation } from 'react-router-dom';
import axios from 'axios';

function TvList() {
    const { fetchData } = useStore();
    const [list, setList] = useState([]);
    const [pageCount, setPageCount] = useState(1);
    const {state} = useLocation();

    async function dataMore(t1, t2, pageNum){
        let res = await fetchData(t1, t2, pageNum);
        setList([...list, ...res]);
    }

    useEffect(()=>{
        dataMore(state.t1, state.t2, pageCount)
    },[pageCount])

    function searchData(keyword){
        axios.get(`https://api.themoviedb.org/3/search/tv?query=${keyword}&api_key=f89a6c1f22aca3858a4ae7aef10de967`)
        .then((res)=>{
            setList(res.data.results);
        })
    }
    
  return (
    <>
        <h2 className='pageTitle'>TV Series</h2>
        <div className='searchBox'>
            <form onSubmit={(e)=>{e.preventDefault(); searchData(e.target.keyword.value)}}>
                <div className='inputWrapper'>
                    <input type='text' name="keyword" placeholder='Enter Keyword...'></input>
                </div>
                <button>Search</button>
            </form>
        </div>
        <div className='tvBox'>
            {
                list?.map((item) =>
                    <NavLink to={`/detail/${item.id}`} key={item.id}>  
                        <div className='imgTv'
                             style={{
                                backgroundImage: `url('https://image.tmdb.org/t/p/w200${item.poster_path}')`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                             }}>
                            <div className='btn'><span>▶</span></div>
                        </div>
                        <div className='textTv'>
                            <h3>{item.name}</h3>
                            <span><b>★</b> {item.vote_average}</span>
                        </div>
                    </NavLink>
                )
            }
        </div>
        <button onClick={()=>{ setPageCount( pageCount + 1) }} className='moreBtn'>Load More</button>
    </>
  )
}

export default TvList