import './FilterBar.css'

const categories = ['All', 'Starter', 'Main', 'Sides', 'Desert']

const diets = ['All', 'Veg', 'Non-Veg']

const FilterBar = ({
  category,
  setCategory,
  diet,
  setDiet,
  searchInput,
  setSearchInput,
  onSearch,
}) => {
  return (
    <section className="filter-bar">
      <div className="filter-group">
        <h3 className="filter-title">CATEGORY</h3>

        <div className="chip-container">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              className={`chip ${category === item ? 'active-chip' : ''}`}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <h3 className="filter-title">DIET</h3>

        <div className="chip-container">
          {diets.map((item) => (
            <button
              key={item}
              type="button"
              className={`chip ${diet === item ? 'active-chip' : ''}`}
              onClick={() => setDiet(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search by name (e.g. chicken)"
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
        />

        <button type="button" className="search-btn" onClick={onSearch}>
          Search
        </button>
      </div>
    </section>
  )
}

export default FilterBar
