// 用于在源 Observable 发出的数据之前，先发出一个或多个指定的值。
// 它常用于在 Observable 流的开始部分插入初始值，确保在源 Observable 发出数据之前已有一些值可供订阅者处理。

import { of, timer, map } from "rxjs";
import { startWith } from "rxjs/operators";

// // 创建一个源 Observable
// const source$ = of(2, 3, 4);

// // 使用 startWith 在开始时插入一个值 1
// const result$ = source$.pipe(startWith(1));

// result$.subscribe((value) => {
//   console.log(value);
// });

timer(1000)
  .pipe(
    map(() => "timer emit"),
    startWith("timer start")
  )
  .subscribe((x) => console.log(x));

// results:
// 'timer start'
// 'timer emit'
