export const decimalFormatter = (value: string) => {
  const newValue = value.replace(/(\D)/, '').replace(',', '');
  return newValue.replace(/(\d)(\d{2})$/, '$1,$2');
};
