const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

const mockMaterials = [
  {
    id: "abba",
    name: "Sand",
    volume: 220,
    deliverDate: "2020-09-14",
    color: "teal",
    cost: 10000,
  },
  {
    id: "dabba",
    name: "Crushed Stone",
    volume: 450,
    deliverDate: "2020-07-07",
    color: "purple",
    cost: 5000,
  }
];

app.use(cors());
app.get('/', (req, res) => res.send('Ermahgerd!'));
app.get('/user/:userId/materials/:listId', (req, res) => {
  console.log('Returning mock materials array');
  res.json(mockMaterials);
});

app.listen(port, () => console.log(`Mock REST API listening at http://localhost:${port}`));
