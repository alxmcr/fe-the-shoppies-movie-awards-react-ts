import { useReducer, useState } from "react";
import { MoviesFiltered } from "../../components/MoviesFiltered";
import { MoviesNominated } from "../../components/MoviesNominated";
import { SearchMovieForm } from "../../components/SearchMovieForm";
import {
    moviesReducer,
    initialMoviesReducer
} from "../../reducers/moviesReducers";

export function HomePage() {
    const [title, setTitle] = useState("");
    const [reducer, dispatch] = useReducer(moviesReducer, initialMoviesReducer)
    return (
        <>
            <div className="ts-hero">
                <h1 className="ts-hero--title">The Shoppies</h1>
                <p className="ts-hero--detail">Movie awards for entrepreneurs</p>
            </div>
            <SearchMovieForm title={title} setTitle={setTitle} />
            <main className="ts-main">
                {title && <MoviesFiltered
                    title={title}
                    dispatch={dispatch}
                />}
                <MoviesNominated
                    moviesNominated={reducer.moviesNominated}
                    dispatch={dispatch}
                />
            </main>
        </>
    )
}