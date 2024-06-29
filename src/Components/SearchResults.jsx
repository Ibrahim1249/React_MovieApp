import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import {fetchSearchTerm } from "../Slice/slice"
import SingleCard from "./SingleCard";



function SearchResults() {
    const {searchTerm} = useParams();

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchSearchTerm(searchTerm))
    },[dispatch,searchTerm])

    const {searchResults} = useSelector((state)=>{return state.movieReducer})


  return (
    <>
      <div className="searchResult-container">
         <h1>{`Search Results for '${searchTerm}'`}</h1>
         <div className="display-movies">
             {searchResults && searchResults.map((movie,index)=>{
                 return <SingleCard movie={movie} key={index}/>
             })}
         </div>
      </div>
    </>
  )
}

export default SearchResults