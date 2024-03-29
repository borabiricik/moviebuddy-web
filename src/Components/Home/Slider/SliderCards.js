import React, { useEffect } from "react";
import Slider from "react-slick";
import SliderCard from "./SliderCard";

const SliderCards = ({ movies }) => {
  const settings = {
    dots: false,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    swipeToSlide: true,
    infinite: false,
    easing: "linear",
    speed: 200,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <h1 className={"py-5 lg:text-5xl text-xl"}>Trending Movies</h1>
      <Slider {...settings} className="">
        {movies &&
          movies.map((movie, key) => {
            return <SliderCard key={key} movie={movie} />;
          })}
      </Slider>
    </>
  );
};

export default SliderCards;
