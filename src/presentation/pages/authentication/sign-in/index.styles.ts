import styled from 'styled-components';
import { Colors } from '@/presentation/styles/colors.enum';
import { CentredLeftRowLayout } from '@/presentation/components/layouts';
import { StyledSizeProps } from '@/presentation/styles/global.types';

export const AuthContainer = styled.div`
  width: 100vw;
  min-height: 100vh;

  color: black;
`;

export const AuthImageContainer = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
  background-repeat: no-repeat;
`;

export const LogoImgContainer = styled(CentredLeftRowLayout)`
  margin: 50px 0;
  ${({ isMobile, width }: StyledSizeProps) => ({
    // eslint-disable-next-line no-nested-ternary
    width: !isMobile ? '80%' : width && width > 500 ? '400px' : '80%',
    maxWidth: '400px',
  })}
`;

export const subtitleStyles = (width?: number, isMobile?: boolean) => ({
  color: '#b18935',
  // eslint-disable-next-line no-nested-ternary
  width: `${!isMobile ? '80%' : width && width > 500 ? '400px' : '80%'}`,
  maxWidth: '400px',
  margin: '0 0 30px',
});
