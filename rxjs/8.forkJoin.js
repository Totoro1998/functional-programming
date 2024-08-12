// 接受一个 ObservableInput 的数组或一个 ObservableInput 的字典对象，并返回一个 Observable，
// 该 Observable 要么按传入数组的精确顺序发出值数组，要么按传入字典的相同形状发出值字典。
// forkJoin 是 RxJS 提供的一个组合操作符，用于并行处理多个 Observables，并在所有 Observables 都完成后，发出一个包含每个 Observable 最新值的数组。
// 它非常适合处理多个异步操作，当所有操作都完成时，你需要汇总它们的结果的场景。

import { forkJoin, of, timer, interval, take, delay } from "rxjs";

// const observable = forkJoin({
//   foo: of(1, 2, 3, 4),
//   bar: Promise.resolve(8),
//   baz: timer(4000),
// });
// observable.subscribe({
//   next: (value) => console.log(value),
//   complete: () => console.log("This is how it ends!"),
// });

// // Logs:
// // { foo: 4, bar: 8, baz: 0 } after 4 seconds
// // 'This is how it ends!' immediately after

const observable1 = of("A");
const observable2 = interval(1000).pipe(take(1)); // 发出 0 后完成
const observable3 = of("C").pipe(delay(500)); // 延时 500 毫秒后发出 'C'

const combined$ = forkJoin([observable1, observable2, observable3]);

combined$.subscribe((results) => {
  console.log(results); // 输出: ['A', 0, 'C']
});
