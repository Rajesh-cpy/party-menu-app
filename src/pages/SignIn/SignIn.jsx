import './SignIn.css'
import restaurant from '../../assets/restaurant.png'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const loginApi = 'https://serverless-api-teal.vercel.app/api/auth/signin'
const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('party_menu_token')

    if (token) {
      navigate('/')
    }
  }, [navigate])

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (email.trim() === '' || password.trim() === '') {
      setError('Email and Password are required')
      return
    }
    setLoading(true)
    setError('')
    const userDetails = {
      email,
      password,
    }
    try {
      const response = await fetch(loginApi, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userDetails),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        localStorage.setItem('party_menu_token', data.data.token)
        localStorage.setItem('party_menu_user', JSON.stringify(data.data.user))
        navigate('/')
      } else {
        setError('Email and password are required.')
      }
    } catch (err) {
      setError('Unable to connect to the server. Please try again.')
    } finally {
      setLoading(false)
    }

    setEmail('')
    setPassword('')
  }

  return (
    <main className="signin-page">
      <section className="signin-card">
        <img src={restaurant} alt="Party Menu Logo" className="signin-logo" />

        <h1 className="signin-title">Party Menu</h1>

        <p className="signin-subtitle">Sign in to explore our delicious menu</p>
        {error && <p className="error-message">{error}</p>}
        <form className="signin-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="form-input"
              value={email}
              required
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="form-input"
              value={password}
              required
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button type="submit" className="signin-btn" disabled={loading}>
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>
      </section>
    </main>
  )
}

export default SignIn
