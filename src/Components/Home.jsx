

import { useDispatch, useSelector } from "react-redux"
import Hero from "./Hero"
import {fetchTrending , fetchPopular , fetchTopRated } from "../Slice/slice"
import Display from "./Display"
import { useEffect } from "react";


function Home() {

  const dispatch = useDispatch();
  const {trendingMovieByDay , trendingMovieByWeek , popularMovies , popularTVShows ,topRatedMovies ,topRatedTVShows} = useSelector((state)=>{return state.movieReducer})

  useEffect(()=>{
     dispatch(fetchTrending());
  },[])

  useEffect(()=>{
    dispatch(fetchPopular());
 },[])

 useEffect(()=>{
  dispatch(fetchTopRated());
},[])

  return (
    <>
     <Hero />
     <Display heading="Trending" data1="Day" data2="Week" option1={trendingMovieByDay} option2={trendingMovieByWeek}/>
     <Display heading="What's Popular" data1="Movies" data2="TVShows" option1={popularMovies} option2={popularTVShows}/>
     <Display heading="Top Rated" data1="Movies" data2="TVShows" option1={topRatedMovies} option2={topRatedTVShows}/>
     
    </>
  )
}

export default Home