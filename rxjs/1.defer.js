// 用于延迟 Observable 的创建，直到有订阅者订阅它时才真正创建和执行 Observable。这对于延迟 Observable 的执行，特别是在需要依赖于最新的上下文或状态时，尤其有用。

import { defer, of, from } from "rxjs";

// // 使用 defer 创建一个 Observable
// const source$ = defer(() => of(Math.random()));

// // 每次订阅时都会生成一个新的随机数
// source$.subscribe((value) => {
//   console.log("Subscriber 1:", value);
// });

// source$.subscribe((value) => {
//   console.log("Subscriber 2:", value);
// });

// 模拟获取当前时间的函数
const getCurrentTime = () => new Date().toLocaleTimeString();

// 使用 defer 延迟创建 Observable
const source$ = defer(() => from([getCurrentTime()]));

// 在不同的时间订阅
setTimeout(() => {
  source$.subscribe((time) => {
    console.log("Subscriber 1:", time);
  });
}, 1000);

setTimeout(() => {
  source$.subscribe((time) => {
    console.log("Subscriber 2:", time);
  });
}, 2000);
