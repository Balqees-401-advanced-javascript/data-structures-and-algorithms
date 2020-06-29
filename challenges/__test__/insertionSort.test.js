'use strict';
const InsertionSort = require('../Insertion Sort/InsertionSort');


describe('InsertionSort module', () => {
    
  it('Reverse-sorted array Sort', () => {
    let sorted = InsertionSort([20, 18, 12, 8, 5, -2]);
    expect(sorted).toEqual([-2, 5, 8, 12, 18, 20]);
  });

  it('Few uniques array Sort', () => {
    let sorted = InsertionSort([5, 12, 7, 5, 5, 7]);
    expect(sorted).toEqual([5, 5, 5, 7, 7, 12]);
  });

  it('Nearly-sorted array Sort', () => {
    let sorted = InsertionSort([2, 3, 5, 7, 13, 11]);
    expect(sorted).toEqual([2, 3, 5, 7, 11, 13]);
  });
});