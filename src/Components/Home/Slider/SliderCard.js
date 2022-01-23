import React, { useState, useEffect } from "react";
import {
  name,
  year,
} from "../../../../styles/Components/Trending/Trending.module.scss";
import { detailsApi } from "../../../Constants/api";

const SliderCard = ({ movie }) => {
  const [detailsData, setdetailsData] = useState();
  const [loading, setloading] = useState(false);
  const getMovieDetails = async (state) => {
    setloading(true);
    await detailsApi
      .get("movie/" + state)
      .then((res) => {
        setdetailsData(res.data);
        setloading(false);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getMovieDetails(movie.id);
  }, []);

  if (loading === false) {
    let str = movie.title ? movie.title : movie.name;
    if (str.length > 20) {
      str = str.substring(0, 15);
      str = str + "...";
      console.log(str);
    }
    return (
      <div className={`pr-4 py-2`}>
        <div
          className="bg-cardBg rounded-md cursor-pointer"
          style={{ maxHeight: 600,minHeight:505 }}
        >
          <img
            className="w-full rounded-md"
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          />
          <p className={`${name} text-textPrimary font-bold pt-2 pl-3`}>
            {str}
          </p>
          <p className={`${year} text-textSecondary font-semibold pb-2 pl-3`}>
            {movie.release_date
              ? new Date(movie.release_date).getFullYear()
              : new Date(movie.first_air_date).getFullYear()}
          </p>
          <div className="flex items-center justify-between">
            {detailsData && detailsData["watch/providers"].results.US?.flatrate && (
              <small>Watch on: </small>
            )}
            {detailsData &&
              detailsData["watch/providers"].results.US?.flatrate?.map((f) => {
                return (
                  <img
                    style={{ width: 30, height: 30 }}
                    src={`https://image.tmdb.org/t/p/original${f.logo_path}`}
                    alt=""
                  />
                );
              })}
          </div>

          {/* {console.log(
            detailsData &&
              detailsData["watch/providers"].results.US?.flatrate?.map(
                (f) => f.logo_path
              )
          )} */}
        </div>
      </div>
    );
  } else {
    return <h2>Yükleniyor...</h2>;
  }
};

export default SliderCard;
