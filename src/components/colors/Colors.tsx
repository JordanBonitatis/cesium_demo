import React from 'react';
import styled from 'styled-components';

import Label from '../label';

export interface ColorProps {
  color: string;
  [x: string]: any;
}

const Container = styled.div`
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
    <Container>
      {label ? <Label>Color</Label> : null}
      <Color color="#41d8b7" {...props} />
    </Container>
  );
};

const Purple: React.FC<{ label?: string, [x: string]: any }> = ({label, ...props}) => {
  return (
    <Container>
      {label ? <Label>Color</Label> : null}
      <Color color="#c141d8" {...props} />
    </Container>
  );
};

const Green: React.FC<{ label?: string, [x: string]: any }> = ({label, ...props}) => {
  return (
    <Container>
      {label ? <Label>Color</Label> : null}
      <Color color="#0ea50c" {...props} />
    </Container>
  );
};

export const colors: {[index: string]: any} = {
  green: Green,
  purple: Purple,
  teal: Teal,
}


export default Color;