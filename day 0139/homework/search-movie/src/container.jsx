import { useState } from "react";
import { MovieInfo } from "./presentational";
import { MovieForm } from "./presentational2";

export const Container = () => {
  const [movie, setMovie] = useState(null);
  const fetchData = async (query) => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=c761762c&t=${query}`);
      const data = await response.json();
      setMovie(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      {movie && movie.Response !== "False" && (
        <MovieInfo
          title={movie.Title}
          year={movie.Year}
          director={movie.Director}
          actors={movie.Actors}
          language={movie.Language}
        />
      )}

      <MovieForm search={fetchData} />
    </div>
  );
};