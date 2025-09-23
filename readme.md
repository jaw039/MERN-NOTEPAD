# MERN Notepad App

## Project Overview
A full-stack note-taking application built with MongoDB, Express, React, and Node.js.

## REST API
The REST API provides the following operations for managing data:

- **GET**: Retrieve data from the server (e.g., fetch all notes or a specific note).
- **POST**: Create new data on the server (e.g., add a new note).
- **PUT**: Update existing data on the server (e.g., modify an existing note).
- **DELETE**: Remove data from the server (e.g., delete a note).

> **Status Codes**:
> - `200 OK`: The request was successful.
> - `201 Created`: A new resource was successfully created.
> - `400 Bad Request`: The request was invalid or missing required fields.
> - `404 Not Found`: The requested resource could not be found.
> - `500 Internal Server Error`: An error occurred on the server.
> - `503 Service Unavailable`: The server is temporarily unable to handle the request (e.g., maintenance or overload).

## Architecture
- **Frontend (Client)**: React application for user interface
- **Backend (Server)**: Express.js API server
- **Database**: MongoDB for data persistence

## How It Works
**Example: Deleting a Note**
1. **Client**: User clicks delete → HTTP request sent to server with note ID
2. **Server**: Validates request → processes delete operation
3. **Database**: Receives delete command → confirms operation success
4. **Response**: Server returns success → client updates UI

## Dependencies & Key Imports

### Backend Dependencies
- **Express.js** (`express`) - Fast, unopinionated web framework for Node.js. Handles routing, middleware, and HTTP server functionality
- **Mongoose** (`mongoose`) - MongoDB object modeling library for Node.js. Provides schema validation, query building, and database connection management
- **Dotenv** (`dotenv`) - Loads environment variables from `.env` file into `process.env` for secure configuration management
- **@upstash/ratelimit** - Redis-based rate limiting service to prevent API abuse and implement request throttling
- **@upstash/redis** - Serverless Redis client for cloud-based Redis operations and caching

### Frontend Dependencies  
- **React** (`react`) - JavaScript library for building user interfaces with component-based architecture
- **React Router** (`react-router`) - Declarative routing library for React applications. Enables navigation between different pages/components
- **React DOM** (`react-dom/client`) - Provides DOM-specific methods for React, including rendering components to the browser
- **React Hot Toast** (`react-hot-toast`) - Lightweight notification library for React. Displays success, error, and info messages to users
- **Vite** (`vite`) - Fast build tool and development server for modern web applications
- **@vitejs/plugin-react** - Official Vite plugin for React support with fast refresh

### Development Tools
- **ESLint** (`@eslint/js`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`) - Code linting and quality enforcement for JavaScript and React
- **Globals** (`globals`) - Global variables definition for different JavaScript environments

### Custom Modules
- **Database Config** (`./config/db.js`) - MongoDB connection setup and configuration
- **Rate Limiter Middleware** (`./middleware/rateLimiter.js`) - Custom middleware for API rate limiting
- **Notes Controller** (`./controllers/notesController.js`) - Business logic for CRUD operations on notes
- **Notes Routes** (`./routes/notesRoutes.js`) - API endpoint definitions for notes management
- **Note Model** (`./models/Note.js`) - Mongoose schema definition for note documents

## Tech Stack 
- **Frontend**: React, HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB

## Quick Start
```bash
# Backend
cd backend
npm install
npm run dev

# Frontend (coming soon)
cd frontend
npm install
npm start
```

