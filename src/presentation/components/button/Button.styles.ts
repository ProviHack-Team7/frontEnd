import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;

  justify-content: center;
  align-items: center;
`;

export const StyledDisabledButton = styled(StyledButton)`
  background-color: gray !important;
  color: black;

  cursor: default !important;
`;
