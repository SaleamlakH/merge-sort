import { mergeSort } from "merge-sort";

describe("merge-sort", () => {
  test("sort a single number array", () => {
    expect(mergeSort([1])).toEqual([1]);
  });

  test("sort empty array", () => {
    expect(mergeSort([])).toEqual([]);
  });

  test('sort 2 numbers array', () => {
    expect(mergeSort([2, 1])).toEqual([1, 2]);
  })

  test('sort 5 numbers array', () => {
    expect(mergeSort([1, 3, 4, 2, 5])).toEqual([1, 2, 3, 4, 5])
  })

  test('sort already sorted 5 numbers array', () => {
    expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  })

  test('sort 8 numbers array', () => {
    expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  })
});
