const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.get('/api/hello', (req, res) => {
  res.json({ "message": "hello world" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app; 