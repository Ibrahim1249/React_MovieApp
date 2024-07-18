
import { useParams } from "react-router-dom"
import SkeletonLayout from "./SkeletonLayout"
import SinglePageMovie from "./SinglePageMovie";
import { useEffect, useState } from "react";



function SinglePage() {
  const {id} = useParams();
  const [singleMovie , setSingleMovie] = useState(null);
  const [singleMovieCredits , setSingleMovieCredits] = useState(null)
  const [loading , setLoading] = useState(false);

  
  const fetchSingleMovie = async()=>{
     try{
        setLoading(true)
       const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}&include_video=true&language=en-US`);
       const result  = await response.json();
       setLoading(false)
      //  console.log(result)
       setSingleMovie(result)
     }catch(err){
        console.log(err)
     }
  }

  const fetchSingleMovieCredits= async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US&api_key=${import.meta.env.VITE_TMDB_API_KEY}`
      );
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      console.log(result);
      setSingleMovieCredits(result);
    } catch (err) {
      console.error("Error fetching movie videos:", err.message);
    }
  }  

  useEffect(()=>{
    fetchSingleMovie()
  },[id])

  useEffect(()=>{
   fetchSingleMovieCredits()
  },[id])

  return (
     <> 

      {loading ? <SkeletonLayout /> : <SinglePageMovie singleMovie={singleMovie} singleMovieCredits={singleMovieCredits}/>}

     </>
  )
}

export default SinglePage