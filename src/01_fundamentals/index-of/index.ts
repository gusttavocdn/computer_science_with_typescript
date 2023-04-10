import { arrLength } from '../arr-length';

type IndexOfFn = (arr: any[], elem: any) => number;

export const indexOf: IndexOfFn = (arr, elem) => {
  let i = 0;

  while (i < arrLength(arr)) {
    // eslint-disable-next-line @thearenaproject/no-methods-or-properties
    if (arr[i] === elem) return i;
    i++;
  }

  return -1;
};
