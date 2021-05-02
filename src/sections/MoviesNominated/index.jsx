import MoviesNominatedContext from "contexts/MoviesNominatedContext";
import { MovieNominated } from "components/MovieNominated";
import styles from "./MoviesNominated.module.css"
import { useContext } from "react";

export function MoviesNominated({
    maxNominations = 5
}) {
    const { dispatch, moviesNominated } = useContext(MoviesNominatedContext)
    const styleSectionMoviesNominated = moviesNominated.length >= maxNominations
        ? styles.moviesNominatedSectionFinished
        : styles.moviesNominatedSection;
    return (
        <section className={styleSectionMoviesNominated}>
            <h2 className={styles.moviesNominatedSubtitle}>
                Nominations ({moviesNominated.length}/{maxNominations})
            </h2>
            {moviesNominated.length === 0 && <p>There aren't movies nominated.</p>}
            <div className={styles.moviesNominatedContainer}>
                {
                    moviesNominated.map((movie, index) =>
                        <MovieNominated
                            key={`movie-nro-${index}-${movie.imdbID}`}
                            index={index + 1}
                            movie={movie}
                            dispatch={dispatch}
                        />
                    )
                }
            </div>
        </section>
    )
}