import Text from '@/presentation/components/text/Text';
import React, {
  FunctionComponent as FC,
  ReactElement as RE,
  useState,
} from 'react';

import {
  spanValidator,
  StyledInputContainer,
  StyledInput,
  StyledLabel,
} from './AuthFormItem.styles';
import PasswordItemVisibility from '../password-item-visibility/PassowordItemVisibility';

export interface Props {
  labelName?: string;
  itemType?: string;
  inputName?: string;
  placeholder?: string;
  inputValue?: string | number;
  onChangeInput?(e: React.ChangeEvent<HTMLInputElement>): void;
  errors?: string;
}

const FormItem: FC<Props> = ({
  labelName,
  itemType = 'text',
  inputName,
  placeholder,
  inputValue,
  onChangeInput,
  errors,
}: Props): RE => {
  const { Span } = Text;
  const [temporaryItemType, setTemporaryItemType] = useState(itemType);

  return (
    <>
      <StyledLabel>{labelName}</StyledLabel>
      <StyledInputContainer>
        <StyledInput
          type={temporaryItemType}
          name={inputName}
          placeholder={placeholder}
          value={inputValue}
          onChange={onChangeInput}
        />
        {itemType === 'password' && (
          <PasswordItemVisibility
            itemType={temporaryItemType}
            setItemType={setTemporaryItemType}
          />
        )}
      </StyledInputContainer>
      {/* TODO: implement a loading pin */}
      {/* {errors && <Span styles={spanValidator}>{errors}</Span>} */}
    </>
  );
};

export default FormItem;
