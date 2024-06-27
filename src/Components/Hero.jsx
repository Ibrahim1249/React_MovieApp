import React from "react";

function Hero() {
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
            />
            <button className="btn">Search</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
