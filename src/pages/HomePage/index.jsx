import { useReducer, useState } from "react";
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
    const [reducer, dispatch] = useReducer(moviesReducer, initialMoviesReducer)
    const moviesNominated = reducer.moviesNominated;
    const valueProvider = {
        moviesNominated,
        dispatch
    }
    return (
        <MoviesNominatedContext.Provider value={valueProvider}>
            <main className={styles.home}>
                <HeroApp />
                {moviesNominated.length < maxNominations
                    && <SearchMovieForm title={title} setTitle={setTitle} />
                }
                {moviesNominated.length < maxNominations
                    && <MoviesFiltered title={title} />
                }
                {moviesNominated.length >= maxNominations &&
                    <BannerNominations maxNominations={maxNominations} />
                }
                <MoviesNominated maxNominations={maxNominations} />
            </main>
        </MoviesNominatedContext.Provider >
    )
}