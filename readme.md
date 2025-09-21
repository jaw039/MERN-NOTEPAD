# MERN Notepad App

## Project Overview
A full-stack note-taking application built with MongoDB, Express, React, and Node.js.

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

