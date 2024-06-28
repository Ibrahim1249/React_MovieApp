import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Navbar from "./Components/Navbar"

import Home from "./Components/Home"
import Movies from "./Components/Movies";
import Shows from "./Components/TvShows"
import SearchResults from "./Components/SearchResults";



function App() {
  return (
     <>
      <BrowserRouter>
        <Navbar />
        <Routes>
           <Route path="/" element={<Home/>}></Route>
           <Route path="/movies" element={<Movies/>}></Route>
           <Route path="/shows" element={<Shows/>}></Route>
           <Route path="/search/:searchTerm" element={<SearchResults />}></Route>
        </Routes>
      </BrowserRouter>
     </>
  )
}

export default App