import React from 'react';
import Page from 'components/Page';
import * as S from './styles';

export default function Home() {
  return (
    <Page title="Sobre Nós" currentMenu="About">
      <S.Message>Sobre Nós!</S.Message>
    </Page>
  );
}
