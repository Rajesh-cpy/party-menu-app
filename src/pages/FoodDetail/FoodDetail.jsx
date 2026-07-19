import { useNavigate, useParams } from 'react-router-dom'
import { getMenuItemById } from '../../services/menuService'
import { useState } from 'react'
import { getSavedRecipes } from '../../utils/recipeStorage'
import {
  saveRecipe,
  removeRecipe,
  isRecipeSaved,
} from '../../utils/recipeStorage'

import './FoodDetail.css'

const FoodDetail = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const food = getMenuItemById(id)
  const [saved, setSaved] = useState(isRecipeSaved(id))

  const handleSaveRecipe = () => {
    if (saved) {
      removeRecipe(food.id)
    } else {
      saveRecipe(food)
    }

    setSaved(!saved)
  }

  if (!food) {
    return (
      <div className="food-detail-page">
        <h1>Food Not Found</h1>

        <button type="button" onClick={() => navigate('/')}>
          Back to Menu
        </button>
      </div>
    )
  }

  return (
    <div className="food-detail-page">
      <div className="food-detail-container">
        <div className="detail-top-bar">
          <button
            type="button"
            className="detail-back-btn"
            onClick={() => navigate('/')}
          >
            ← Back to Menu
          </button>

          <div className="detail-top-actions">
            <button
              type="button"
              className="detail-saved-btn"
              onClick={() => navigate('/saved-recipes')}
            >
              Saved Recipes
              {getSavedRecipes().length > 0 && (
                <span className="saved-count-badge">
                  {getSavedRecipes().length}
                </span>
              )}
            </button>

            <button
              type="button"
              className={`detail-save-btn ${saved ? 'detail-save-active' : ''}`}
              onClick={handleSaveRecipe}
            >
              {saved ? 'Saved ✓' : 'Save Recipe'}
            </button>
          </div>
        </div>

        <div className="detail-hero-section">
          <div className="detail-image-section">
            <img src={food.image} alt={food.name} className="detail-image" />
          </div>

          <div className="detail-content">
            <div className="detail-badges">
              <span className="detail-category-badge">{food.category}</span>

              <span
                className={`detail-diet-badge ${
                  food.isVeg ? 'detail-veg' : 'detail-non-veg'
                }`}
              >
                {food.isVeg ? '🌿 Veg' : '🍗 Non-Veg'}
              </span>
            </div>

            <h1 className="detail-title">{food.name}</h1>

            <p className="detail-servings">{food.servings}</p>

            <p className="detail-description">{food.fullDescription}</p>
          </div>
        </div>

        <div className="detail-ingredients-card">
          <h1 className="detail-ingredients-title">Ingredients</h1>

          <ul className="detail-ingredients-list">
            {food.ingredients.map((item) => (
              <li key={item.name}>
                <span className="detail-ingredient-name">{item.name}</span>

                <span className="detail-ingredient-quantity">
                  {item.quantity}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default FoodDetail
