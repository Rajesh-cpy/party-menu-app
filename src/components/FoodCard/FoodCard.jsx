import { useNavigate } from 'react-router-dom'
import './FoodCard.css'

const FoodCard = ({ food, showRemoveButton = false, onRemove = () => {} }) => {
  const navigate = useNavigate()

  const { id, image, name, category, isVeg, description, servings } = food

  const handleClick = () => {
    navigate(`/menu/${id}`)
  }

  const handleRemove = (e) => {
    e.stopPropagation()
    onRemove(id)
  }

  return (
    <article className="food-card" onClick={handleClick}>
      <div className="food-image-container">
        <img src={image} alt={name} className="food-image" />

        <span className={`diet-badge ${isVeg ? 'veg' : 'non-veg'}`}>
          {isVeg ? 'VEG' : 'NON-VEG'}
        </span>
      </div>

      <div className="food-content">
        <p className="food-category">{category.toUpperCase()}</p>

        <h3 className="food-title">{name}</h3>

        <p className="food-description">{description}</p>

        <p className="food-servings">{servings}</p>

        {showRemoveButton && (
          <button type="button" className="remove-btn" onClick={handleRemove}>
            Remove Recipe
          </button>
        )}
      </div>
    </article>
  )
}

export default FoodCard
