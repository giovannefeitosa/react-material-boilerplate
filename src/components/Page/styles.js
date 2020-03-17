import styled from "styled-components";

const mainMenuWidth = 240;

export const AbsoluteSlot = styled.div`
  position: fixed;
  top: 63px;
  bottom: 0;
  ${props => !!props.left && `
    left: ${mainMenuWidth}px;
    box-shadow: 1px 0 3px #bbb;
  `}
  ${props => !!props.right && `
    right: 0px;
    box-shadow: -1px 0 3px #bbb;
  `}
  width: ${props => props.width}px;
  background: white;
  overflow: auto;
`;

export const DrawerToolbarPlaceholder = styled.div`
  height: 63px;
`;

export const RightColumn = styled.div`
  flex: 1;
`;
