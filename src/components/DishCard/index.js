import { Link } from 'react-router-dom'
import './index.css'

const DishCard = ({ dish, isSelected, onAdd, onRemove }) => {
  return (
    <div className={`dish-card ${isSelected ? 'selected' : ''}`}>
      <img src={dish.image} alt={dish.name} className="dish-image" />
      <div className="dish-body">
        <h3 className="dish-name">{dish.name}</h3>
        <p className="dish-desc">{dish.description}</p>
        <div className="dish-meta">
          <span className="pill">{dish.type}</span>
          <span className="pill">{dish.mealType}</span>
        </div>
        <div className="dish-actions">
          {isSelected ? (
            <button className="btn btn-remove" onClick={() => onRemove(dish.id)}>
              Remove
            </button>
          ) : (
            <button className="btn btn-add" onClick={() => onAdd(dish.id)}>
              Add
            </button>
          )}

          {/* Ingredient navigation */}
          <Link to={`/ingredient/${dish.id}`} className="link-ingredient">
            Ingredient
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DishCard
