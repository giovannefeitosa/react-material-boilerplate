import React from 'react';
import { Paper, Box } from "@material-ui/core";
import * as S from './styles';

export default function ContentBox(props) {

  const content = props.padding ? (
    <Box p={2}>{props.children}</Box>
  ) : (props.children);

  return (
    <Paper square={props.square}>
      {!!props.title && (
        <Box p={2}>
          <S.Title>{props.title}</S.Title>
        </Box>
      )}

      {content}

      {!!props.footer && (
        <Box p={2}>
          {props.footer}
        </Box>
      )}
    </Paper>
  );
}