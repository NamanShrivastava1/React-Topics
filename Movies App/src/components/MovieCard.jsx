import { Link } from "react-router";

const MovieCard = ({ movie }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <Link to={`/details/${movie.id}`} className="block">
        <img
          className="aspect-[2/3] w-full object-cover"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      </Link>
      <button className="absolute right-3 top-3 grid h-7 w-7 place-items-center rounded-full bg-gray-100 text-md">
        ❤️
      </button>
      <Link to={`/details/${movie.id}`} className="block px-4 py-3">
        <h3 className="truncate font-semibold text-stone-900">{movie.title}</h3>
        <p className="mt-1 text-sm text-stone-500">
          {movie.release_date?.split("-")[0] || "Unknown year"}
        </p>
      </Link>
    </div>
  );
};

export default MovieCard;





























{
  /* <button
        type="button"
        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
        aria-pressed={favorite}
        className={`absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/95 text-lg shadow-sm transition hover:scale-105 ${favorite ? "text-red-500" : "text-stone-500"}`}
        onClick={() => toggleFavorite(movie)}
      >
        {favorite ? "♥" : "♡"}
      </button> */
}
