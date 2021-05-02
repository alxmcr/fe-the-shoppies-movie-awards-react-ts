import { useEffect, useState } from "react";

const apiKeyOMDB = process.env.REACT_APP_API_KEY;
const typeResults = "movie";
const baseURLAPI = `https://www.omdbapi.com/?apikey=${apiKeyOMDB}`;

export function useMovies(title = "") {
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const [errorAPI, setErrorAPI] = useState(null);
    useEffect(() => {
        setLoading(true);
        const urlAPI = `${baseURLAPI}&type=${typeResults}&s=${title}`;
        fetch(urlAPI)
            .then(response => response.json())
            .then(data => {
                const { Search, Error } = data;

                if (!!Search) {
                    setMovies(Search);
                } else {
                    setMovies([]);
                    setErrorAPI(Error)
                }
            })
            .catch((err) => setErrorAPI(err))
            .finally(() => setLoading(false))

    }, [title])


    return { loading, movies, errorAPI }
}