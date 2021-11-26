import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { VisibilityEyeContainer } from './PassowordItemVisibility.styles';

interface Props {
  itemType: string;
  setItemType(type: string): void;
}

const PasswordItemVisibility: FC<Props> = ({
  itemType,
  setItemType,
}: Props): RE | null => {
  const handleItemTypeChange = () => {
    switch (itemType) {
      case 'password':
        setItemType('text');
        break;
      case 'text':
        setItemType('password');
        break;
      default:
        setItemType(itemType);
    }
  };

  if (itemType === 'password') {
    return (
      <VisibilityEyeContainer>
        <AiOutlineEyeInvisible onClick={handleItemTypeChange} size={24} />
      </VisibilityEyeContainer>
    );
  }

  if (itemType === 'text') {
    return (
      <VisibilityEyeContainer>
        <AiOutlineEye onClick={handleItemTypeChange} size={24} />
      </VisibilityEyeContainer>
    );
  }

  return null;
};

export default PasswordItemVisibility;
