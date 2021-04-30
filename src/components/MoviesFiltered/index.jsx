import { useMovies } from "../../hooks/useMovies";
import { MovieItem } from "../MovieItem";

export function MoviesFiltered({ title = "" }) {
    const { loading, movies, error } = useMovies(title);

    if (!title) return null;

    return (
        <section className="ts-movies__container">
            <h2 className="ts-movies__h2">Results for "{title}"</h2>
            {loading &&
                <p className="ts-movies__message">
                    Searching movies with "{title}" as title.
                </p>
            }
            {error &&
                <p className="ts-movies__message ts-movies__message--error">
                    Searching movies with "{title}" as title.
                </p>
            }
            {movies.length === 0 &&
                <p className="ts-movies__message ts-movies__message--info">
                    There aren't movies with "{title}" as title.
                </p>
            }
            {
                movies.map((movie, index) =>
                    <MovieItem key={`movie-nro-${index}-${movie.imdbID}`} movie={movie} />
                )
            }
        </section>
    )
}