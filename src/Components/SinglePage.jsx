
import { useParams } from "react-router-dom"
import SkeletonLayout from "./SkeletonLayout"
import SinglePageMovie from "./SinglePageMovie";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";



function SinglePage() {
  const {id} = useParams();
  const [singleMovie , setSingleMovie] = useState(null);
  const [singleMovieCredits , setSingleMovieCredits] = useState(null)
  const [singleSimilarMovie , setSingleSimilarMovie] = useState(null)
  const [singleRecommendedMovie , setSingleRecommendedMovie] = useState(null)
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
      setSingleMovieCredits(result);
    } catch (err) {
      console.error("Error fetching movie videos:", err.message);
    }
  }  

  const fetchSimilarMovie= async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1&api_key=${import.meta.env.VITE_TMDB_API_KEY}`
      );
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      console.log(result);
      setSingleSimilarMovie(result.results);
    } catch (err) {
      console.error("Error fetching movie videos:", err.message);
    }
  }  

  const fetchRecommendedMovie= async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1&api_key=${import.meta.env.VITE_TMDB_API_KEY}`
      );
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      console.log(result);
      setSingleRecommendedMovie(result.results);
    } catch (err) {
      console.error("Error fetching movie videos:", err.message);
    }
  }  
  const location = useLocation();

  // Scroll to the top of the page on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(()=>{
    fetchSingleMovie()
  },[id])

  useEffect(()=>{
   fetchSingleMovieCredits()
  },[id])

  useEffect(()=>{
    fetchSimilarMovie()
   },[id])

   useEffect(()=>{
    fetchRecommendedMovie()
   },[id])




  return (
     <> 

      {loading ? <SkeletonLayout /> : <SinglePageMovie singleMovie={singleMovie} singleMovieCredits={singleMovieCredits} singleSimilarMovie={singleSimilarMovie} singleRecommendedMovie={singleRecommendedMovie}/>}

     </>
  )
}

export default SinglePage