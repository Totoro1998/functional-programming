// 用于将 Observable 发出的所有值收集到一个数组中，并在 Observable 完成时将这个数组作为单一的值发出。这个操作符特别适用于需要将 Observable 中的多个值聚合到一个数组中的场景。

import { interval, take, toArray } from "rxjs";

const source = interval(1000);
const example = source.pipe(take(10), toArray());

example.subscribe((value) => console.log(value));

// output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
