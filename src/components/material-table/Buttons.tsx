import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  [x: string]: any;
}

const AddButtonElement = styled.button`
  border: none;
  border-radius: 20px;
  background-color: #0075dc;
  color: #ddddde;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    background-color: #0159a7;
  }
  height: 30px;
`;

export const AddButton: React.FC<ButtonProps> = ({ ...props }) => {
  return <AddButtonElement {...props}>Add</AddButtonElement>
};

const DeleteButtonElement = styled.button`
  border: none;
  border-radius: 20px;
  background-color: #ff424a;
  color: #ddddde;
  cursor: pointer;
  font-weight: 600;
  margin-left: 40px;
  &:hover {
    background-color: #ad2c31;
  }
  height: 30px;
  &:disabled {
    background-color: #797a82;
    cursor: not-allowed;
  }
`;

export const DeleteButton: React.FC<ButtonProps> = ({ ...props }) => {
  return <DeleteButtonElement {...props}>Delete</DeleteButtonElement>
};
