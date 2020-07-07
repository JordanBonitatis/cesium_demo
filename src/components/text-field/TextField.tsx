import React from 'react';
import styled from 'styled-components';

import Label from '../label';

export interface TextFieldProps {
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

const TextInput = styled.input<TextFieldProps>`
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

const TextField: React.FC<TextFieldProps> = React.forwardRef(
  ({ label, ...props }: TextFieldProps, ref?: React.Ref<HTMLInputElement>) => {
    return (
      <Container>
        <Label>{label}</Label>
        <TextInput data-testid="text-field-input" {...props} ref={ref} />        
      </Container>
    );
  }
);

export default TextField;
