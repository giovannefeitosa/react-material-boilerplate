import React from 'react';
import Page from 'components/Page';
import * as S from './styles';

export default function Home() {
  return (
    <Page title="About">
      <S.Message>About!</S.Message>
    </Page>
  );
}
