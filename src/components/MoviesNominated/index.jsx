import { MovieNominated } from "../MovieNominated";

export function MoviesNominated({ moviesNominated = [] }) {
    return (
        <section className="ts-movies__container">
            <h2 className="ts-movies__h2">Nominations</h2>
            {moviesNominated.length === 0 && <p className="ts-movies__info">There aren't movies nominated.</p>}
            {
                moviesNominated.map((movie, index) =>
                    <MovieNominated
                        key={`movie-nro-${index}-${movie.imdbID}`}
                        movie={movie}
                    />
                )
            }
        </section>
    )
}