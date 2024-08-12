// 用于将源 Observable 发出的每个值映射到一个新的 Observable，然后将这些内部 Observable 的值并发地合并为一个新的 Observable。
// mergeMap 不会等待前一个内部 Observable 完成，它会同时处理所有的内部 Observable。
import { of, mergeMap, interval, map } from "rxjs";

const letters = of("a", "b", "c");
const result = letters.pipe(mergeMap((x) => interval(1000).pipe(map((i) => x + i))));

result.subscribe((x) => console.log(x));

// Results in the following:
// a0
// b0
// c0
// a1
// b1
// c1
// continues to list a, b, c every second with respective ascending integers
