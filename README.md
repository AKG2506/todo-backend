# 📝 Todo API with JWT Auth (Node.js + MongoDB)

A production-ready REST API built with Node.js, Express, MongoDB, and JWT authentication. Includes user signup/login, protected routes, and full CRUD functionality for todos.

## 🚀 Live Demo

🌐 [Deployed on Render](https://todo-backend-y8wm.onrender.com/)


## 🛠 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Atlas) + Mongoose
- **Auth**: JWT + Bcrypt
- **Validation**: Zod
- **Hosting**: Render

---

## 🔐 Features

- ✅ Signup/Login with email & password
- ✅ JWT-based authentication
- ✅ Protected routes via middleware
- ✅ CRUD operations for Todos
- ✅ MongoDB Atlas integration
- ✅ Modular codebase (routes, controllers, models)

---

## 📬 API Endpoints

### 🔐 Auth

| Method | Route           | Description        |
|--------|------------------|--------------------|
| POST   | `/auth/signup`   | Create user        |
| POST   | `/auth/signin`   | Login + get token  |

### 📝 Todos *(Requires JWT Token)*

| Method | Route             | Description         |
|--------|------------------|---------------------|
| GET    | `/todos/`         | Get all todos       |
| POST   | `/todos/`         | Create new todo     |
| PUT    | `/todos/:id`      | Toggle completion   |
| DELETE | `/todos/:id`      | Delete a todo       |

> 📌 Pass your JWT token in `Authorization: Bearer <token>` header.

---

## 🔧 Environment Variables

```env
PORT=3000
MONGO_URI=your_mongo_uri_here
JWT_SECRET=your_jwt_secret
