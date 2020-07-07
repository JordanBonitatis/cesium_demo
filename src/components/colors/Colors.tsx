import React from 'react';
import styled from 'styled-components';

import Label from '../label';

export interface ColorProps {
  color: string;  
  [x: string]: any;
}

const Container = styled.div<{ hasLabel: boolean }>`
  margin: ${(props) => (props.hasLabel ? '30px 0 0 0': '0')};
  display: block;
  float: left;
`;


const Color = styled.div<ColorProps>`
  height: 40px;
  width: 40px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  display: block;
`;

const Teal: React.FC<{ label?: string, [x: string]: any }> = ({label, ...props}) => {
  return (
    <Container hasLabel={label !== undefined}>
      {label ? <Label>Color</Label> : null}
      <Color color="#41d8b7" {...props} />
    </Container>
  );
};

const Purple: React.FC<{ label?: string, [x: string]: any }> = ({label, ...props}) => {
  return (
    <Container hasLabel={label !== undefined}>
      {label ? <Label>Color</Label> : null}
      <Color color="#c141d8" {...props} />
    </Container>
  );
};

const Green: React.FC<{ label?: string, [x: string]: any }> = ({label, ...props}) => {
  return (
    <Container hasLabel={label !== undefined}>
      {label ? <Label>Color</Label> : null}
      <Color color="#0ea50c" {...props} />
    </Container>
  );
};

const Grey: React.FC<{ label?: string, [x: string]: any }> = ({label, ...props}) => {
  return (
    <Container hasLabel={label !== undefined}>
      {label ? <Label>Color</Label> : null}
      <Color color="#797a82" {...props} />
    </Container>
  );
};

export const colors: {[index: string]: any} = {
  green: Green,
  grey: Grey,
  purple: Purple,
  teal: Teal,
}


export default Color;