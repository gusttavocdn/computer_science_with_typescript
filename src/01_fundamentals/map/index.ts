import { arrLength } from '../arr-length';

type CallbackFn = (elem: any) => any;
type MapFn = (arr: any[], cb: CallbackFn) => any[];

export const map: MapFn = (arr, cb) => {
  let i = 0;
  const newArr = [];

  while (i < arrLength(arr)) {
    // eslint-disable-next-line @thearenaproject/no-methods-or-properties
    newArr[i] = cb(arr[i]);
    i++;
  }

  return newArr;
};
