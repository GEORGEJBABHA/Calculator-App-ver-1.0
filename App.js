import React, { useState, useEffect } from 'react';

function App() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);

  const handleAdd = async () => {
    const res = await fetch('http://localhost:5000/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ num1: Number(input1), num2: Number(input2) }),
    });
    const data = await res.json();
    setResult(data.result);
    fetchHistory(); // refresh history after new calculation
  };

  const fetchHistory = async () => {
    const res = await fetch('http://localhost:5000/history');
    const data = await res.json();
    setHistory(data.history);
  };

  useEffect(() => {
    fetchHistory(); // load history on first render
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>React + Node Calculator</h1>
      <input type="number" value={input1} onChange={e => setInput1(e.target.value)} />
      <input type="number" value={input2} onChange={e => setInput2(e.target.value)} />
      <button onClick={handleAdd}>Add</button>

      {result !== null && <p>Result: {result}</p>}

      <h2>History</h2>
      <ul>
        {history.map((eq, i) => (
          <li key={i}>{eq}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
