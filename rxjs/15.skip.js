// skip 是 RxJS 提供的一个过滤操作符，用于跳过源 Observable 发出的前 N 个值，然后只发出后续的值。它对于在数据流中忽略最初的几个值非常有用，比如在分页或只对数据流中的后续部分感兴趣时。

import { interval, skip, of } from "rxjs";

// // emit every half second
// const source = interval(500);
// // skip the first 10 emitted values
// const result = source.pipe(skip(10));

// result.subscribe((value) => console.log(value));
// // output: 10...11...12...13...

// 创建一个源 Observable
const source$ = of(1, 2, 3, 4, 5);

// 使用 skip 跳过前 3 个值
const result$ = source$.pipe(skip(3));

result$.subscribe((value) => {
  console.log(value);
});
