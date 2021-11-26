import styled from 'styled-components';

export const CentredColumnLayout = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

export const UpperCentredColumnLayout = styled(CentredColumnLayout)`
  justify-content: flex-start;
`;

export const BottomCentredColumnLayout = styled(CentredColumnLayout)`
  justify-content: flex-end;
`;

export const CentredLeftColumnLayout = styled(CentredColumnLayout)`
  align-items: flex-start;
`;

export const CentredRightColumnLayout = styled(CentredColumnLayout)`
  align-items: flex-end;
`;

export const UpperLeftColumnLayout = styled(UpperCentredColumnLayout)`
  align-items: flex-start;
`;

export const UpperRightColumnLayout = styled(UpperCentredColumnLayout)`
  align-items: flex-end;
`;

export const BottomLeftColumnLayout = styled(BottomCentredColumnLayout)`
  align-items: flex-start;
`;

export const BottomRightColumnLayout = styled(BottomCentredColumnLayout)`
  align-items: flex-end;
`;
