import React, { useState } from 'react';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [addHistory, setAddHistory] = useState([]);
  const [subHistory, setSubHistory] = useState([]);

  const handleAdd = () => {
    const res = parseFloat(num1) + parseFloat(num2);
    setResult(res);
    setAddHistory(prev => [...prev, `${num1} + ${num2} = ${res}`]);
  };

  const handleSubtract = () => {
    const res = parseFloat(num1) - parseFloat(num2);
    setResult(res);
    setSubHistory(prev => [...prev, `${num1} - ${num2} = ${res}`]);
  };

  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <h1>React Calculator</h1>

      <input
        type="number"
        placeholder="First Number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <br /><br />

      <input
        type="number"
        placeholder="Second Number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <br /><br />

      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSubtract} style={{ marginLeft: '10px' }}>Subtract</button>

      <br /><br />
      {result !== null && <h2>Result: {result}</h2>}

      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '40px' }}>
        <div>
          <h3>Addition History</h3>
          <ul>
            {addHistory.map((entry, index) => (
              <li key={index}>{entry}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Subtraction History</h3>
          <ul>
            {subHistory.map((entry, index) => (
              <li key={index}>{entry}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
import React, { useState } from 'react';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [addHistory, setAddHistory] = useState([]);
  const [subHistory, setSubHistory] = useState([]);

  const handleAdd = () => {
    const res = parseFloat(num1) + parseFloat(num2);
    setResult(res);
    setAddHistory(prev => [...prev, `${num1} + ${num2} = ${res}`]);
  };

  const handleSubtract = () => {
    const res = parseFloat(num1) - parseFloat(num2);
    setResult(res);
    setSubHistory(prev => [...prev, `${num1} - ${num2} = ${res}`]);
  };

  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <h1>React Calculator</h1>

      <input
        type="number"
        placeholder="First Number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <br /><br />

      <input
        type="number"
        placeholder="Second Number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <br /><br />

      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSubtract} style={{ marginLeft: '10px' }}>Subtract</button>

      <br /><br />
      {result !== null && <h2>Result: {result}</h2>}

      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '40px' }}>
        <div>
          <h3>Addition History</h3>
          <ul>
            {addHistory.map((entry, index) => (
              <li key={index}>{entry}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Subtraction History</h3>
          <ul>
            {subHistory.map((entry, index) => (
              <li key={index}>{entry}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;

