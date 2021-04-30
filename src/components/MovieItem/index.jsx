export function MovieItem({ movie = {} }) {
    const { imdbID, Title, Year } = movie;
    return (
        <div className="ts-movie__item" id={imdbID}>
            <p className="ts-movie__details">{Title} ({Year})</p>
            <button
                className="ts-movie__button ts-movie__button--nominate"
            >Nominate</button>
        </div>
    )
}