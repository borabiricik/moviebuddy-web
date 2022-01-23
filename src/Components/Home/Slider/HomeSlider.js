import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../../Stores/Movies/moviesStore";
import SliderCards from "./SliderCards";

const Trending = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.movies.loading);
  const movies = useSelector((state) => state.movies.movies);
  useEffect(() => {
    dispatch(getMovies());
  }, []);
  if (!loading) {
    return (
      <div className="w-full px-4 lg:p-0 lg:pl-20">
        <SliderCards movies={movies} />
        {/* <SliderCards /> */}
      </div>
    );
  } else {
    return <h1>Yükleniyor...</h1>;
  }
};

export default Trending;
