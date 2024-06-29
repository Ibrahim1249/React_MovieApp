import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Hero() {

  const [searchTerm , setSearchTerm] = useState("");
  const navigate = useNavigate();
  function handleClick(e){
    e.preventDefault();
      navigate("/search/" + searchTerm)
  }
  
   return (
     <>
      <div className="hero-container">
    
        <div className="hero">
          <h1>Welcome</h1>
          <p>
            Millions of movies, TV shows and people to discover. Explore now.
          </p>

          <div className="search">
            <input
              type="text"
              placeholder="Search for a movie or Tv shows ..."
              value={searchTerm}
              onChange={(e)=>{setSearchTerm((e.target.value).toLowerCase())}}
            />
            <button className="btn" onClick={(e)=>{handleClick(e)}}>Search</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
