// 创建一个 Observable，该 Observable 发出从事件目标（如 DOM 元素、Node.js 事件发射器等）上发出的事件。

import { fromEvent } from "rxjs";

const div = document.createElement("div");
div.style.cssText = "width: 200px; height: 200px; background: #09c;";
document.body.appendChild(div);

// note optional configuration parameter which will be passed to addEventListener
const clicksInDocument = fromEvent(document, "click", { capture: true });
const clicksInDiv = fromEvent(div, "click");

clicksInDocument.subscribe(() => console.log("document"));
clicksInDiv.subscribe(() => console.log("div"));

// By default events bubble UP in DOM tree, so normally
// when we would click on div in document
// "div" would be logged first and then "document".
// Since we specified optional `capture` option, document
// will catch event when it goes DOWN DOM tree, so console
// will log "document" and then "div".
