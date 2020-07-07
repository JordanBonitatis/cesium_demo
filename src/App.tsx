import React, { useState } from 'react';

import MaterialTable from './components/material-table';

import { colors } from './components/colors';
import CurrencyField from './components/currency-field';
import DateField from './components/date-field';
import PageHeading from './components/page-heading';
import NumberField from './components/number-field';
import TextField from './components/text-field';

import './App.css';

const mockMaterials = [
  {
    id: 1,
    name: "Sand",
    volume: 220,
    deliverDate: new Date(),
    color: "teal",
    cost: 10000,
  },
  {
    id: 2,
    name: "Crushed Stone",
    volume: 450,
    deliverDate: new Date(),
    color: "purple",
    cost: 5000,
  }
]

function App() {
  const [material, setMaterial] = useState(mockMaterials[0]);
  const ColorElement = colors[material.color];
  return (
    <div>
      <MaterialTable materials={mockMaterials} onSelect={m => setMaterial(m)} selectedId={material.id} />

      <PageHeading>Materials</PageHeading>      
      <CurrencyField label={<span>Cost&nbsp;(USD per m<sup>3</sup>)</span>} value={material.cost} />
      <ColorElement label="Color" />
      <TextField label="Name" value={material.name} />
      <NumberField label={<span>Volume&nbsp;(m<sup>3</sup>)</span>} value={material.volume} />
      <DateField label="Delivery Date" value={material.deliverDate} />
    </div>
  );
}

export default App;
