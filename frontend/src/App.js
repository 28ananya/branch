import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MessageForm from './components/MessageForm';
import AgentDashboard from './components/AgentDashboard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>CS Messaging Web App</h1>

          {/* Navigation Links */}
          <nav>
            <Link to="/">Customer Form</Link> | <Link to="/dashboard">Agent Dashboard</Link>
          </nav>
        </header>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<MessageForm />} />
          <Route path="/dashboard" element={<AgentDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
