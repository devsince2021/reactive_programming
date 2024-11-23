const { from } = require("rxjs");

// const suc_promise = new Promise((resolve, reject) => {
//   console.log("promise1 function begin");
//   setTimeout(() => resolve("promise1 resolve"), 700);
//   console.log("promise2 function end");
// });

// from(suc_promise).subscribe(
//   (x) => console.log(`[1] next: ${x}`),
//   (err) => console.error(`[1] error.messge: ${err.message}`),
//   () => console.log("[1] completed")
// );

const fail_promise = new Promise((resolve, reject) => {
  console.log("promise2 function begin");
  setTimeout(() => reject("promise2 resolve"), 1200);
  console.log("promise2 function end");
});

from(fail_promise).subscribe(
  (x) => console.log(`[2] next: ${x}`),
  (err) => console.error(`[2] error.messge: ${err.message}`),
  () => console.log("[2] completed")
);
