import React, { useState } from "react";
import SingleCard from "./SingleCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Display({ heading, option1, option2, data1, data2 , movieList , tvList }) {
  const [isVisible, setIsVisible] = useState(true);

 


  return (
    <>
      <div className="display-container">
        <div className="container">
          <h2>{heading}</h2>
          <div className="toggle">
            <p
              className={isVisible ? "active toggle-option" : "toggle-option"}
              onClick={() => setIsVisible(true)}
            >
              {data1}
            </p>
            <p
              className={!isVisible ? "active toggle-option" : "toggle-option"}
              onClick={() => setIsVisible(false)}
            >
              {data2}
            </p>
          </div>
        </div>

        <div className="display-movies">
            {isVisible
              ? option1.map((movie, index) => {
                  return <SingleCard key={index} movie={movie} movieList={movieList} tvList={tvList} isVisible={isVisible}/>;
                })
              : option2.map((movie, index) => {
                  return <SingleCard key={index} movie={movie} movieList={movieList} tvList={tvList} isVisible={isVisible} />;
                })}
        </div>
      </div>
    </>
  );
}

export default Display;