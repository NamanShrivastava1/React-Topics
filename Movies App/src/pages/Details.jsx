import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { getMovieDetails } from "../services/api";

const Details = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    getMovieDetails(id)
      .then(setMovie)
      .catch(() => setError("Could not load this movie."));
  }, [id]);

  if (error)
    return (
      <main className="mx-auto max-w-6xl px-5 py-12 text-red-600">{error}</main>
    );
  if (!movie)
    return (
      <main className="mx-auto max-w-6xl px-5 py-12 text-stone-500">
        Loading details...
      </main>
    );

  return (
    <main className="mx-auto max-w-4xl px-5 py-10">
      <Link
        to="/"
        className="text-sm font-medium text-stone-500 hover:text-stone-900"
      >
        ← Back to movies
      </Link>
      <div className="mt-6 grid gap-8 md:grid-cols-[260px_1fr]">
        <img
          className="w-full rounded-lg shadow-sm"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div>
          <p className="text-sm font-medium text-red-500">
            {movie.release_date?.split("-")[0]}
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight">
            {movie.title}
          </h1>
          <p className="mt-5 leading-7 text-stone-600">
            {movie.overview || "No overview is available for this movie."}
          </p>
          <p className="mt-6 text-sm text-stone-500">
            Rating: {movie.vote_average?.toFixed(1)}/10
          </p>
        </div>
      </div>
    </main>
  );
};

export default Details;
