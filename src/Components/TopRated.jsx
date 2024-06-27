import React, { useEffect } from 'react'
import SingleCard from './SingleCard'

import { useDispatch , useSelector } from 'react-redux'
import { fetchTopRatedMovie } from '../Slice/slice';



function TopRated() {

    const dispatch = useDispatch();
    const {topRatedMovie} = useSelector((state)=>{
        return state.movieReducer;
    })

    useEffect(()=>{
         dispatch(fetchTopRatedMovie())
    },[dispatch])

 
    const TopRatedArray = topRatedMovie.slice(0,5)
    console.log(TopRatedArray)
  return (
    <>
      <div className="top-rated-container">
          <div className="top-rated">
              <h2>What's Popular</h2>
              <div className="toggle">
            <p className="toggle-option active" data-option="day">
              Movies
            </p>
            <p className="toggle-option" data-option="week">
              TV Shows
            </p>
          </div>
          </div>

          <div className="top-rated-movies">
           {TopRatedArray && TopRatedArray.map((movie,index)=>{
              return <SingleCard movie={movie} key={index}/>
           })}
        
          </div>
      </div>
    </>
  )
}

export default TopRated