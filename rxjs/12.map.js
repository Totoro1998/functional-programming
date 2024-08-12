// 用于将源 Observable 发出的每个值通过指定的函数进行转换，并返回一个新的 Observable，该 Observable 发出转换后的值。它是 RxJS 中最基本和最常用的操作符之一。

import { of } from "rxjs";
import { map, filter } from "rxjs/operators";

// // 创建一个源 Observable
// const source$ = of(1, 2, 3);

// // 使用 map 操作符转换每个值
// const result$ = source$.pipe(
//   map((value) => value * 2) // 将每个值乘以 2
// );

// result$.subscribe((value) => {
//   console.log(value);
// });

// // 创建一个源 Observable 发出对象
// const source$ = of({ id: 1, name: "Alice" }, { id: 2, name: "Bob" });

// // 使用 map 操作符提取对象的 name 属性
// const result$ = source$.pipe(map((person) => person.name));

// result$.subscribe((name) => {
//   console.log(name);
// });

// 创建一个源 Observable
const source$ = of(1, 2, 3, 4, 5);

// 使用 map 操作符转换值，然后使用 filter 操作符筛选结果
const result$ = source$.pipe(
  map((value) => value * 2), // 转换每个值
  filter((value) => value > 6) // 只保留大于 6 的值
);

result$.subscribe((value) => {
  console.log(value);
});
