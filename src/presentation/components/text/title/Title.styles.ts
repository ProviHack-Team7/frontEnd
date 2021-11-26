import styled from 'styled-components';

interface StyledProps {
  titleStyles?: Record<string, string>;
}

export const StyledTitle = styled.h1`
  font-style: normal;
  font-family: 'Barlow', sans-serif;
  color: darkred;

  ${({ titleStyles }: StyledProps) => titleStyles}
`;
