
import { useParams } from "react-router-dom"
import SkeletonLayout from "./SkeletonLayout"
import SinglePageMovie from "./SinglePageMovie";
import { useEffect, useState } from "react";



function SinglePage() {
  const {id} = useParams();
  const [singleMovie , setSingleMovie] = useState(null);
  const [loading , setLoading] = useState(false);

  
  const fetchSingleMovie = async()=>{
     try{
        setLoading(true)
       const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}&include_video=true&language=en-US`);
       const result  = await response.json();
       setLoading(false)
       console.log(result)
       setSingleMovie(result)
     }catch(err){
        console.log(err)
     }
  }
  useEffect(()=>{
    fetchSingleMovie()
  },[id])

  return (
     <> 
       {loading ? <SkeletonLayout /> : <SinglePageMovie singleMovie={singleMovie}/>}
     </>
  )
}

export default SinglePage