
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

 export const fetchTrending = createAsyncThunk("fetchTrending",async()=>{
      try{
         const [day , week] = await Promise.all([
           axios.get("https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key="+import.meta.env.VITE_TMDB_API_KEY),
           axios.get("https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key="+import.meta.env.VITE_TMDB_API_KEY)
         ]);
         return {
           trendingMovieByDay: day.data.results,
           trendingMovieByWeek: week.data.results
         }
      }catch(err){
        return err;
      }
 })

 export const fetchPopular = createAsyncThunk("fetchPopular",async()=>{
  try{
     const [movies , TvShows] = await Promise.all([
       axios.get("https://api.themoviedb.org/3/movie/popular?language=en-US&api_key="+import.meta.env.VITE_TMDB_API_KEY),
       axios.get("https://api.themoviedb.org/3/tv/popular?language=en-US&api_key="+import.meta.env.VITE_TMDB_API_KEY)
     ]);
     return {
      popularMovies: movies.data.results,
      popularTVShows: TvShows.data.results
     }
  }catch(err){
    return err;
  }
})

export const fetchTopRated = createAsyncThunk("fetchTopRated",async()=>{
  try{
     const [movies , TvShows] = await Promise.all([
       axios.get("https://api.themoviedb.org/3/movie/top_rated?language=en-US&api_key="+import.meta.env.VITE_TMDB_API_KEY),
       axios.get("https://api.themoviedb.org/3/tv/top_rated?language=en-US&api_key="+import.meta.env.VITE_TMDB_API_KEY)
     ]);
     return {
      topRatedMovies: movies.data.results,
      topRatedTVShows: TvShows.data.results
     }
  }catch(err){
    return err;
  }
})

export const fetchSearchTerm = createAsyncThunk("fetchSearchTerm",async(searchTerm)=>{
    try{
       const result = await axios.get(`https://api.themoviedb.org/3/search/multi?query=${searchTerm}&include_adult=false&language=en-US&api_key=${import.meta.env.VITE_TMDB_API_KEY}`)
       return result.data.results;
    }catch(err){
      return err;
    }
})
 const slice = createSlice({
    name:"movieSlice",
    initialState:{
        trendingMovieByDay: [],
        trendingMovieByWeek : [],
        popularMovies:[],
        popularTVShows:[],
        topRatedMovies:[],
        topRatedTVShows:[],
        searchResults:[],
        status:"idle",
        error:null
    },
    reducers:{},
    extraReducers: (builder) => {
      builder
        .addCase(fetchTrending.pending, (state, action) => {
          state.status = "Loading...";
        })
        .addCase(fetchTrending.fulfilled, (state, action) => {
          state.trendingMovieByDay = action.payload.trendingMovieByDay;
          state.trendingMovieByWeek = action.payload.trendingMovieByWeek;
        })
        .addCase(fetchTrending.rejected, (state, action) => {
          state.status = "There is an error";
          state.error = action.payload;
        })
        .addCase(fetchPopular.pending, (state, action) => {
          state.status = "Loading...";
        })
        .addCase(fetchPopular.fulfilled, (state, action) => {
          state.popularMovies = action.payload.popularMovies;
          state.popularTVShows = action.payload.popularTVShows;
        })
        .addCase(fetchPopular.rejected, (state, action) => {
          state.status = "There is an error";
          state.error = action.payload;
        })
        .addCase(fetchTopRated.pending, (state, action) => {
          state.status = "Loading...";
        })
        .addCase(fetchTopRated.fulfilled, (state, action) => {
          state.topRatedMovies = action.payload.topRatedMovies;
          state.topRatedTVShows = action.payload.topRatedTVShows;
        })
        .addCase(fetchTopRated.rejected, (state, action) => {
          state.status = "There is an error";
          state.error = action.payload;
        })
        .addCase(fetchSearchTerm.pending, (state, action) => {
          state.status = "Loading...";
        })
        .addCase(fetchSearchTerm.fulfilled, (state, action) => {
          state.searchResults = action.payload;
        })
        .addCase(fetchSearchTerm.rejected, (state, action) => {
          state.status = "There is an error";
          state.error = action.payload;
        })
    },
  });
export const sliceReducer = slice.reducer;