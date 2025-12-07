// server.js
const express = require('express');
const app = express();
const path = require('path');

// Serve Ultraviolet static files (adjust if your fork uses a different folder)
app.use(express.static(path.join(__dirname, 'public')));

// If your fork exposes middleware, wire it here
// Example: const uv = require('./uv');
// app.use('/uv/service/', uv.middleware());

app.get('/', (req, res) => {
  res.send('Ultraviolet backend is running!');
});

// Render requires you to listen on process.env.PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Ultraviolet server listening on port ${PORT}`);
});

