import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import styled from 'styled-components';

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

/**
 * Grey is a reserved color so we use this array when assigning
 * a random color to a newly created material
 */
const availableColors: string[] = [];
for (const color of Object.keys(colors)) {
  if (color !== "grey") {
    availableColors.push(color);
  }
}

const newMaterial = {
  name: "New Material",
  volume: 0,
  deliverDate: "",
  cost: 0,
};

const InputContainer = styled.div`
  background-color: #0f0f12;  
  float: right;
  height: 330px;
  padding: 20px 20px 50px 20px;
  margin: 50px 0 0 10px;
`;

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

  /**
   * Add a new material
   * We use the newMaterial const and add a UUID and a random color here at runtime
   */
  const handleAdd = () => {
    const materialsCopy = [...materials];
    const addition = Object.assign(
      {
        id: uuid(),
        color: availableColors[Math.floor(Math.random() * availableColors.length)]
      },
      newMaterial,
    );
    materialsCopy.push(addition);
    setMaterials(materialsCopy);
    setMaterial(addition);
  };

  /**
   * Delete a material from the array
   * In a real-world scenario, this would probably be an event
   * in which we would want to make a PUT request to save the change
   * on the server
   * NOTE: I made copies of the materials array so we weren't modify 
   * the referenced object in state, which can lead to weird behavior
   * @param {String} materialId: the id of the material to remove
   */
  const handleDelete = (materialId: string) => {
    const materialsCopy = [...materials];
    const idx = materials.findIndex((m: any) => m.id === materialId);
    materialsCopy.splice(idx, 1);
    setMaterials(materialsCopy);
    if (materialsCopy.length) {      
      setMaterial(idx > 0 ? materialsCopy[idx -1] : materialsCopy[0]);
    } else {
      setMaterial(dummyMaterial);
    }
  };

  /**
   * Update an inpute field
   * In a real-world scenario, we'd probably want to make a PUT request
   * to update these changes server-side, too
   * NOTE: like above, changes are made to a copy and then calling setState,
   * to avoid modifying the referenced object in state
   * @param {String} field 
   * @param {String | Number} value 
   */
  const handleChange = (field: string, value: string | number) => {
    const materialCopy = Object.assign({}, material, {[field]: value});
    const materialsCopy = [...materials];
    const idx = materials.findIndex((m: any) => m.id === material.id);
    materialsCopy[idx] = materialCopy;
    setMaterials(materialsCopy);
    setMaterial(materialCopy);
  }
  
  if (isLoading) {
    return (
      <span>Loading...</span>
    );
  } else {
    console.log(materials);
    const ColorElement = colors[material.color];
    return (
      <div>
        <PageHeading>Materials</PageHeading>

        <div>
          <div style={{float: "left"}}>
          <MaterialTable
            materials={materials || []}
            onAdd={handleAdd}
            onDelete={handleDelete}
            onSelect={m => setMaterial(m)}
            selectedId={material.id}
          />
          </div>

          <InputContainer>
            <div style={{float: "left", marginLeft: "10px", width: "40%"}}>
              <TextField
                label="Name"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("name", e.currentTarget.value)}
                value={material.name}
              />
              <NumberField
                label={<span>Volume&nbsp;(m<sup>3</sup>)</span>}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("volume", e.currentTarget.value)}
                value={material.volume}
              />
              <DateField
                label="Delivery Date"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("deliverDate", e.currentTarget.value)}
                value={material.deliverDate}
              />
            </div>
            <div style={{float: "right", width: "40%"}}>
              <ColorElement label="Color" />
              <CurrencyField
                label={<span>Cost&nbsp;(USD per m<sup>3</sup>)</span>}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("cost", e.currentTarget.value)}
                value={material.cost}
              />
            </div>
          </InputContainer>
        </div>
      </div>
    );
  }
}

export default App;
