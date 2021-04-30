import { useState } from "react";
import { MoviesFiltered } from "../../components/MoviesFiltered";
import { SearchMovieForm } from "../../components/SearchMovieForm";

export function HomePage() {
    const [title, setTitle] = useState("");
    return (
        <>
            <div className="ts-hero">
                <h1 className="ts-hero--title">The Shoppies</h1>
                <p className="ts-hero--detail">Movie awards for entrepreneurs</p>
            </div>
            <SearchMovieForm title={title} setTitle={setTitle} />
            <main className="ts-main">
                {title && <MoviesFiltered title={title} />}
            </main>
        </>
    )
}