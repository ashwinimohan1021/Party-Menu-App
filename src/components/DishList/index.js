import DishCard from '../DishCard'
import './index.css'

const DishList = ({ dishes, selectedDishes, onAdd, onRemove }) => {
  if (dishes.length === 0) {
    return <div className="empty">No dishes found.</div>
  }

  return (
    <div className="dish-list">
      {dishes.map(d => (
        <DishCard
          key={d.id}
          dish={d}
          isSelected={selectedDishes.includes(d.id)}
          onAdd={onAdd}
          onRemove={onRemove}
        />
      ))}
    </div>
  )
}

export default DishList
