export function MovieNominated({ movie = {}, dispatch }) {
    const { imdbID, Title, Year } = movie;
    const handlerRemoveMovie = (movieToNominate) => {
        dispatch({
            type: "MOVIE_REMOVES",
            payload: movieToNominate
        })
    }
    return (
        <div className="ts-movie__item" id={imdbID}>
            <p className="ts-movie__details">{Title} ({Year})</p>
            <button
                className="ts-movie__button ts-movie__button--remove"
                onClick={() => handlerRemoveMovie(movie)}
            >Remove</button>
        </div>
    )
}