// concat 是 RxJS 提供的一个组合操作符，用于将多个 Observables 连接起来，使得它们依次发出值。
// 每个 Observable 都会在前一个 Observable 完成后才开始发出值。这个操作符适用于需要按顺序处理多个数据流的场景。

import { concat, of, interval } from "rxjs";
import { take, delay } from "rxjs/operators";

// const observable1 = of(1, 2, 3);
// const observable2 = of(4, 5, 6);

// const concatenated$ = concat(observable1, observable2);

// concatenated$.subscribe((value) => {
//   console.log(value);
// });

const observable1 = of("Start").pipe(delay(1000));
const observable2 = interval(500).pipe(take(3)); // 发出 0, 1, 2，之后完成

const concatenated$ = concat(observable1, observable2);

concatenated$.subscribe((value) => {
  console.log(value);
});

// Start;
// 0;
// 1;
// 2;
