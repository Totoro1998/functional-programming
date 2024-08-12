// 从数组、类数组对象、Promise、可迭代对象或类 Observable 对象创建 Observable。

import { from } from "rxjs";

// const array = [10, 20, 30];
// const result = from(array);

// const result = from({ length: 3 });

const promise = new Promise((resolve, reject) => setTimeout(() => resolve("test"), 1000));
const result = from(promise);

result.subscribe((x) => console.log(x));
