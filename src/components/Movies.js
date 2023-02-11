import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movies({ thumbnail, title, summary, genres }) {
  return (
    <div>
      <img src={thumbnail} alt={title} />
      <h1>
        <Link to="/movie">{title}</Link>
      </h1>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
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
