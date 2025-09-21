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

