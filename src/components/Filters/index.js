import './index.css'

const Filters = ({
  categories,
  activeCategory,
  onCategoryChange,
  searchTerm,
  onSearchChange,
  vegOnly,
  nonVegOnly,
  onVegToggle,
  onNonVegToggle,
  countsByCategory,
}) => {
  return (
    <div className="filters">
      <div className="tabs">
        {categories.map(cat => (
          <button
            key={cat}
            className={`tab ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => onCategoryChange(cat)}
          >
            <div>{cat}</div>
            <div className="tab-count">{countsByCategory[cat] || 0}</div>
          </button>
        ))}
      </div>

      <div className="controls">
        <input
          placeholder={`Search in ${activeCategory}`}
          value={searchTerm}
          onChange={e => onSearchChange(e.target.value)}
          className="search"
        />

        <div className="toggles">
          <label className="toggle">
            <input
              type="checkbox"
              checked={vegOnly}
              onChange={() => onVegToggle(!vegOnly)}
            />
            Veg
          </label>

          <label className="toggle">
            <input
              type="checkbox"
              checked={nonVegOnly}
              onChange={() => onNonVegToggle(!nonVegOnly)}
            />
            Non-Veg
          </label>
        </div>
      </div>
    </div>
  )
}

export default Filters
