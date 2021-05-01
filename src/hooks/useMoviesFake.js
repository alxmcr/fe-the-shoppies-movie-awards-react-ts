import { useEffect, useState } from "react";
import { moviesAPI } from "../data/moviesAPI";

export function useMoviesFake(title = "") {
    const [searching, setSearching] = useState(false);
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        setSearching(true);
        setTimeout(() => {
            setMovies(moviesAPI)
            setSearching(false);
        }, 5000);
    }, [title])


    return { searching, movies, errorAPI: null }
}