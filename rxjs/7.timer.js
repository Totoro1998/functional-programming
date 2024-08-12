// 用于生成一个 Observable，该 Observable 在指定的延迟时间后发出一个值（通常是 0），然后根据指定的周期时间重复发出值。
// 它非常适用于创建定时器、延迟执行和定期发出值的场景。

import { of, timer, concatMap } from "rxjs";

// This could be any observable
const source = of(1, 2, 3);

timer(3000)
  .pipe(concatMap(() => source))
  .subscribe(console.log);
