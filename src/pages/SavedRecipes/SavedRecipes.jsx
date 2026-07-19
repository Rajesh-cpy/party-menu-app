import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import FoodCard from '../../components/FoodCard/FoodCard'

import { getSavedRecipes, removeRecipe } from '../../utils/recipeStorage'

import './SavedRecipes.css'

const SavedRecipes = () => {
  const navigate = useNavigate()

  const [recipes, setRecipes] = useState(getSavedRecipes())

  const handleRemove = (id) => {
    removeRecipe(id)
    setRecipes(getSavedRecipes())
  }

  return (
    <div className="saved-page">
      <div className="saved-container">
        <div className="saved-top">
          <div>
            <h1 className="saved-heading">Saved Recipes</h1>

            <p className="saved-count">
              {recipes.length} recipe{recipes.length !== 1 ? 's' : ''} saved
            </p>
          </div>

          <button
            type="button"
            className="back-btn"
            onClick={() => navigate('/')}
          >
            ← Back to Menu
          </button>
        </div>

        {recipes.length === 0 ? (
          <div className="empty-state">
            <h2>No saved recipes yet.</h2>

            <button
              type="button"
              className="browse-btn"
              onClick={() => navigate('/')}
            >
              Browse the Menu
            </button>
          </div>
        ) : (
          <div className="food-saved-grid">
            {recipes.map((recipe) => (
              <FoodCard
                key={recipe.id}
                food={recipe}
                showRemoveButton
                onRemove={handleRemove}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default SavedRecipes
