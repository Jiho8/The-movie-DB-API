import axios from 'axios';
import React, { useEffect } from 'react'

function Detail() {
  const pathName = window.location.pathname;
  const num = pathName.lastIndexOf('/') + 1;
  const id = pathName.substr(num);

  
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=f89a6c1f22aca3858a4ae7aef10de967&append_to_response=videos,images,casts`)
    .then((res)=>{
      return res.data;
    })
  })
  
  return (
    <>
      
    </>
  )
}

export default Detail