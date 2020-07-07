import React from 'react';
import styled from 'styled-components';

import { colors } from '../colors';

import { Material } from './MaterialInterface';

interface MaterialCellProps {
  isSelected: boolean;
  material: Material;
  onSelect: (material: Material) => void;  
}

const TableRowElement = styled.tr<{ isSelected: boolean }>`
  background-color: ${(props) => (props.isSelected ? '#050382' : '#0f0f13')};
  cursor: pointer;
  line-height: 20px;
  &:hover {
    > td {
      background-color: ${(props) => (props.isSelected ? '#050382' : '#13113c')};
    }
  }
`;

const TableCellElement = styled.td<{ isSelected: boolean }>`
  border-bottom: 1px solid #606071;  
  color: #ffffff;
  position: relative;
  font-size: 14px;
  line-height: 14px;
  height: 40px;
  padding: 0;
  text-align: top;
`;

const MaterialTitle = styled.div`
  font-family: Arial;
  font-size: 14px;
  font-weight: 600;
  margin-left: 45px;
`;


const MaterialVolume = styled.div`
  font-family: Arial;
  font-size: 11px;
  margin-left: 45px;
`;

const ColorWrapper = styled.div`
  display: block;
  margin: 5px;
`;

const TableRow: React.FC<MaterialCellProps> = ({ isSelected, material, onSelect }: MaterialCellProps) => {
  const Color = colors[material.color];
  return (
    <TableRowElement isSelected={isSelected}>
      <TableCellElement onClick={() => onSelect(material)} isSelected={isSelected}>
        <div>
          <ColorWrapper>
            <Color style={{height: "30px", width: "30px"}} />
          </ColorWrapper>
          <MaterialTitle>{material.name}</MaterialTitle>
          <MaterialVolume>{material.volume}&nbsp;m<sup>3</sup></MaterialVolume>
        </div>
      </TableCellElement>
    </TableRowElement>
  )
}

export default TableRow;
