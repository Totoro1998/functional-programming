// take 是 RxJS 提供的一个过滤操作符，用于从源 Observable 中获取前 N 个值，然后完成。它会在发出指定数量的值后自动完成，适用于只关心数据流中的前几个值的情况。

import { interval, take } from "rxjs";

const intervalCount = interval(1000);
const takeFive = intervalCount.pipe(take(5));
takeFive.subscribe((x) => console.log(x));

// Logs:
// 0
// 1
// 2
// 3
// 4
