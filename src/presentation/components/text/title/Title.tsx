import { StyleRemapper } from '@/presentation/utils/style-remapper/StyleRemapper';
import React, {
  FunctionComponent as FC,
  ReactElement as RE,
  ReactNode,
  useMemo,
} from 'react';
import { StyledTitle } from './Title.styles';

export interface Props {
  beforeText?: string;
  afterText?: string;
  children: string | string[] | ReactNode;
  styles?: Record<string, string>;
}

const Title: FC<Props> = ({
  children,
  styles = { '': '' },
  beforeText,
  afterText,
}: Props): RE => {
  const updatedStyles = useMemo(() => StyleRemapper(styles), [styles]);

  return (
    <StyledTitle titleStyles={updatedStyles}>
      {beforeText}
      {children}
      {afterText}
    </StyledTitle>
  );
};

export default Title;
