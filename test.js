const moduleFn = require('./my-module.js');

const ranges1 = [
  [1000, 2000],
  [2500, 4000],
  [3900, 4100],
  [8000, 9000],
  [9050, 9500]
];
console.log('Example 1:', moduleFn.mergeTimeRanges(ranges1, 200));

const ranges2 = [
  [0, 10],
  [15, 20],
  [25, 30]
];
console.log('Example 2:', moduleFn.mergeTimeRanges(ranges2, 4));

const ranges3 = [
  [0, 10],
  [12, 15],
  [17, 25],
  [27, 35]
];
console.log('Example 3:', moduleFn.mergeTimeRanges(ranges3, 3));
