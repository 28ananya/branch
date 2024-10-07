import React, { useEffect, useState } from 'react';
import { Box, Button, Typography, TextField, Paper } from '@mui/material';

const AgentDashboard = () => {
  const [messages, setMessages] = useState([]);
  const [response, setResponse] = useState('');
  const [selectedMessage, setSelectedMessage] = useState(null);

  useEffect(() => {
    // Fetch messages from the backend
    fetch('http://localhost:5000/api/messages')
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }, []);

  const handleRespond = async (id) => {
    const res = await fetch(`http://localhost:5000/api/messages/${id}/respond`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ response }),
    });
    if (res.ok) {
      setMessages(messages.map((msg) => 
        msg.id === id ? { ...msg, status: 'responded', response } : msg
      ));
      setResponse('');
      setSelectedMessage(null);
    }
  };

  return (
    <Box sx={{ maxWidth: '800px', margin: 'auto', padding: '2rem' }}>
      <Typography variant="h4" gutterBottom>Agent Dashboard</Typography>

      {messages.map((msg) => (
        <Paper key={msg.id} sx={{ padding: '1rem', marginBottom: '1rem' }}>
          <Typography variant="h6">{msg.customer_name}</Typography>
          <Typography variant="body1">{msg.message}</Typography>
          <Typography variant="subtitle2">Status: {msg.status}</Typography>

          {msg.status === 'pending' && (
            <div>
              {selectedMessage === msg.id ? (
                <div>
                  <TextField
                    label="Response"
                    fullWidth
                    multiline
                    rows={2}
                    value={response}
                    onChange={(e) => setResponse(e.target.value)}
                    sx={{ marginBottom: '1rem' }}
                  />
                  <Button
                    variant="contained"
                    onClick={() => handleRespond(msg.id)}
                  >
                    Send Response
                  </Button>
                </div>
              ) : (
                <Button
                  variant="outlined"
                  onClick={() => setSelectedMessage(msg.id)}
                  sx={{ marginTop: '1rem' }}
                >
                  Respond to Message
                </Button>
              )}
            </div>
          )}
        </Paper>
      ))}
    </Box>
  );
};

export default AgentDashboard;
