import React, { useState } from "react";
import SingleCard from "./SingleCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Display({ heading, option1, option2, data1, data2 }) {
  const [isVisible, setIsVisible] = useState(true);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

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
                  return <SingleCard key={index} movie={movie} />;
                })
              : option2.map((movie, index) => {
                  return <SingleCard key={index} movie={movie} />;
                })}
        </div>
      </div>
    </>
  );
}

export default Display;
