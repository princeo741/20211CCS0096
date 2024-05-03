const express = require('express');
const app = express();
const port = 9876;

app.get('/numbers/:numberid', (req, res) => {
  const numberId = req.params.numberid;

  let numbers = [];
  const windowSize = 10;
  
  const fetchNumbers = async (numberId) => {
    const testServerUrl = 'http://20.244.56.144/test';
  
    try {
      const response = await fetch(`${testServerUrl}/${numberId}`);
      const data = await response.json();
      return data.numbers;
    } catch (error) {
      console.error(`Error fetching numbers for ${numberId}:`, error);
      return [];
    }
  };
  
  const isNumberUnique = (number, numbers) => {
    return !numbers.includes(number);
  };
  
  const addNumber = (number) => {
    if (numbers.length < windowSize) {
      numbers.push(number);
    } else {
      numbers.shift();
      numbers.push(number);
    }
  };
  
  const calculateAverage = () => {
    const sum = numbers.reduce((acc, number) => acc + number, 0);
    return sum / numbers.length;
  };
  
  switch (numberId) {
    case 'p':
    case 'f':
    case 'e':
    case 'r':
      (async () => {
        const newNumbers = await fetchNumbers(numberId);
  
        for (const number of newNumbers) {
          if (isNumberUnique(number, numbers)) {
            addNumber(number);
          }
        }
  
        const avg = calculateAverage();
  
        res.json({
          windowPrevState: numbers.slice(0, -1),
          windowCurrState: numbers,
          numbers: newNumbers,
          avg: parseFloat(avg.toFixed(2)),
        });
      })();
      break;
  
    default:
      res.status(400).json({ error: 'Invalid number ID' });
  }
  res.json({
    windowPrevState: [],
    windowCurrState: [],
    numbers: [],
    avg: 0,
  });
});

app.listen(port, () => {
  console.log(`Average Calculator microservice listening at http://localhost:${port}`);
});