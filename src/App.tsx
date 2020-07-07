import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuid } from 'uuid';

import MaterialTable from './components/material-table';

import { colors } from './components/colors';
import CurrencyField from './components/currency-field';
import DateField from './components/date-field';
import PageHeading from './components/page-heading';
import NumberField from './components/number-field';
import TextField from './components/text-field';

import './App.css';

const dummyMaterial = {
  id: undefined,
  name: "",
  volume: 0,
  deliverDate: "",
  color: "grey",
  cost: 0,
};

const availableColors = [];
for (const color of Object.keys(colors)) {
  if (color !== "grey") {
    availableColors.push(color);
  }
}

const newMaterial = {
  name: "New Material",
  volume: 0,
  deliverDate: "",
  color: availableColors[Math.floor(Math.random() * availableColors.length)],
  cost: 0,
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [materials, setMaterials] = useState();
  const [material, setMaterial] = useState();
  useEffect(() => {
    // mocking a REST endpoint like /user/:userId/materials/:materialId
    axios.get('http://localhost:3001/user/215/materials/310').then(      
      (res) => {
        setMaterial(res.data.length ? res.data[0] : {});
        setMaterials(res.data);
        setIsLoading(false);
      },
      (error) => alert(error)
    )
  }, []);

  const handleAdd = () => {
    const materialsCopy = [...materials];
    const addition = Object.assign({ id: uuid() }, newMaterial);
    materialsCopy.push(addition);
    setMaterials(materialsCopy);
    setMaterial(addition);
  };

  const handleDelete = (materialId: string) => {
    const materialsCopy = [...materials];
    const idx = materials.findIndex((m: any) => m.id === materialId);
    materialsCopy.splice(idx, 1);
    setMaterials(materialsCopy);
    setMaterial(materialsCopy.length ? materialsCopy[0] : dummyMaterial);
  };
  
  if (isLoading) {
    return (
      <span>Loading...</span>
    );
  } else {
    console.log(materials);
    const ColorElement = colors[material.color];
    return (
      <div>
        <MaterialTable
          materials={materials || []}
          onAdd={handleAdd}
          onDelete={handleDelete}
          onSelect={m => setMaterial(m)}
          selectedId={material.id}
        />

        <PageHeading>Materials</PageHeading>      
        <CurrencyField label={<span>Cost&nbsp;(USD per m<sup>3</sup>)</span>} value={material.cost} />
        <ColorElement label="Color" />
        <TextField label="Name" value={material.name} />
        <NumberField label={<span>Volume&nbsp;(m<sup>3</sup>)</span>} value={material.volume} />
        <DateField label="Delivery Date" value={material.deliverDate} />
      </div>
    );
  }
}

export default App;
