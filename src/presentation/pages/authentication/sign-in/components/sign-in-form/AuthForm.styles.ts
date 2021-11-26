import { Colors } from '@/presentation/styles/colors.enum';
import { StyledSizeProps } from '@/presentation/styles/global.types';
import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  margin: 0 0 50px;
  ${({ isMobile, width }: StyledSizeProps) => ({
    // eslint-disable-next-line no-nested-ternary
    width: !isMobile ? '80%' : width && width > 500 ? '400px' : '80%',
    maxWidth: '400px',
  })}
`;

export const buttonStyles = {
  backgroundColor: `${Colors.ORANGE}`,
  borderRadius: '4px',
  border: '0',
  color: `${Colors.WHITE}`,
  padding: '10px 0',
  cursor: 'pointer',
  width: '100%',
  margin: '15px 0 0',
};

export const ErrorLabel = styled.label`
  color: #ff0000;
`;
