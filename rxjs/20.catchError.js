// 用于捕获 Observable 流中的错误，并允许你以一种优雅的方式处理错误。它允许你返回一个新的 Observable 作为错误处理的替代，并继续流处理。
import { of, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

// 创建一个源 Observable，其中会发出错误
const source$ = throwError("Error occurred");

// 使用 catchError 捕获错误并返回一个备用的 Observable
const result$ = source$.pipe(
  catchError((error) => {
    console.error("Caught error:", error);
    return of("Fallback value"); // 提供一个备用的 Observable
  })
);

result$.subscribe((value) => {
  console.log(value);
});
