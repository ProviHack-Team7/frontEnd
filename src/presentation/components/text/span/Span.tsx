import { StyleRemapper } from '@/presentation/utils/style-remapper/StyleRemapper';
import React, {
  FunctionComponent as FC,
  ReactElement as RE,
  ReactNode,
  useMemo,
} from 'react';
import { StyledSpan } from './Span.styles';

export interface Props {
  beforeText?: string;
  afterText?: string;
  children: string | string[] | ReactNode;
  styles?: Record<string, string>;
}

const Span: FC<Props> = ({
  children,
  styles = { '': '' },
  beforeText,
  afterText,
}: Props): RE => {
  const updatedStyles = useMemo(() => StyleRemapper(styles), [styles]);

  return (
    <StyledSpan spanStyles={updatedStyles}>
      {beforeText}
      {children}
      {afterText}
    </StyledSpan>
  );
};

export default Span;
