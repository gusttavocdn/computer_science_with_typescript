import { arrLength } from '../arr-length';

type CallbackFn = (elem: any) => any;
type ForEachFn = (arr: any[], cb: CallbackFn) => void;
export const forEach: ForEachFn = (arr, cb) => {
  let i = 0;

  while (i < arrLength(arr)) {
    // eslint-disable-next-line @thearenaproject/no-methods-or-properties
    cb(arr[i]);
    i++;
  }
};
