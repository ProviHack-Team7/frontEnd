import useWindowSize from '@/presentation/hooks/useWindowSize/useWindowSize';
import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import FormItem, { Props as FormItemProps } from './form-item/FormItem';
import { StyledForm } from './Form.styles';

interface SubProps {
  // eslint-disable-next-line react/no-unused-prop-types
  Item: FC<FormItemProps>;
}

interface Props {
  children?: SubProps[];
  formName?: string;
  onSubmit?(): void;

  // eslint-disable-next-line react/no-unused-prop-types
  Item: FC<FormItemProps>;
}

const Form: Props = ({ children, formName, onSubmit }: Props): RE => {
  const { width } = useWindowSize();
  const isMobile = width < 1076;

  return (
    <StyledForm
      isMobile={isMobile}
      width={width}
      name={formName}
      onSubmit={onSubmit}
    >
      {children}
    </StyledForm>
  );
};

Form.Item = FormItem;

export default Form;
