// 用于在指定的时间内等待 Observable 发出值。如果 Observable 在指定的时间内没有发出值，则 timeout 会发出一个错误通知。
// 这个操作符非常适合处理异步操作，尤其是在你需要确保某个操作在一定时间内完成的情况下。

import { of, timer } from "rxjs";
import { timeout, catchError, map } from "rxjs/operators";

// 创建一个源 Observable，它将在 5000 毫秒后发出值
const source$ = timer(5000).pipe(
  // 模拟延迟 5 秒
  map(() => "Completed")
);

// 使用 timeout 设置最长等待时间为 2000 毫秒
const result$ = source$.pipe(
  timeout(2000), // 超过 2000 毫秒则触发超时错误
  catchError((error) => {
    // 捕获超时错误并返回备用值
    console.error("Timeout occurred:", error);
    return of("Fallback value"); // 提供一个备用的 Observable
  })
);

result$.subscribe((value) => {
  console.log(value);
});
