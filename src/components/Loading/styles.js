import React from 'react';
import styled from 'styled-components';
import loading from '../../assets/img/loading.gif';

const CenterModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const Box = styled.div`
  width: 240px;
  height: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f7f7f9;
  border-radius: 6px;
`;

export const LoadingGif = () => (
  <CenterModal>
    <Box>
      <img src={loading} alt="Loading Pókemon" style={{ height: 120 }} />
      Loading...
    </Box>
  </CenterModal>
);
