// server.js
const express = require('express');
const app = express();

// Example Ultraviolet integration (replace with actual middleware if needed)
// const uv = require('ultraviolet-node');
// app.use('/uv/service/', uv.middleware());

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Render requires you to listen on process.env.PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
