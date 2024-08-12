// 将每个源值投影到一个 Observable，该 Observable 会合并到输出 Observable 中，以序列化的方式等待每个源值完成，然后再合并下一个。
// concatMap 是 RxJS 提供的一个高阶映射操作符，用于将源 Observable 发出的每个值映射到一个新的 Observable，然后将这些内部 Observable 按顺序合并为一个新的 Observable。
// 它会确保内部 Observable 按顺序处理，直到当前内部 Observable 完成，才会处理下一个。

import { of } from "rxjs";
import { concatMap, delay } from "rxjs/operators";

// 创建一个源 Observable
const source$ = of(1, 2, 3);

// 使用 concatMap 映射每个值到一个新的 Observable
const result$ = source$.pipe(
  concatMap(
    (value) => of(`Processed ${value}`).pipe(delay(1000)) // 模拟异步操作
  )
);

result$.subscribe((result) => {
  console.log(result);
});
