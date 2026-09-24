import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard.jsx";
import { searchMovies, getPopularMovies } from "../services/api";

const Home = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load Movies...");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const searchHandler = async (e) => {
    e.preventDefault();

    if (!search.trim()) return;
    if (loading) return;

    setLoading(true);
    try {
      const searchResults = await searchMovies(search);
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to Search Movie...");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="mx-auto max-w-6xl px-5 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-stone-900">
          Find something to watch
        </h1>
      </div>
      <form className="mb-8 flex max-w-xl gap-2" onSubmit={searchHandler}>
        <input
          type="text"
          value={search}
          placeholder="Search for movies..."
          className="min-w-0 flex-1 rounded-md border border-stone-300 bg-white px-4 py-2.5 outline-none placeholder:text-stone-400"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button
          type="submit"
          className="rounded-md bg-stone-900 px-5 py-2.5 font-medium text-white hover:bg-stone-700"
          disabled={loading}
        >
          Search
        </button>
      </form>

      {error && (
        <div className="mb-6 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-red-700">
          {error}
        </div>
      )}

      {loading ? (
        <div className="py-12 text-center text-stone-500">
          Loading movies...
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {movies.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })}
        </div>
      )}
    </main>
  );
};

export default Home;
