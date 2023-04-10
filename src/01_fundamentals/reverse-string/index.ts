import { strLength } from '../str-length';

type ReverseStringFn = (str: string) => string;

export const reverseString: ReverseStringFn = (str) => {
  let strLen = strLength(str);
  let reverseString = '';

  while (strLen > 0) {
    // eslint-disable-next-line @thearenaproject/no-methods-or-properties
    reverseString += str[strLen - 1];
    strLen--;
  }

  return reverseString;
};
