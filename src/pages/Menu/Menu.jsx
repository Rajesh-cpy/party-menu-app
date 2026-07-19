import { useState } from 'react'
import './Menu.css'

import Header from '../../components/Header/Header'
import FilterBar from '../../components/FilterBar/FilterBar'
import FoodCard from '../../components/FoodCard/FoodCard'

import { filterMenuItems } from '../../services/menuService'

const Menu = () => {
  const [category, setCategory] = useState('All')
  const [diet, setDiet] = useState('All')

  const [searchInput, setSearchInput] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = () => {
    setSearchQuery(searchInput.trim())
  }

  const filteredFoods = filterMenuItems({
    category,
    diet,
    searchQuery,
  })

  return (
    <main className="menu-page">
      <Header />

      <FilterBar
        category={category}
        setCategory={setCategory}
        diet={diet}
        setDiet={setDiet}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        onSearch={handleSearch}
      />

      <p className="items-count">
        {filteredFoods.length} item
        {filteredFoods.length !== 1 ? 's' : ''} found
      </p>

      {filteredFoods.length === 0 ? (
        <div className="no-foods-container">
          <p className="no-foods-text">
            No dishes found. Try different filters.
          </p>
        </div>
      ) : (
        <section className="food-grid">
          {filteredFoods.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </section>
      )}
    </main>
  )
}

export default Menu
