
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMovieOfTheDay = createAsyncThunk("fetchMovie", async()=>{
   try{
     const result = await axios.get("https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key="+import.meta.env.VITE_TMDB_API_KEY);
      return result.data.results;
   }catch(err){
      return err
   }
})

export const fetchPopularMovie = createAsyncThunk("fetchPopularMovie", async()=>{
   try{
     const result = await axios.get("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&region=India&api_key="+import.meta.env.VITE_TMDB_API_KEY);
      return result.data.results;
   }catch(err){
      return err
   }
})

export const fetchTopRatedMovie = createAsyncThunk("fetchTopRated",async()=>{
   try{
     const result = await axios.get("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&region=India&api_key="+import.meta.env.VITE_TMDB_API_KEY);
     return result.data.results;
   }catch(err){
     return err
   }
})


 const slice = createSlice({
    name:"movieSlice",
    initialState:{
        trendingMovieByDay: [],
        trendingMovieByWeek : [],
        popularMovie:[],
        topRatedMovie:[],
        status:"idle",
        error:null
    },
    reducers:{},
    extraReducers: (builder) => {
      builder
        .addCase(fetchMovieOfTheDay.pending, (state, action) => {
          state.status = "Loading...";
        })
        .addCase(fetchMovieOfTheDay.fulfilled, (state, action) => {
          state.trendingMovieByDay = action.payload;
        })
        .addCase(fetchMovieOfTheDay.rejected, (state, action) => {
          state.status = "There is an error";
          state.error = action.payload;
        })
        .addCase(fetchPopularMovie.pending, (state, action) => {
          state.status = "Loading...";
        })
        .addCase(fetchPopularMovie.fulfilled, (state, action) => {
          state.popularMovie = action.payload;
        })
        .addCase(fetchPopularMovie.rejected, (state, action) => {
          state.status = "There is an error";
          state.error = action.payload;
        }).addCase(fetchTopRatedMovie.pending,(state,action)=>{
           state.status = "Loading...";
        }).addCase(fetchTopRatedMovie.fulfilled, (state, action) => {
          state.topRatedMovie = action.payload;
        })
        .addCase(fetchTopRatedMovie.rejected, (state, action) => {
          state.status = "There is an error";
          state.error = action.payload;
        });
    },
  });
export const sliceReducer = slice.reducer;