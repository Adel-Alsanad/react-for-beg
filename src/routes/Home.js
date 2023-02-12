import { useEffect, useState } from "react";
import Movies from "../components/Movies";
import styles from "./Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const fetchMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year"
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <div className={styles.container}>
      {loading ? (
        <h1 className={styles.loading}></h1>
      ) : (
        <div className={styles.moviesList}>
          {movies.map((movie) => {
            return (
              <Movies
                key={movie.id}
                id={movie.id}
                thumbnail={movie.medium_cover_image}
                title={movie.title}
                year={movie.year}
                genres={movie.genres}
                rating={movie.rating}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Home;
