'use strict';

const QuickSort = require('../Quick-Sort/Quick-Sort');


describe('QuickSort module', () => {
    
  it('Reverse-sorted array Sort', () => {
    let sorted = QuickSort([20,18,12,8,5,-2] , 0 ,5);
    expect(sorted).toEqual([-2, 5, 8, 12, 18, 20]);
  });

  it('Few uniques array Sort', () => {
    let sorted = QuickSort([5, 12, 7, 5, 5, 7], 0 ,5);
    expect(sorted).toEqual([ 5, 5, 5, 7, 7, 12]);
  });

  it('Nearly-sorted array Sort', () => {
    let sorted = QuickSort([2, 3, 5, 7, 13, 11], 0 ,5);
    expect(sorted).toEqual([2, 3, 5, 7, 11, 13 ]);
  });
});