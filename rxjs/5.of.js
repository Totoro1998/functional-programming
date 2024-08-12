// 将参数转换为可观察的序列。

import { of } from "rxjs";

of(10, 20, 30).subscribe({
  next: (value) => console.log("next:", value),
  error: (err) => console.log("error:", err),
  complete: () => console.log("the end"),
});
// Outputs
// next: 10
// next: 20
// next: 30
// the end

of([1, 2, 3]).subscribe({
  next: (value) => console.log("next:", value),
  error: (err) => console.log("error:", err),
  complete: () => console.log("the end"),
});
// Outputs
// next: [1, 2, 3]
// the end
