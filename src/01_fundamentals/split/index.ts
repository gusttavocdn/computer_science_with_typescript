import { strLength } from '../str-length';

type SplitFn = (str: string) => string[];
export const split: SplitFn = (str) => {
  const chars: string[] = [];
  let i = 0;

  while (i < strLength(str)) {
    // eslint-disable-next-line @thearenaproject/no-methods-or-properties
    chars[i] = str[i];
    i++;
  }

  return chars;
};
