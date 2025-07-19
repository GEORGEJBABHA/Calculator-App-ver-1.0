// server/index.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const history = []; // Store equations

app.post('/add', (req, res) => {
  const { num1, num2 } = req.body;
  const result = num1 + num2;
  const equation = `${num1} + ${num2} = ${result}`;
  history.push(equation);
  res.json({ result });
});

// ✅ New route to fetch history
app.get('/history', (req, res) => {
  res.json({ history });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
