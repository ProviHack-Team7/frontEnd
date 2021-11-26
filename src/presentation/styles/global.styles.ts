import { CentredLeftRowLayout } from '@/presentation/components/layouts';
import { Colors } from '@/presentation/styles/colors.enum';
import styled from 'styled-components';

export const StyledTextContainer = styled(CentredLeftRowLayout)`
  width: 100%;
`;

export const paragraphStyles = {
  fontSize: '16px',
  color: `${Colors.BLUE}`,
};
