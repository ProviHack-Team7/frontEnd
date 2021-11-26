/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */

const filterStylesArray: CallableFunction = (
  stylesArray: Array<[string, string]>
): Array<[string, string]> =>
  stylesArray.filter(([key, value]: Array<string>) => key && value);

const mapStylesArray: CallableFunction = (
  filteredStylesArray: Array<[string, string]>
): Array<[string, string]> =>
  filteredStylesArray?.map(([key, value]: Array<string>) => [
    key,
    (value += ' !important'),
  ]) || ['', ''];

const mapBuilder: CallableFunction = (
  stylesArray: Array<[string, string]>
): Map<string, string> =>
  new Map(stylesArray as Iterable<readonly [string, string]>);

export const StyleRemapper: CallableFunction = (
  styles: Record<string, string>
): Record<string, string> => {
  const stylesArray = Object.entries(styles);

  // const filteredStylesArray = stylesArray.filter(
  //   ([key, value]: Array<string>) => key && value
  // );

  const filteredStylesArray = filterStylesArray(stylesArray);

  // const newStylesArray = filteredStylesArray?.map(
  //   ([key, value]: Array<string>) => [key, (value += ' !important')]
  // ) || ['', ''];

  const newStylesArray = mapStylesArray(filteredStylesArray);

  // const mappedStylesArray = new Map(
  //   newStylesArray as Iterable<readonly [unknown, unknown]>
  // );

  const mappedStylesArray = mapBuilder(newStylesArray);

  const newStyles = Object.fromEntries(mappedStylesArray);

  // styles = { ...newStyles };

  return newStyles;
};
