# 🎉 Party Menu Application

A modern and responsive food discovery web application built with **React 19**, **Vite**, **React Router DOM 7**, and **Plain CSS**. Users can securely sign in, browse a curated party menu, filter dishes, view detailed recipes, and save their favorite dishes with persistent local storage.

---

## 🚀 Live Demo

**Live URL:** https://your-vercel-or-netlify-url.com

---

## 📷 Features

### 🔐 Authentication
- Secure sign-in using a live authentication API
- Loading state while signing in
- Error handling for invalid credentials
- Stores authentication token and user information in Local Storage
- Protected Menu route

### 🍽️ Menu
- Responsive food card grid
- Search dishes by name
- Filter by category
- Filter by Veg / Non-Veg
- Dynamic items found count
- Empty state when no dishes match filters

### 📖 Food Details
- Large hero image
- Category badge
- Veg / Non-Veg badge
- Full recipe description
- Ingredients list
- Servings information
- Save / Unsave recipe toggle

### ❤️ Saved Recipes
- Save favorite recipes
- Persistent Local Storage
- Remove saved recipes
- Dynamic saved recipe count badge
- Empty state when no recipes are saved

### 🚪 Logout
- Clears authentication session
- Redirects to Sign In page

### ❌ 404 Page
- Custom Not Found page
- Navigation back to the application

---

## 🛠️ Tech Stack

- React 19
- Vite
- React Router DOM 7
- JavaScript (ES6+)
- Plain CSS
- Local Storage
- REST API (Authentication)

---

## 📂 Folder Structure

```
src
│
├── components
│   ├── FilterBar
│   ├── FoodCard
│   ├── Header
│   └── ProtectedRoute
│
├── pages
│   ├── SignIn
│   ├── Menu
│   ├── FoodDetail
│   ├── SavedRecipes
│   └── NotFound
│
├── data
│   └── menuData.js
│
├── services
│   └── menuService.js
│
├── utils
│   └── recipeStorage.js
│
├── App.jsx
└── main.jsx
```

---

## 🔑 Test Credentials

| Email | Password |
|--------|----------|
| admin@example.com | admin123 |

---

## 🔐 Authentication API

```
POST https://serverless-api-teal.vercel.app/api/auth/signin
```

---

## 💾 Local Storage

The application stores:

| Key | Description |
|-----|-------------|
| party_menu_token | Authentication Token |
| party_menu_user | Logged-in User Information |
| party_menu_saved_recipes | Saved Recipes |

---

## ▶️ Installation

Clone the repository

```bash
git clone https://github.com/your-username/party-menu-app.git
```

Go into the project

```bash
cd party-menu-app
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

Build for production

```bash
npm run build
```

Preview production build

```bash
npm run preview
```

---

## ✨ Key Functionalities

- User Authentication
- Protected Routes
- Dynamic Menu Filtering
- Search Functionality
- Responsive Layout
- Recipe Detail View
- Save & Remove Recipes
- Local Storage Persistence
- Custom 404 Page

---

## 📸 Screens

- Sign In
- Menu
- Food Detail
- Saved Recipes
- Not Found

---

## 👨‍💻 Author

Developed using React, Vite, and modern JavaScript.
