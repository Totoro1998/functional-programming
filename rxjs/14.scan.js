// 对于封装和管理状态很有用。建立初始状态后，通过种子值（第二个参数）或来自源的第一个值，将累加器（或“reducer 函数”）应用于源中的每个值。
// 用于对源 Observable 发出的每个值进行累积计算，并将累积结果发出。它类似于数组的 reduce 方法，但与 reduce 不同的是，scan 会在每次累积计算后发出中间结果。

import { of } from "rxjs";
import { interval, scan, map, startWith } from "rxjs";

// // 创建一个源 Observable
// const source$ = of(1, 2, 3, 4, 5);

// // 使用 scan 进行累积计算
// const result$ = source$.pipe(
//   scan((accumulator, value) => accumulator + value, 0) // 累加每个值
// );

// result$.subscribe((result) => {
//   console.log(result);
// });

const firstTwoFibs = [0, 1];
// An endless stream of Fibonacci numbers.
const fibonacci$ = interval(1000).pipe(
  // Scan to get the fibonacci numbers (after 0, 1)
  scan(([a, b]) => [b, a + b], firstTwoFibs),
  // Get the second number in the tuple, it's the one you calculated
  map(([, n]) => n),
  // Start with our first two digits :)
  startWith(...firstTwoFibs)
);

fibonacci$.subscribe(console.log);
