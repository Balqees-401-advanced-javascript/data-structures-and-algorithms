'use strict';

const MergeSort = require('../MergeSort/MergeSort');


describe('MergeSort module', () => {
    
  it('Reverse-sorted array Sort', () => {
    let sorted = MergeSort([20,18,12,8,5,-2]);
    expect(sorted).toEqual([-2, 5, 8, 12, 5, -2]);
  });

  it('Few uniques array Sort', () => {
    let sorted = MergeSort([5, 12, 7, 5, 5, 7]);
    expect(sorted).toEqual([ 5, 5, 5, 7, 7, 7]);
  });

  it('Nearly-sorted array Sort', () => {
    let sorted = MergeSort([2, 3, 5, 7, 13, 11]);
    expect(sorted).toEqual([2, 3, 5, 7, 13, 11 ]);
  });
});