# Instructions

Write a function called insertionSort that takes an array as an argument and returns a sorted copy of the array.

The order is defined by the comparison function passed as the second argument.

For this exercise, you will implement an insertion sort algorithm.

Your function should conform to the following prototype:

```typescript
type CompareFn<T> = (a: T, b: T) => number
type SortFn<T> = (arr: T[], cmp: CompareFn<T>) => T[]
```

### Allowed Functions / Properties

- N/A
