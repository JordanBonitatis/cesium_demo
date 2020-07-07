import React from 'react';

import CurrencyField from './components/currency-field';
import DateField from './components/date-field';
import PageHeading from './components/page-heading';
import NumberField from './components/number-field';
import TextField from './components/text-field';

import './App.css';


function App() {
  return (
    <div>
      <PageHeading>Materials</PageHeading>      
      <CurrencyField label={<span>Cost&nbsp;(USD per m<sup>3</sup>)</span>} />
      <TextField label="Name" />
      <NumberField label={<span>Volume&nbsp;(m<sup>3</sup>)</span>} />
      <DateField label="Delivery Date" />
    </div>
  );
}

export default App;
