type ArrLengthFn = (arr: number[]) => number;

export const arrLength: ArrLengthFn = (arr) => {
  let i = 0;

  // eslint-disable-next-line @thearenaproject/no-methods-or-properties
  while (typeof arr[i] !== 'undefined') {
    ++i;
  }

  return i;
};
