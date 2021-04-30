export function MovieNominated({ movie = {} }) {
    const { imdbID, Title, Year } = movie;
    return (
        <div className="ts-movie__item" id={imdbID}>
            <p className="ts-movie__details">{Title} ({Year})</p>
        </div>
    )
}