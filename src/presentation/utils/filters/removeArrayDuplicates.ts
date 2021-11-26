import { Type } from 'typescript';

export const removeArrayDuplicates = (array: Array<Type>): Array<Type> => {
  return Object.values(
    array.reduce(
      (acc: Record<string, Type>, cv: Type) =>
        acc[cv.toString()] ? { ...acc } : { ...acc, [cv.toString()]: cv },
      {} as Record<string, Type>
    )
  );
};
