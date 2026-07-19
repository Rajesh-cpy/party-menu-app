import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './Header.css'

import { getSavedRecipes } from '../../utils/recipeStorage'

const Header = () => {
  const navigate = useNavigate()

  const [savedCount, setSavedCount] = useState(0)

  const user = JSON.parse(localStorage.getItem('party_menu_user'))

  useEffect(() => {
    const updateSavedCount = () => {
      setSavedCount(getSavedRecipes().length)
    }

    updateSavedCount()

    window.addEventListener('savedRecipesUpdated', updateSavedCount)

    return () => {
      window.removeEventListener('savedRecipesUpdated', updateSavedCount)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('party_menu_token')
    localStorage.removeItem('party_menu_user')

    navigate('/signin')
  }

  const handleSavedRecipes = () => {
    navigate('/saved-recipes')
  }

  return (
    <header className="header">
      <div className="header-left">
        <h1 className="header-title">Party Menu</h1>

        <p className="header-subtitle">Welcome, {user?.name || 'Guest'}</p>
      </div>

      <div className="header-right">
        <button
          type="button"
          className="header-btn secondary-btn"
          onClick={handleSavedRecipes}
        >
          Saved Recipes
          {savedCount > 0 && (
            <span className="saved-count-badge">{savedCount}</span>
          )}
        </button>

        <button
          type="button"
          className="header-btn logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </header>
  )
}

export default Header
