# 🎵 Spotify Clone – Backend

A backend application for a Spotify-inspired music streaming platform, built using **Node.js, Express.js, and MongoDB**. It provides user authentication, role-based access control, music uploads, and album management.

The project focuses on building RESTful APIs and understanding backend concepts such as authentication, middleware, database relationships, file uploads, and cloud storage integration.

## 🚀 Features

- **User Authentication:** User registration and login using JWT.
- **Password Security:** Password hashing using bcrypt.
- **Cookie-Based Authentication:** Stores authentication tokens in HTTP cookies.
- **Role-Based Access Control:** Supports two roles – User and Artist.
- **Music Upload:** Handles music file uploads using Multer and ImageKit.
- **Album Management:** Creates albums and associates music with artists.
- **MongoDB Integration:** Stores user, music, and album information using Mongoose.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | JavaScript|
| Express.js | Backend framework |
| MongoDB | NoSQL database |
| Mongoose | Database modeling |
| JWT | Authentication |
| bcryptjs | Password hashing |
| Cookie Parser | Cookie handling |
| Multer | File upload handling |
| ImageKit | Cloud file storage |
| dotenv | Environment configuration |


## 🔐 Authentication API

Base URL: `/api/auth`

| Method | Endpoint | Description |
|---|---|---|
| POST | `/register` | Register a new user |
| POST | `/login` | Authenticate an existing user |
| POST | `/logout` | Log out the user |

## 🎧 Music API

Base URL: `/api/music`

| Method | Endpoint | Description |
|---|---|---|
| POST | `/upload` | Upload a music file |
| POST | `/create` | Create an album |
| POST | `/get` | Retrieve music |
| GET | `/getalbum` | Retrieve albums |

*Note: These represent the intended API routes in the current codebase. Some music routes and controller integrations still need completion before all endpoints are operational.*

## 🗄️ Database Models

The application uses three primary MongoDB models:

- **User:** Stores username, email, hashed password, and role.
- **Music:** Stores music title, cloud storage URI, and artist reference.
- **Album:** Stores album title, associated music references, and artist reference.

## 🔄 Backend Workflow

1. A user registers or logs in.
2. The password is verified or hashed using bcrypt.
3. JWT generates an authentication token.
4. The token is stored in an HTTP cookie.
5. Protected operations verify the token and user role.
6. Artists can upload music files through Multer.
7. ImageKit handles cloud file storage.
8. MongoDB stores the associated music and album metadata.

## 🎯 Learning Objectives

This project helped explore and implement important backend development concepts:

- REST API development using Express.js.
- Authentication and authorization using JWT.
- Password hashing and verification.
- Express middleware and route handling.
- MongoDB schema design and relationships.
- File uploads using Multer.
- Cloud storage integration using ImageKit.
- Separation of routes, controllers, models, and services.


⭐ If you find this project interesting, consider giving it a star!
