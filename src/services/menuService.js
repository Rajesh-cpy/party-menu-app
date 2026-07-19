import menuData from '../data/menuData'

export const filterMenuItems = ({ category, diet, searchQuery }) => {
  return menuData.filter((item) => {
    const categoryMatch =
      category === 'All' ||
      item.category.toLowerCase() === category.toLowerCase()

    const dietMatch =
      diet === 'All' ||
      (diet === 'Veg' && item.isVeg) ||
      (diet === 'Non-Veg' && !item.isVeg)

    const searchMatch = item.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase())

    return categoryMatch && dietMatch && searchMatch
  })
}

export const getMenuItemById = (id) => {
  return menuData.find((item) => item.id === Number(id))
}
