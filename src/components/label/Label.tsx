import React from 'react';
import styled from 'styled-components';

export interface LabelProps extends React.PropsWithChildren<{}> {
  [x: string]: any;
}

const LabelElement = styled.label<LabelProps>`
  color: #ffffff;
  display: inline-block;
  flex: none;
  font-family: Arial;
  font-size: 12px;
  font-weight: 600;
  height: 12px;
  letter-spacing: 1px;
  line-height: 12px;
  margin: 4px 0 8px 0;  
  width: auto;
`;

const Label: React.FC<LabelProps> = React.forwardRef(
  ({ children, ...props }: LabelProps, ref?: React.Ref<HTMLLabelElement>) => {
    return (
      <LabelElement data-testid="cesium-label" {...props} ref={ref}>
        {children}
      </LabelElement>
    );
  }
);

export default Label;
