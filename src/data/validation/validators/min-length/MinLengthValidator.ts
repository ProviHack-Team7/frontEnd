export const minLengthValidator = (
  field: string,
  minLength: number
): boolean => {
  if (field.length >= minLength) {
    return true;
  }

  return false;
};
