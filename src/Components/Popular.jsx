import React, { useEffect } from 'react'
import SingleCard from './SingleCard'

import { useDispatch , useSelector } from 'react-redux'
import { fetchPopularMovie } from '../Slice/slice';



function Popular() {

    const dispatch = useDispatch();
    const {popularMovie} = useSelector((state)=>{
        return state.movieReducer;
    })

    useEffect(()=>{
         dispatch(fetchPopularMovie())
    },[dispatch])

 
    const popularArray = popularMovie.slice(0,5)
    console.log(popularArray)
  return (
    <>
      <div className="popular-container">
          <div className="popular">
              <h2>What's Popular</h2>
              <div className="toggle">
                 <p>day</p>
                 <p>week</p>
              </div>
          </div>

          <div className="popular-movies">
           {popularArray && popularArray.map((movie,index)=>{
              return <SingleCard movie={movie} key={index}/>
           })}
        
          </div>
      </div>
    </>
  )
}

export default Popular