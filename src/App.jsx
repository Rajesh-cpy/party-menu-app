import './App.css'

import { Routes, Route } from 'react-router-dom'
import SignIn from './pages/SignIn/SignIn'
import Menu from './pages/Menu/Menu'
import FoodDetail from './pages/FoodDetail/FoodDetail'
import SavedRecipes from './pages/SavedRecipes/SavedRecipes'
import NotFound from './pages/NotFound/NotFound'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

const App = () => {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Menu />} />
      </Route>
      <Route path="/menu/:id" element={<FoodDetail />} />
      <Route path="/saved-recipes" element={<SavedRecipes />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
