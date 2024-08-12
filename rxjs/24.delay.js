// 用于在 Observable 发出的每个值之前添加延迟。它可以用于模拟网络延迟、控制数据流的速率，或在操作流中的元素时添加时间间隔。delay 是一个非常实用的工具，用于在异步编程和测试中控制时间。

import { of } from "rxjs";
import { delay, fromEvent } from "rxjs/operators";

// // 创建一个源 Observable
// const source$ = of("a", "b", "c");

// // 使用 delay 在发出每个值之前添加 1000 毫秒（1 秒）的延迟
// const result$ = source$.pipe(delay(1000));

// result$.subscribe((value) => {
//   console.log(value);
// });

const clicks = fromEvent(document, "click");
const delayedClicks = clicks.pipe(delay(1000)); // each click emitted after 1 second
delayedClicks.subscribe((x) => console.log(x));
