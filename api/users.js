const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/users', (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: 'Name and email are required.' });
  }

  res.status(200).json({
    message: 'User data received successfully!',
    user: { name, email },
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});