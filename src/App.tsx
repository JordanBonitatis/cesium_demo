import React from 'react';

import MaterialTable from './components/material-table';

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
    color: "some-color",
    cost: 10000,
  }
]

function App() {
  return (
    <div>
      <MaterialTable materials={mockMaterials} />

      <PageHeading>Materials</PageHeading>      
      <CurrencyField label={<span>Cost&nbsp;(USD per m<sup>3</sup>)</span>} />
      <TextField label="Name" />
      <NumberField label={<span>Volume&nbsp;(m<sup>3</sup>)</span>} />
      <DateField label="Delivery Date" />
    </div>
  );
}

export default App;
