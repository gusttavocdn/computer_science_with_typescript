import { arrLength } from '../arr-length';

type CallbackFn = (elem: any) => boolean;
type FilterFn = (arr: any[], cb: CallbackFn) => any[];

export const filter: FilterFn = (arr, cb) => {
  const filteredArray = [];
  let i = 0;
  let j = 0;

  while (i < arrLength(arr)) {
    // eslint-disable-next-line @thearenaproject/no-methods-or-properties
    if (cb(arr[i]) === true) {
      // eslint-disable-next-line @thearenaproject/no-methods-or-properties
      filteredArray[j] = arr[i];
      j++;
    }
    i++;
  }

  return filteredArray;
};
