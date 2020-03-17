import React from 'react';
import { Paper } from "@material-ui/core";
import styled from 'styled-components';

export const Wrapper = styled(props => (
  <Paper {...props} />
))`
  ${props => props.withNegativeMargin ? `
    margin-left: -30px;
    margin-top: -30px;
  ` : `
    margin: 0;
  `}
  ${props => props.mr ? `
    margin-right: ${props.mr * 15}px;
  ` : ``}
  margin-bottom: 0;
  xmax-width: 330px;
  min-height: calc(100vh - 85px);
`;
