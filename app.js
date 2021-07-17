const express = require('express');

const app = express();
app.use(express.json({extended: false}))

let people = [];

app.get('/people', (req, res) => {
  res.json(people);
});

app.post('/people', (req, res) => {
  people.push({
      name: req.body.name,
      age: req.body.age,
  })
  console.log('Added Person')
  res.json(people);
});

app.get('/', (req, res) => {
  res.send('Home');
});

app.listen(3000, () => {
  console.log('Server started!');
});