import React from 'react';
import Page from 'components/Page';
import * as S from './styles';

export default function Home() {
  return (
    <Page title="Page not found">
      <S.Message>Error 404: Page not found!</S.Message>
    </Page>
  );
}
