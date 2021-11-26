import { CentredRowLayout } from '@/presentation/components/layouts';
import { Colors } from '@/presentation/styles/colors.enum';
import styled from 'styled-components';

export const StyledLabel = styled.label`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;

  width: 100%;
  margin: 0 0 5px;

  color: ${Colors.WHITE};
`;

export const StyledInputContainer = styled(CentredRowLayout)`
  width: 100%;
  margin: 5px 0 5px;
  box-sizing: border-box;

  position: relative;
`;

export const StyledInput = styled.input`
  width: 100%;

  border: 1px solid ${Colors.WHITESMOKE};
  border-radius: 3px;
  line-height: 24px;
  padding: 10px calc(20px + 24px) 10px 10px;

  box-sizing: border-box;
`;

export const spanValidator = {
  color: 'red',
  width: '100%',
  margin: '0 0 10px',
};
