import styled from 'styled-components';

interface StyledProps {
  labelStyles?: Record<string, string>;
}

export const StyledLabel = styled.label`
  position: relative;
  padding-left: 35px;
  margin: 3px 0;

  font-style: normal;
  font-family: 'Barlow', sans-serif;
  color: white;

  cursor: pointer;

  ${({ labelStyles }: StyledProps) => labelStyles};
`;
