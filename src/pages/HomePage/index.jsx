import { useEffect, useReducer, useState } from "react";
import { BannerNominations } from "components/BannerNominations";
import { HeroApp } from "components/HeroApp";
import { MoviesFiltered } from "sections/MoviesFiltered";
import { MoviesNominated } from "sections/MoviesNominated";
import { SearchMovieForm } from "components/SearchMovieForm";
import MoviesNominatedContext from "contexts/MoviesNominatedContext";
import {
    moviesReducer,
    initialMoviesReducer
} from "../../reducers/moviesReducers";
import styles from './HomePage.module.css'

export function HomePage() {
    const maxNominations = 5;
    const [title, setTitle] = useState("");
    const [showBanner, setShowBanner] = useState(false);
    const [showMovies, setShowMovies] = useState(false);
    const [reducer, dispatch] = useReducer(moviesReducer, initialMoviesReducer)
    const moviesNominated = reducer.moviesNominated;
    const valueProvider = {
        moviesNominated,
        dispatch
    }
    useEffect(() => {
        setShowBanner(moviesNominated.length >= maxNominations);
        setShowMovies(moviesNominated.length < maxNominations);
    }, [moviesNominated, maxNominations]);
    return (
        <MoviesNominatedContext.Provider value={valueProvider}>
            <main className={styles.home}>
                {showBanner &&
                    <BannerNominations
                        maxNominations={maxNominations}
                        setShowBanner={setShowBanner}
                    />
                }
                <HeroApp />
                {showMovies &&
                    <SearchMovieForm
                        title={title}
                        setTitle={setTitle}
                    />
                }
                {showMovies && <MoviesFiltered title={title} />}
                <MoviesNominated maxNominations={maxNominations} />
            </main>
        </MoviesNominatedContext.Provider >
    )
}