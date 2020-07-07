import React from 'react';
import styled from 'styled-components';

interface Material {
  id: number;
  name: string;
  volume: number;
  deliverDate: Date;
  color: string;
  cost: number;
}

export interface MaterialTableProps {
  materials: Material[];
}

interface MaterialCellProps {
  material: Material;
  isSelected: boolean;
}

const TableWrapper = styled.div`
  background: #0f0f13;  
  border: 1px solid #606071;
  margin: 30px 0 0 0;
  height: 400px;
  width: 200px;
`;

const TableElement = styled.table`
  background: #0f0f13;  
  width: 200px;
`;

const TableRowElement = styled.tr`
  line-height: 20px;
  &:hover {
    > td {
      background-color: #010042;
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
  position: absolute:
  top: 0;
`;


const TableRow: React.FC<MaterialCellProps> = ({ material, isSelected }: MaterialCellProps) => {
  return (
    <TableRowElement>
      <TableCellElement isSelected={isSelected}>
        <div>          
          <MaterialTitle>{material.name}</MaterialTitle>
        </div>
      </TableCellElement>
    </TableRowElement>
  )
}

const MaterialTable: React.FC<MaterialTableProps> = React.forwardRef(
  ({ materials }: MaterialTableProps, ref?: React.Ref<HTMLInputElement>) => {    
    console.log(materials);
    return (
      <TableWrapper>
        <TableElement>
          <tbody>
            {materials.map(m => <TableRow key={m.id} material={m} isSelected={false} />)}
          </tbody>
        </TableElement>
      </TableWrapper>
    );
  }
);

export default MaterialTable;
