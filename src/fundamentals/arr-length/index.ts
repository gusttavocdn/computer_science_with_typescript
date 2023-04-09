type ArrLengthFn = (arr: number[]) => number;

export const arrLength: ArrLengthFn = (arr) => {
  let size = 0;

  while (arr[size] !== undefined) {
    size += 1;
  }

  return size;
};
