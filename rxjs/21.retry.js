// 用于在 Observable 流中发生错误时自动重试指定次数。
// 它对于处理暂时性错误（如网络请求失败）非常有用，可以帮助确保 Observable 流在遇到错误时能够尝试恢复并继续发出数据。

import { interval, mergeMap, throwError, of, retry } from "rxjs";

const source = interval(1000);
const result = source.pipe(
  mergeMap((val) => (val > 5 ? throwError(() => "Error!") : of(val))),
  retry(2) // retry 2 times on error
);

result.subscribe({
  next: (value) => console.log(value),
  error: (err) => console.log(`${err}: Retried 2 times then quit!`),
});

// Output:
// 0..1..2..3..4..5..
// 0..1..2..3..4..5..
// 0..1..2..3..4..5..
// 'Error!: Retried 2 times then quit!'
