import styled from 'styled-components';

interface StyledProps {
  subtitleStyles?: Record<string, string>;
}

export const StyledSubtitle = styled.h3`
  font-style: normal;
  font-family: 'Barlow', sans-serif;
  color: white;

  ${({ subtitleStyles }: StyledProps) => subtitleStyles}
`;
