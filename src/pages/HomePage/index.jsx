import { useReducer, useState } from "react";
import { BannerNominations } from "../../components/BannerNominations";
import { HeroApp } from "../../components/HeroApp";
import { MoviesFiltered } from "../../components/MoviesFiltered";
import { MoviesNominated } from "../../components/MoviesNominated";
import { SearchMovieForm } from "../../components/SearchMovieForm";
import {
    moviesReducer,
    initialMoviesReducer
} from "../../reducers/moviesReducers";
import styles from './HomePage.module.css'

export function HomePage() {
    const maxNominations = 5;
    const [title, setTitle] = useState("");
    const [reducer, dispatch] = useReducer(moviesReducer, initialMoviesReducer)
    return (
        <main className={styles.home}>
            <HeroApp />
            {reducer.moviesNominated.length < maxNominations
                && <SearchMovieForm title={title} setTitle={setTitle} />
            }
            {reducer.moviesNominated.length < maxNominations
                && <MoviesFiltered
                    title={title}
                    moviesNominated={reducer.moviesNominated}
                    dispatch={dispatch}
                />
            }
            {reducer.moviesNominated.length >= maxNominations &&
                <BannerNominations
                    maxNominations={maxNominations}
                />
            }
            <MoviesNominated
                moviesNominated={reducer.moviesNominated}
                dispatch={dispatch}
                maxNominations={maxNominations}
            />
        </main>
    )
}