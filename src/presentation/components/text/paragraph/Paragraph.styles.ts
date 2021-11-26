import styled from 'styled-components';

interface StyledProps {
  paragraphStyles?: Record<string, string>;
}

export const StyledParagraph = styled.p`
  font-style: normal;
  font-family: 'Barlow', sans-serif;
  color: white;

  ${({ paragraphStyles }: StyledProps) => paragraphStyles};
`;
