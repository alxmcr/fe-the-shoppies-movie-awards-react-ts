import { useMoviesFake } from "../../hooks/useMoviesFake";
import { MovieItem } from "../MovieItem";
import styles from "./MoviesFiltered.module.css"

export function MoviesFiltered({
    title = "",
    dispatch,
    moviesNominated = []
}) {
    const { searching, movies, error } = useMoviesFake(title);

    if (!title) return null;

    const isNominated = (movie, moviesNominated) => {
        const movieFound = moviesNominated.find(({ imdbID }) => {
            return movie.imdbID === imdbID
        });

        return movieFound !== undefined
    }

    return (
        <section className={styles.moviesFilteredSection}>
            <h2 className={styles.moviesFilteredSubtitle}>
                Results for "{title}"
            </h2>
            {(title && searching) &&
                <p>
                    Searching movies with "{title}" as title...
                </p>
            }
            {error &&
                <p>
                    There was an error when we searching a movie "{title}" as title...
                </p>
            }
            {(movies.length === 0 && !searching) &&
                <p>
                    There aren't movies with "{title}" as title.
                </p>
            }
            {
                !searching && (
                    <div className={styles.moviesFilteredContainer}>
                        {
                            movies.map((movie, index) =>
                                <MovieItem
                                    key={`movie-nro-${index}-${movie.imdbID}`}
                                    movie={movie}
                                    dispatch={dispatch}
                                    isNominated={
                                        isNominated(movie, moviesNominated)
                                    }
                                />
                            )
                        }
                    </div>
                )
            }
        </section>
    )
}