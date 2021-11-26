import Text from '@/presentation/components/text/Text';
import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import {
  FormItemContainer,
  spanValidator,
  StyledInput,
  StyledLabel,
} from './FormItem.styles';

export interface Props {
  labelName?: string;
  itemType?: string;
  inputName?: string;
  containerStyles?: Record<string, string>;
  placeholder?: string;
  inputValue?: string | number;
  onChangeInput?(e: React.ChangeEvent<HTMLInputElement>): void;
  errors?: string;
}

const FormItem: FC<Props> = ({
  labelName,
  itemType,
  inputName,
  containerStyles,
  placeholder,
  inputValue,
  onChangeInput,
  errors,
}: Props): RE => {
  const { Span } = Text;

  return (
    <FormItemContainer style={containerStyles}>
      <StyledLabel>{labelName}</StyledLabel>
      <StyledInput
        type={itemType}
        name={inputName}
        placeholder={placeholder}
        value={inputValue}
        onChange={onChangeInput}
      />
      {errors && <Span styles={spanValidator}>{errors}</Span>}
    </FormItemContainer>
  );
};

export default FormItem;
