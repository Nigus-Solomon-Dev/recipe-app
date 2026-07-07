# 🍳 RecipeVault

A full-stack recipe management application that helps users store, organize, and manage their personal recipes in one place. Built with the MERN stack (MongoDB, Express.js, React/Next.js, Node.js) with JWT authentication.

## Problem It Solves

**The Problem:** People struggle to keep track of their favorite recipes across multiple platforms, handwritten notes, and saved links. Recipes get lost, ingredients are forgotten, and cooking times are hard to track.

**The Solution:** RecipeVault provides a centralized, searchable, and secure platform where users can save, edit, and organize their recipes with ease.

## Live Demo

[View Live Demo](https://recipe-app.vercel.app)

## Features

- **User Authentication** – Register and login with JWT authentication
- **Recipe Management** – Create, read, update, and delete recipes
- **Search & Filter** – Search by title and filter by category
- **Organized Storage** – Categories include Breakfast, Lunch, Dinner, Dessert, Snack, Drink
- **Recipe Details** – Track cooking time, servings, ingredients, and instructions
- **Responsive Design** – Works on desktop, tablet, and mobile
- **Secure** – Passwords hashed with bcrypt, routes protected with JWT

## Tech Stack

### Frontend
- **Next.js 15** – React framework with App Router
- **Tailwind CSS** – Utility-first CSS framework
- **Axios** – HTTP client for API calls
- **Lucide React** – Icon library

### Backend
- **Express.js** – Node.js web framework
- **MongoDB** – NoSQL database
- **Mongoose** – ODM for MongoDB
- **JWT** – JSON Web Token authentication
- **bcryptjs** – Password hashing

## Skills Demonstrated

- Full-stack JavaScript development
- RESTful API design and implementation
- JWT authentication and authorization
- Database modeling and management
- React hooks and state management
- Next.js App Router and server/client components
- Responsive UI/UX design
- Environment variable management
- Git version control

## Quick Start

### Prerequisites
- Node.js 18+
- MongoDB installed locally or MongoDB Atlas account

### Installation

```bash
# Clone the repository
git clone https://github.com/Nigus-Solomon-Dev/recipe-app.git
cd recipe-app

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### Environment Variables

Create `backend/.env`:

```env
MONGODB_URI=mongodb://127.0.0.1:27017/recipedb
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

### Run the Application

```bash
# Terminal 1: Backend
cd backend
npm run dev

# Terminal 2: Frontend
cd frontend
npm run dev
```

Open `http://localhost:3000`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login and receive JWT token |
| GET | `/api/recipes` | Get all user recipes |
| POST | `/api/recipes` | Create a new recipe |
| GET | `/api/recipes/:id` | Get a single recipe |
| PUT | `/api/recipes/:id` | Update a recipe |
| DELETE | `/api/recipes/:id` | Delete a recipe |

## Folder Structure

```
recipe-app/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   └── .env
└── frontend/
    ├── app/
    │   ├── login/
    │   ├── register/
    │   ├── dashboard/
    │   ├── add-recipe/
    │   └── edit-recipe/[id]/
    ├── components/
    ├── utils/
    └── package.json
```

## Deployment

- **Frontend:** Deployed on Vercel
- **Backend:** Deployed on Render

## Future Improvements

- Add image upload for recipes
- Add recipe sharing with others
- Add recipe ratings and reviews
- Add meal planning calendar
- Add grocery list generator

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Contact

**Nigus Solomon**

- GitHub: [Nigus-Solomon-Dev](https://github.com/Nigus-Solomon-Dev)

---

Built with ❤️ as part of the MERN stack learning journey.