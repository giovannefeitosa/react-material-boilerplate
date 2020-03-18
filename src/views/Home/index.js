import React from 'react';
import Page from 'components/Page';
import * as S from './styles';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

export default function Home() {
  const history = useHistory();

  return (
    <Page title="Home" currentMenu="Home">
      <S.Message>Home!</S.Message>
      
      <Button
        color="primary"
        variant="contained"
        onClick={() => history.push('/about')}
      >
        Ver página Sobre Nós
      </Button>
    </Page>
  );
}
