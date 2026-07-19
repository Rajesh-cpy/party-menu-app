const STORAGE_KEY = 'party_menu_saved_recipes'

export const getSavedRecipes = () =>
  JSON.parse(localStorage.getItem(STORAGE_KEY)) || []

export const saveRecipe = (recipe) => {
  const recipes = getSavedRecipes()

  if (!recipes.some((item) => item.id === recipe.id)) {
    recipes.push(recipe)

    localStorage.setItem(STORAGE_KEY, JSON.stringify(recipes))
    window.dispatchEvent(new Event('savedRecipesUpdated'))
  }
}

export const removeRecipe = (id) => {
  const updated = getSavedRecipes().filter((item) => item.id !== id)

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
  window.dispatchEvent(new Event('savedRecipesUpdated'))
}

export const isRecipeSaved = (id) =>
  getSavedRecipes().some((item) => item.id === id)
