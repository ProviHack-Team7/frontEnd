import { StyleRemapper } from '@/presentation/utils/style-remapper/StyleRemapper';
import React, {
  FunctionComponent as FC,
  ReactElement as RE,
  ReactNode,
  useMemo,
} from 'react';
import { StyledLabel } from './Label.styles';

export interface Props {
  beforeText?: string;
  afterText?: string;
  children: string | string[] | ReactNode;
  styles?: Record<string, string>;
}

const Label: FC<Props> = ({
  children,
  styles = { '': '' },
  beforeText,
  afterText,
}: Props): RE => {
  const updatedStyles = useMemo(() => StyleRemapper(styles), [styles]);

  return (
    <StyledLabel labelStyles={updatedStyles}>
      {beforeText}
      {children}
      {afterText}
    </StyledLabel>
  );
};

export default Label;
