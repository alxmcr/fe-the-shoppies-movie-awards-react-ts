import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./MovieNominated.module.css";

export function MovieNominated({ movie = {}, dispatch, index = 1 }) {
    const { imdbID, Title, Year } = movie;
    const handlerRemoveMovie = (movieToNominate) => {
        dispatch({
            type: "MOVIE_REMOVES",
            payload: movieToNominate
        })
    }
    return (
        <div className={styles.movieNominated} id={imdbID}>
            <p className={styles.movieNominatedTitle}>{index}. {Title} ({Year})</p>
            <button
                className={styles.movieNominatedButton}
                onClick={() => handlerRemoveMovie(movie)}
            >Remove <i className={styles.movieNominatedIcon}
                onClick={() => handlerRemoveMovie(movie)}
            >
                    <FontAwesomeIcon icon={faTimes} />
                </i></button>


        </div>
    )
}