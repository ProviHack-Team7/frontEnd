import styled from 'styled-components';

export const CentredRowLayout = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

export const UpperCentredRowLayout = styled(CentredRowLayout)`
  align-items: flex-start;
`;

export const BottomCentredRowLayout = styled(CentredRowLayout)`
  align-items: flex-end;
`;

export const CentredLeftRowLayout = styled(CentredRowLayout)`
  justify-content: flex-start;
`;

export const CentredRightRowLayout = styled(CentredRowLayout)`
  justify-content: flex-end;
`;

export const UpperLeftRowLayout = styled(UpperCentredRowLayout)`
  justify-content: flex-start;
`;

export const UpperRightRowLayout = styled(UpperCentredRowLayout)`
  justify-content: flex-end;
`;

export const BottomLeftRowLayout = styled(BottomCentredRowLayout)`
  justify-content: flex-start;
`;

export const BottomRightRowLayout = styled(BottomCentredRowLayout)`
  justify-content: flex-end;
`;
