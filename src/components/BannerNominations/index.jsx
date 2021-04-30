export function BannerNominations({ maxNominations = 5, moviesNominated = [] }) {
    if (moviesNominated.length === 0) return null;
    if (moviesNominated.length < maxNominations) return null;

    return (
        <div className="ts-banner">
            <h3 className="ts-banner--h3">Congratulations!</h3>
            <p className="ts-banner--message">You have already nominated {maxNominations} movies. Thank you so much for your support and help!</p>
        </div>
    )
}