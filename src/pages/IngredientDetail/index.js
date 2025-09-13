import { useParams, Link } from 'react-router-dom'
import { dishes } from '../../data/mockDishes'
import './index.css'

const IngredientDetail = () => {
  const { id } = useParams()
  const dish = dishes.find(d => String(d.id) === String(id))

  if (!dish) {
    return (
      <div className="page">
        <p>Dish not found.</p>
        <Link to="/" className="btn">Back</Link>
      </div>
    )
  }

  return (
    <div className="page ingredient-page">
      <Link to="/" className="back-link">&larr; Back to menu</Link>

      <div className="ingredient-card">
        <img src={dish.image} alt={dish.name} className="ingredient-img" />
        <div className="ingredient-body">
          <h2>{dish.name}</h2>
          <p className="dish-desc">{dish.description}</p>

          <h3>Ingredients</h3>
          <ul className="ingredient-list">
            {dish.ingredients.map((ing, idx) => (
              <li key={idx}>
                <strong>{ing.name}</strong> — {ing.quantity}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default IngredientDetail
