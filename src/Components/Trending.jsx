

import React, { useEffect } from 'react'
import SingleCard from './SingleCard'

import { useDispatch , useSelector } from 'react-redux'
import { fetchMovieOfTheDay } from '../Slice/slice';



function Trending() {

    const dispatch = useDispatch();
    const {trendingMovieByDay} = useSelector((state)=>{
        return state.movieReducer;
    })

    useEffect(()=>{
         dispatch(fetchMovieOfTheDay())
    },[dispatch])

 
    const trendingArray = trendingMovieByDay.slice(0,5)
    console.log(trendingArray)
  return (
    <>
      <div className="trending-container">
          <div className="trending">
              <h2>Trending</h2>
              <div className="toggle">
                 <p>day</p>
                 <p>week</p>
              </div>
          </div>

          <div className="trending-movies">
           {trendingArray && trendingArray.map((movie,index)=>{
              return <SingleCard movie={movie} key={index}/>
           })}
        
          </div>
      </div>
    </>
  )
}

export default Trending