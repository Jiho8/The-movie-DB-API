import React from 'react'

function MainItem({item}) {
    
  return (
    <a href="#" className='mainListLink'>
        <div className='mainListCon'
                style={{
                backgroundImage: `url('https://image.tmdb.org/t/p/w500${item.poster_path}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'top',
                borderRadius: '20px',
                paddingTop: '160%'
                }}
        >
          <div className='btn'><span>▶</span></div>
        </div>
        <h3>{item.title || item.name}</h3>
    </a>
  )
}

export default MainItem