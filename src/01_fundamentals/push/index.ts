import { arrLength } from '../arr-length';

type PushFn<T> = (arr: T[], item: T) => void;

export const push: PushFn<any> = (arr, item) => {
  if (!arrLength(arr)) {
    arr[0] = item;
    return;
  }

  const end = arrLength(arr) - 1;
  // eslint-disable-next-line @thearenaproject/no-methods-or-properties
  arr[end] = item;
};
