import React, { useEffect, useState } from "react";
import {
  banner,
  fadeBottom,
  wrapper,
  description,
  textSection,
  trailerBtn,
} from "../../../../styles/Components/Banner/Banner.module.scss";
import { AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../../Stores/Movies/moviesStore";
import { detailsApi } from "../../../Constants/api";
const Banner = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getData();
  }, []);

  const loading = useSelector((state) => state.movies.loading);
  const movies = useSelector((state) => state.movies.movies);

  const getData = async () => {
    dispatch(getMovies());
  };

  if (!loading && movies) {
    const randomMovie = movies[parseInt(Math.random() * movies.length - 1)];

    return (
      <div className={banner}>
        <div className={wrapper}>
          <img
            src={`https://image.tmdb.org/t/p/original${randomMovie.backdrop_path}`}
          />
          <div className={`${fadeBottom} row`}>
            <div className={`${textSection} px-3 lg:px-20 lg:mb-32 `}>
              <h1 className={"text-3xl lg:text-6xl font-bold"}>
                {randomMovie.title ? randomMovie.title : randomMovie.name}
              </h1>

              <p className={"flex items-center mr-3 mb-3 lg:my-3  text-xl"}>
                <AiFillStar className="mr-3" />
                <span className="font-bold shadow-md">
                  {randomMovie.vote_average}
                </span>
              </p>

              <p className={`${description} hidden lg:block text-2xl`}>
                {randomMovie.overview}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <h2>Yükleniyor...</h2>;
  }
};

export default Banner;
