import { faMedal } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './MovieItem.module.css'

export function MovieItem({ movie = {}, dispatch, isNominated = false }) {
    const { imdbID, Title, Year, Poster } = movie;
    const handlerNominationMovie = (movieToNominate) => {
        dispatch({
            type: "MOVIE_NOMINATES",
            payload: movieToNominate
        })
    }
    const stylesComponent = isNominated ? {
        movieItem: styles.movieItemDisabled,
        movieItemImage: styles.movieItemImageDisabled,
        movieItemButton: styles.movieItemButtonDisabled
    } : {
        movieItem: styles.movieItemActived,
        movieItemImage: styles.movieItemImageActived,
        movieItemButton: styles.movieItemButtonActived
    };

    return (
        <div className={stylesComponent.movieItem} id={imdbID}>
            <img
                src={Poster}
                alt={`${Title} movie`}
                className={stylesComponent.movieItemImage}
            />
            <p className={styles.movieItemTitle}>{Title} ({Year})</p>
            <button
                className={stylesComponent.movieItemButton}
                onClick={() => handlerNominationMovie(movie)}
                disabled={isNominated}
            >Nominate
                <FontAwesomeIcon icon={faMedal} />
            </button>
        </div >
    )
}