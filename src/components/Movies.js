import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movies({ id, rating, thumbnail, title, year, genres }) {
  return (
    <div className={styles.movie}>
      <Link to={`/movie/${id}`}>
        <div className={styles.image__wrap}>
          <img src={thumbnail} alt={title} className={styles.thumbnail} />
          <div className={styles.details}>
            <span className={styles.rating}>{rating} / 10</span>
            <ul className={styles.movie__genres}>
              {genres.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
            <span className={styles.detailBtn}>View Details</span>
          </div>
        </div>
        <h1 className={styles.movie__title}>{title}</h1>
      </Link>
      <p className={styles.movie__year}>{year}</p>
    </div>
  );
}

Movies.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movies;
