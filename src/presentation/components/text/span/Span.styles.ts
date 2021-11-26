import styled from 'styled-components';

interface StyledProps {
  spanStyles?: Record<string, string>;
}

export const StyledSpan = styled.span`
  font-style: normal;
  font-family: 'Barlow', sans-serif;
  color: white;

  ${({ spanStyles }: StyledProps) => spanStyles};
`;
