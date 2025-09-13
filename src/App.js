import { useMemo, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Filters from './components/Filters'
import DishList from './components/DishList'
import IngredientDetail from './pages/IngredientDetail'
import { dishes as allDishes, CATEGORIES } from './data/mockDishes'
import './App.css'

function HomePage() {
  const navigate = useNavigate()
  const [activeCategory, setActiveCategory] = useState('MAIN COURSE')
  const [searchTerm, setSearchTerm] = useState('')
  const [vegOnly, setVegOnly] = useState(false)
  const [nonVegOnly, setNonVegOnly] = useState(false)
  const [selectedDishes, setSelectedDishes] = useState([])

  // counts per category for display in tabs (selected count)
  const countsByCategory = useMemo(() => {
    const obj = {}
    CATEGORIES.forEach(c => (obj[c] = selectedDishes.filter(id => {
      const d = allDishes.find(dd => dd.id === id)
      return d?.mealType === c
    }).length))
    return obj
  }, [selectedDishes])

  // filter logic: category, search (case-insensitive), veg/non-veg toggles
  const filtered = useMemo(() => {
    return allDishes.filter(d => {
      if (d.mealType !== activeCategory) return false

      // veg/non-veg toggles:
      if (vegOnly && !nonVegOnly) {
        if (d.type !== 'VEG') return false
      } else if (!vegOnly && nonVegOnly) {
        if (d.type !== 'NON-VEG') return false
      } else if (vegOnly && nonVegOnly) {
        // both checked -> show both (no-op)
      }

      // search on name only
      if (searchTerm.trim()) {
        const q = searchTerm.trim().toLowerCase()
        if (!d.name.toLowerCase().includes(q)) return false
      }

      return true
    })
  }, [activeCategory, searchTerm, vegOnly, nonVegOnly])

  const handleAdd = id => setSelectedDishes(prev => (prev.includes(id) ? prev : [...prev, id]))
  const handleRemove = id => setSelectedDishes(prev => prev.filter(x => x !== id))

  const totalSelected = selectedDishes.length

  return (
    <div className="app-container">
      <h1 className="app-title">Party Menu Selection</h1>

      <Filters
        categories={CATEGORIES}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        vegOnly={vegOnly}
        nonVegOnly={nonVegOnly}
        onVegToggle={setVegOnly}
        onNonVegToggle={setNonVegOnly}
        countsByCategory={countsByCategory}
      />

      <div className="content">
        <DishList
          dishes={filtered}
          selectedDishes={selectedDishes}
          onAdd={handleAdd}
          onRemove={handleRemove}
        />
      </div>

      <div className="summary">
        <div>Selected per tab:</div>
        <div className="summary-tabs">
          {CATEGORIES.map(cat => (
            <div key={cat} className="summary-pill">
              <strong>{cat}:</strong> {countsByCategory[cat] || 0}
            </div>
          ))}
        </div>

        <div className="summary-total">
          <strong>Total selected: {totalSelected}</strong>
        </div>

        <div className="summary-actions">
          <button className="btn btn-continue" onClick={() => alert('Continue clicked')}>
            Continue
          </button>
          <button
            className="btn btn-clear"
            onClick={() => {
              setSelectedDishes([])
            }}
          >
            Clear selection
          </button>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ingredient/:id" element={<IngredientDetail />} />
    </Routes>
  )
}
