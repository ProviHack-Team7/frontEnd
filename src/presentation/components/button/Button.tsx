import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { StyledButton, StyledDisabledButton } from './Button.styles';
import { ButtonType } from './Button.types';

interface Props {
  children?: string | RE | RE[];
  type?: ButtonType;
  disabled?: boolean;
  styles?: Record<string, string>;
  onClick?(): void;
}

const Button: FC<Props> = ({
  children,
  type,
  onClick,
  styles,
  disabled,
}: Props): RE => {
  if (disabled) {
    return (
      <StyledDisabledButton style={styles} disabled={disabled}>
        {children}
      </StyledDisabledButton>
    );
  }

  return (
    // eslint-disable-next-line react/button-has-type
    <StyledButton type={type} onClick={onClick} style={styles}>
      {children}
    </StyledButton>
  );
};

export default Button;
