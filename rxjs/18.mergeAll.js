// 用于将源 Observable 发出的每个内部 Observable 并发地合并为一个新的 Observable。
// 与 concatAll 不同，mergeAll 不会等到前一个内部 Observable 完成后才处理下一个，而是同时处理所有内部 Observable。
import { of, interval } from "rxjs";
import { mergeAll, take } from "rxjs/operators";

// 创建一个源 Observable 发出内部 Observable
const source$ = of(
  interval(1000).pipe(take(3)), // 内部 Observable 1
  interval(500).pipe(take(3)) // 内部 Observable 2
);

// 使用 mergeAll 将内部 Observable 并发地合并
const result$ = source$.pipe(mergeAll());

result$.subscribe((value) => {
  console.log(value);
});
