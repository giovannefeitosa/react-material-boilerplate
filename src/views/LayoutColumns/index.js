import React from 'react';
import Page from 'components/Page';
import * as S from './styles';
import { Grid } from '@material-ui/core';
import VerticalMainMenu from 'components/VerticalMainMenu';

export default function LayoutColumns() {
  const contentSlot = (
    <div>
      Absolute Slot
    </div>
  );

  return (
    <Page
      title="Layout de Colunas Full-Height"
      currentMenu="LayoutColumns"
      absoluteLeftSlot={contentSlot}
      absoluteLeftWidth={200}
      absoluteRightSlot={contentSlot}
      absoluteRightWidth={300}
    >
      <div style={{width: 100, height: 250, background: 'red'}} />
      <div style={{width: 100, height: 250, background: 'blue'}} />
      <div style={{width: 100, height: 250, background: 'green'}} />
      <div style={{width: 100, height: 250, background: 'red'}} />
      <div style={{width: 100, height: 250, background: 'blue'}} />
      <div style={{width: 100, height: 250, background: 'green'}} />
      <div style={{width: 100, height: 250, background: 'red'}} />
      <div style={{width: 100, height: 250, background: 'blue'}} />
      <div style={{width: 100, height: 250, background: 'green'}} />
      <div style={{width: 100, height: 250, background: 'red'}} />
      <div style={{width: 100, height: 250, background: 'blue'}} />
      <div style={{width: 100, height: 250, background: 'green'}} />
    </Page>
  );
}
