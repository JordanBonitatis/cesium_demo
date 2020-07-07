/**
 * Stylized table to display all of the materials a user has in the array provided
 * by the API. I implemented this with only one or two records. We 
 */
import React from 'react';
import styled from 'styled-components';

import { Material } from './MaterialInterface';

import {AddButton, DeleteButton} from './Buttons';
import TableRow from './MaterialRow';

export interface MaterialTableProps {
  materials: Material[];
  onAdd: () => void;
  onDelete: (materialId: string) => void;
  onSelect: (material: Material) => void;
  selectedId: string | undefined;
}

interface MaterialCellProps {
  isSelected: boolean;
  material: Material;
  onSelect: (material: Material) => void;  
}

const TableWrapper = styled.div`
  background: #0f0f13;  
  border: 1px solid #606071;
  margin: 20px 0 0 0;
  overflow: hidden;
  overflow-y: auto;
  height: 400px;
  width: 200px;
`;

const TableElement = styled.table`
  background: #0f0f13;  
  width: 200px;
`;

const MaterialTable: React.FC<MaterialTableProps> = React.forwardRef(
  ({ materials, onAdd, onDelete, onSelect, selectedId }: MaterialTableProps, ref?: React.Ref<HTMLInputElement>) => {
    
    const handleDelete = () => {
      if (selectedId) {
        onDelete(selectedId);
      }
    };

    return (
      <div>
        <div>
          <AddButton onClick={onAdd} />
          <DeleteButton disabled={selectedId === undefined} onClick={handleDelete} />
        </div>
        <TableWrapper>
          <TableElement>
            <tbody style={{width: "200px"}}>
              {materials.map(m => {
                return (
                  <TableRow                    
                    key={m.id}
                    onSelect={onSelect}
                    material={m}
                    isSelected={selectedId === m.id}
                  />
                );
              })}
            </tbody>
          </TableElement>
        </TableWrapper>
      </div>
    );
  }
);

export default MaterialTable;
