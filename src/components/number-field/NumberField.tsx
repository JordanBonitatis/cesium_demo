import React from 'react';
import styled from 'styled-components';

import Label from '../label';

export interface NumberFieldProps {
  label: string | React.ReactElement;
  [x: string]: any;
}

const Container = styled.div`
  display: block;
  float: left;
  font-family: Graphik;
  margin: 30px 0 0 0;
  width: 100%;
`;

const NumberInput = styled.input<NumberFieldProps>`
  background: #515158;
  border: none;
  border-radius: 4px;
  box-sizing: border-box;
  color: #040405;
  display: block;
  font-size: 14px;
  height: 40px;
  padding: 9.5px 12px 9.5px 12px;
  text-align: right;
  width: 100%;
  &:hover {
    border: 1px solid #787879;
    padding: 9.5px 11px 9.5px 11px;
  }
  &:disabled {
    background: #f0f1f5;
    &:hover {
      border: 1px solid #b9bfcb;
    }
  }
  &:focus {
    border: 1px solid #ddddde;
    padding: 9.5px 11px 9.5px 11px;
    outline: none;
  }
`;

const NumberField: React.FC<NumberFieldProps> = React.forwardRef(
  ({ label, ...props }: NumberFieldProps, ref?: React.Ref<HTMLInputElement>) => {
    return (
      <Container>
        <Label>{label}</Label>
        <NumberInput data-testid="number-field-input" step="1" type="number" {...props} ref={ref} />        
      </Container>
    );
  }
);

export default NumberField;
