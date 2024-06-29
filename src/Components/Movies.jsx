import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchMovies} from "../Slice/slice"
import SingleCard from "./SingleCard";

function Movies() {

   const dispatch = useDispatch();
   const {movies , moviesList , tvList} = useSelector((state)=>{return state.movieReducer})

   useEffect(()=>{
     dispatch(fetchMovies());
   },[dispatch]);



  return (
    <>
      <div className="discover-movies-container">
        <div className="heading">
          <h3>Explore Movies</h3>
        </div>
        <div className="display-movies">
            {movies.map((movie,index)=>{
               return <SingleCard key={index} movie={movie} movieList={moviesList} tvList={tvList} isVisible={true}/>
            })}
        </div>
      </div>
    </>
  );
}

export default Movies;
