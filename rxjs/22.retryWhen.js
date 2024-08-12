// 用于在 Observable 流中发生错误时，提供自定义的错误处理逻辑，并允许你决定如何和何时重试。
// 与 retry 不同，retryWhen 允许你基于错误流创建自己的重试逻辑，包括重试次数、延迟、条件等。

import { interval, map, retryWhen, tap, delayWhen, timer } from "rxjs";

const source = interval(1000);
const result = source.pipe(
  map((value) => {
    if (value > 5) {
      // error will be picked up by retryWhen
      throw value;
    }
    return value;
  }),
  retryWhen((errors) =>
    errors.pipe(
      // log error message
      tap((value) => console.log(`Value ${value} was too high!`)),
      // restart in 5 seconds
      delayWhen((value) => timer(value * 1000))
    )
  )
);

result.subscribe((value) => console.log(value));

// results:
// 0
// 1
// 2
// 3
// 4
// 5
// 'Value 6 was too high!'
// - Wait 5 seconds then repeat
