/**
 * Basic date picker. In a real-world scenario, we could add
 * validation to ensure that the date was always sometime in the future 
 * for new materials. Or we would disable this input if we knew that the order
 * was completely executed.
 */

import React from 'react';
import styled from 'styled-components';

import Label from '../label';

export interface DateFieldProps {
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

const DateInput = styled.input<DateFieldProps>`
  background: #515158;
  border: none;
  border-radius: 4px;
  box-sizing: border-box;
  color: #ddddde;
  display: block;
  font-size: 14px;
  height: 40px;
  padding: 9.5px 12px 9.5px 12px;
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

const DateField: React.FC<DateFieldProps> = React.forwardRef(
  ({ label, ...props }: DateFieldProps, ref?: React.Ref<HTMLInputElement>) => {
    return (
      <Container>
        <Label>{label}</Label>
        <DateInput data-testid="number-field-input" type="date" {...props} ref={ref} />        
      </Container>
    );
  }
);

export default DateField;
