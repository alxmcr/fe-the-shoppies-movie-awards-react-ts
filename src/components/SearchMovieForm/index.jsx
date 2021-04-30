export function SearchMovieForm({ title, setTitle }) {
    const handleTitle = (e) => setTitle(e.target.value);
    return (
        <form className="ts-search__form">
            <div className="ts-search__group">
                <label htmlFor="title"
                    className="ts-search__label">Title:</label>
                <input type="search"
                    name="title"
                    id="title"
                    className="ts-search__input"
                    value={title}
                    onChange={handleTitle}
                />
            </div>
        </form>
    )
}