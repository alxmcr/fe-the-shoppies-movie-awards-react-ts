export function MovieItem({ movie = {}, dispatch, moviesNominated = [] }) {
    const { imdbID, Title, Year } = movie;
    const isNominated = (movie, moviesNominated) => {
        const movieFound = moviesNominated.find(({ imdbID }) => {
            return movie.imdbID === imdbID
        });

        return movieFound !== undefined
    }
    const handlerNominationMovie = (movieToNominate) => {
        dispatch({
            type: "MOVIE_NOMINATES",
            payload: movieToNominate
        })
    }
    return (
        <div className="ts-movie__item" id={imdbID}>
            <p className="ts-movie__details">{Title} ({Year})</p>
            <button
                className="ts-movie__button ts-movie__button--nominate"
                onClick={() => handlerNominationMovie(movie)}
                disabled={isNominated(movie, moviesNominated)}
            >Nominate</button>
        </div >
    )
}