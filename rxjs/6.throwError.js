// 创建一个可观察对象，它将创建一个错误实例并在订阅后立即将其作为错误推送给消费者。

import { throwError } from "rxjs";

let errorCount = 0;

const errorWithTimestamp$ = throwError(() => {
  const error = new Error(`This is error number ${++errorCount}`);
  error.timestamp = Date.now();
  return error;
});

errorWithTimestamp$.subscribe({
  error: (err) => console.log(err.timestamp, err.message),
});

errorWithTimestamp$.subscribe({
  error: (err) => console.log(err.timestamp, err.message),
});

// Logs the timestamp and a new error message for each subscription
