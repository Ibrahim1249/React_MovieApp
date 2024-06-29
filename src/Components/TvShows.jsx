import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchTvShows} from "../Slice/slice"
import SingleCard from "./SingleCard";

function TvShows() {

   const dispatch = useDispatch();
   const {tvShows , moviesList , tvList} = useSelector((state)=>{return state.movieReducer})

   useEffect(()=>{
     dispatch(fetchTvShows());
   },[dispatch]);



  return (
    <>
      <div className="discover-tvShows-container">
        <div className="heading">
          <h3>Explore Movies</h3>
        </div>
        <div className="display-movies">
            {tvShows.map((movie,index)=>{
               return <SingleCard key={index} movie={movie} movieList={moviesList} tvList={tvList} isVisible={false}/>
            })}
        </div>
      </div>
    </>
  );
}

export default TvShows;
