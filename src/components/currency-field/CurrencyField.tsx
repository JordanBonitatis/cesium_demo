/**
 * The currency field is a basic input with type `number`.
 * I set the step to .01 as a basic attempt to give it currency-like
 * precision. If the numbers got large enough, we would have to be even more precise.
 * Additionally, in a real-world scenario, I would add validation to ensure
 * that the user hadn't accidentall input a negative, for example.
 */

import React from 'react';
import styled from 'styled-components';

import Label from '../label';

export interface CurrencyFieldProps {
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

const CurrencyInput = styled.input<CurrencyFieldProps>`
  background: #515158;
  border: none;
  border-radius: 4px;
  box-sizing: border-box;
  color: #ddddde;
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

const CurrencyField: React.FC<CurrencyFieldProps> = React.forwardRef(
  ({ label, ...props }: CurrencyFieldProps, ref?: React.Ref<HTMLInputElement>) => {
    return (
      <Container>
        <Label>{label}</Label>
        <CurrencyInput data-testid="currency-field-input" step=".01" type="number" {...props} ref={ref} />        
      </Container>
    );
  }
);

export default CurrencyField;
