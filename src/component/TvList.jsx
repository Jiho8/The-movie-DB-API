import React, { useEffect, useState } from 'react'
import { useStore } from '../storeMovie';
import { useLocation } from 'react-router-dom';

function TvList() {
    const { fetchData } = useStore();
    const [list, setList] = useState([]);
    const [pageCount, setPageCount] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');

    const {state} = useLocation();

    async function dataMore(t1, t2, pageNum, query){
        let res = await fetchData(t1, t2, pageNum, query);
        setList([...list, ...res]);
    }

    useEffect(()=>{
        dataMore(state.t1, state.t2, pageCount, searchQuery)
    },[pageCount])

    
  return (
    <>
        <h2 className='pageTitle'>TV Series</h2>
        <div className='searchBox'>
            <div className='inputWrapper'>
                <input type='text' placeholder='Enter Keyword...'
                       name='search'
                />
            </div>
            <button>Search</button>
        </div>
        <div className='tvBox'>
            {
                list?.map((item) =>
                    <a href="#" key={item.id}>
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
                    </a>
                )
            }
        </div>
        <button onClick={()=>{ setPageCount( pageCount + 1) }} className='moreBtn'>Load More</button>
    </>
  )
}

export default TvList