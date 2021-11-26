import {
  CentredColumnLayout,
  CentredRowLayout,
} from '@/presentation/components/layouts';
import styled from 'styled-components';

export const StyledInputContainer = styled(CentredRowLayout)`
  width: 100%;
  margin: 5px 0 5px;
  box-sizing: border-box;

  position: relative;
`;

export const VisibilityEyeContainer = styled(CentredColumnLayout)`
  position: absolute;
  right: 10px;
`;
