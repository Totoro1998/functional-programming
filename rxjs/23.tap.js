// 用于在 Observable 流中的数据发出时执行副作用操作。它不会修改流中的数据，也不会影响流的正常处理，只是用于调试、记录信息或执行其他不改变数据流的操作。

import { of } from "rxjs";
import { tap, map } from "rxjs/operators";

// 创建一个源 Observable
const source$ = of(1, 2, 3, 4, 5);

// 使用 tap 执行副作用操作
const result$ = source$.pipe(
  tap((value) => console.log(`Before map: ${value}`)), // 记录每个发出的值
  map((value) => value * 2), // 转换数据
  tap((value) => console.log(`After map: ${value}`)) // 记录转换后的值
);

result$.subscribe((value) => {
  console.log(`Subscribed value: ${value}`);
});
