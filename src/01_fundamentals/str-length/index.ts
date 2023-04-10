type StrLengthFn = (str: string) => number;

export const strLength: StrLengthFn = (str) => {
  let size = 0;

  // eslint-disable-next-line @thearenaproject/no-methods-or-properties
  while (str[size] !== undefined) {
    size++;
  }

  return size;
};
