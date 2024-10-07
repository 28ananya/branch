import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const MessageForm = () => {
  const [customerName, setCustomerName] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(''); // To display success or error message

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');

    try {
      // Use environment variable for the backend URL
      const apiUrl = process.env.REACT_APP_API_URL;
      
      const res = await fetch(`${apiUrl}/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ customer_name: customerName, message }),
      });

      if (res.ok) {
        setStatus('Message sent successfully!');
        setCustomerName('');
        setMessage('');
      } else {
        setStatus('Error: Message not sent.');
      }
    } catch (error) {
      setStatus('Error: Unable to connect to the server.');
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: '500px',
        margin: 'auto',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        backgroundColor: '#f9f9f9',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography variant="h4" textAlign="center" gutterBottom>
        Send a Message
      </Typography>
      
      <TextField
        label="Your Name"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
        required
        fullWidth
        variant="outlined"
        margin="normal"
        autoFocus
      />

      <TextField
        label="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        fullWidth
        multiline
        rows={4}
        variant="outlined"
        margin="normal"
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{ padding: '0.75rem', fontSize: '1rem' }}
      >
        Send Message
      </Button>

      {/* Display status message */}
      {status && <Typography color={status.includes('Error') ? 'error' : 'success'}>{status}</Typography>}
    </Box>
  );
};

export default MessageForm;
