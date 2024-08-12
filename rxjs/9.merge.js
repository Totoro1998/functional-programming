// 创建一个输出 Observable，它同时发出每个给定输入 Observable 的所有值。

// merge 是 RxJS 提供的一个组合操作符，用于将多个 Observables 合并为一个 Observable。
// 与 concat 不同，merge 并不会等待前一个 Observable 完成后再开始订阅下一个 Observable，而是同时订阅所有的源 Observable 并将它们的值并发地发出。这使得 merge 适用于处理并行的数据流。

import { interval, take, merge, of } from "rxjs";

// const timer1 = interval(1000).pipe(take(10));
// const timer2 = interval(2000).pipe(take(6));
// const timer3 = interval(500).pipe(take(10));

// const concurrent = 2; // the argument
// const merged = merge(timer1, timer2, timer3, concurrent);
// merged.subscribe((x) => console.log(x));

// Results in the following:
// - First timer1 and timer2 will run concurrently
// - timer1 will emit a value every 1000ms for 10 iterations
// - timer2 will emit a value every 2000ms for 6 iterations
// - after timer1 hits its max iteration, timer2 will
//   continue, and timer3 will start to run concurrently with timer2
// - when timer2 hits its max iteration it terminates, and
//   timer3 will continue to emit a value every 500ms until it is complete

const observable1 = of("A", "B");
const observable2 = interval(1000).pipe(take(3)); // 发出 0, 1, 2
const observable3 = of("C", "D");

// 使用 merge 合并这些 Observable
const merged$ = merge(observable1, observable2, observable3);

merged$.subscribe((value) => {
  console.log(value);
});
