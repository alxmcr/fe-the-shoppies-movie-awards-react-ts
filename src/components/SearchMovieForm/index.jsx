import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./SearchMovieForm.module.css";

export function SearchMovieForm({ title, setTitle }) {
    const handleTitle = (e) => setTitle(e.target.value);
    const preventSearch = (e) => e.preventDefault();
    return (
        <form className={styles.searchMovieForm} onSubmit={preventSearch}>
            <div>
                <label htmlFor="title"
                    className={styles.searchMovieLabel}>Movie Title</label>
                <div className={styles.searchMovieInputSearch}>
                    <i className={styles.searchMovieIcon}>
                        <FontAwesomeIcon icon={faSearch} />
                    </i>
                    <input type="search"
                        name="title"
                        id="title"
                        className={styles.searchMovieInput}
                        value={title}
                        onChange={handleTitle}
                        placeholder="Enter a movie title here..."
                        maxLength={20}
                    />
                </div>
            </div>
        </form>
    )
}