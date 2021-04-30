export function MovieItem({ movie = {}, dispatch }) {
    const { imdbID, Title, Year } = movie;
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
            >Nominate</button>
        </div>
    )
}