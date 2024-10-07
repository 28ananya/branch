## CS Messaging Web App
This project is a full-stack messaging web application built with React (frontend) and Flask (backend). It allows customers to send messages through a form, and agents to view and respond to those messages via a dashboard.

## Table of Contents
Project Overview
Features
Technologies Used
Setup Instructions
Backend Setup
Frontend Setup
How to Run

## Project Overview
The CS Messaging Web App enables efficient customer-agent interaction. Customers can submit inquiries via a simple form, and agents can view and respond to those inquiries via a dashboard. The app provides an intuitive and streamlined interface for both customers and agents.

## Features
Customers can send messages through a form.
Agents can view and respond to customer messages via a dashboard.
Separate pages for customers (message submission) and agents (message response).
Backend API to handle message submission and response.
Frontend built using React and backend using Flask.
Real-time message updates for agents (if implemented).
## Technologies Used
Frontend: React, Material-UI
Backend: Flask, SQLite, Flask-CORS, Flask-SQLAlchemy
Database: SQLite (for local development)
Other Libraries: cors (for API calls), Gunicorn (for production deployment)
# Setup Instructions
## Backend Setup
Navigate to the backend directory:

cd backend
Install the required dependencies:

pip install -r requirements.txt
Run the Flask application:

python app.py
The backend will start running on http://localhost:5000.

## Frontend Setup
The frontend is built with React and uses Material-UI for styling.

Prerequisites
Make sure you have Node.js and npm installed on your machine. You can download them from Node.js official website.
Installation
Navigate to the frontend directory:

cd frontend
Install the necessary dependencies:


npm install
Start the React development server:

npm start
The frontend will be accessible at http://localhost:3000.

How to Run
Start the Backend: Navigate to the backend directory and run the backend using:


python app.py
Start the Frontend: Navigate to the frontend directory and run the React app using:


npm start
Access the Application:

Customer Form: Open http://localhost:3000 in your browser to access the customer form.
Agent Dashboard: Navigate to http://localhost:3000/dashboard to access the agent dashboard.