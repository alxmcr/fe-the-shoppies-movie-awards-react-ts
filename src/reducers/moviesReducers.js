const currentMoviesNominated = JSON.parse(localStorage.getItem("moviesNominated"));
const initialMoviesReducer = {
    moviesNominated: (!currentMoviesNominated ? [] : currentMoviesNominated)
}

const moviesReducer = (state, action) => {
    const { moviesNominated } = state;
    const { type, payload } = action;
    let currentState = state;
    let moviesNominatedToStore = [];
    switch (type) {
        case "MOVIE_NOMINATES":
            const findMovieById = ({ imdbID }) => payload.imdbID === imdbID;
            const isNominateYet = moviesNominated.find(movie =>
                findMovieById(movie));

            if (isNominateYet) return state;

            moviesNominatedToStore = [...moviesNominated, payload]
            currentState = {
                moviesNominated: moviesNominatedToStore
            };
            localStorage.setItem("moviesNominated", JSON.stringify(moviesNominatedToStore))
            return currentState;
        case "MOVIE_REMOVES":
            const filterMovieRemoved = ({ imdbID }) => {
                return payload.imdbID !== imdbID;
            }
            moviesNominatedToStore = moviesNominated.filter(filterMovieRemoved);
            currentState = {
                moviesNominated: moviesNominatedToStore
            }
            localStorage.setItem("moviesNominated", JSON.stringify(moviesNominatedToStore))
            return currentState;
        default:
            return currentState;
    }
}

export { initialMoviesReducer, moviesReducer }