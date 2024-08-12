// 用于将源 Observable 发出的每个内部 Observable 依次连接起来，并将这些内部 Observable 的值按顺序合并到一个新的 Observable 中。
// concatAll 将源 Observable 中的每个内部 Observable 连接在一起，确保前一个内部 Observable 完成后才会处理下一个。

import { of, interval } from "rxjs";
import { concatAll, delay } from "rxjs/operators";

// 创建一个源 Observable 发出内部 Observable
const source$ = of(
  interval(1000).pipe(delay(500)), // 内部 Observable 1
  interval(500).pipe(delay(500)) // 内部 Observable 2
);

// 使用 concatAll 将内部 Observable 依次连接
const result$ = source$.pipe(concatAll());

result$.subscribe((value) => {
  console.log(value);
});
