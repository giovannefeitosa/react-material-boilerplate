import React from 'react';
import * as S from './styles';

export default function VerticalMainMenu (props) {
  return (
    <S.Wrapper>
      {props.children}
    </S.Wrapper>
  );
}
