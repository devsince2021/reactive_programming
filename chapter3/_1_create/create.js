const { Observable } = require("rxjs");

const observable1to10$ = Observable.create((observer) => {
  console.log("[observable1to10] BEGIN subscribe function");

  for (let value = 1; value <= 10; value++) {
    observer.next(value);
  }

  observer.complete();

  observer.next(11);
  observer.error(new Error("error"));
  observer.complete();

  console.log("[observable1to10] END subscribe function");

  return () => {
    console.log("[observable1to10] unsubscribed");
  };
});

observable1to10$.subscribe(
  (v) => {
    console.log("value: >> ", v);
  },
  (err) => {
    console.log("err: >> ", err);
  },
  () => {
    console.log("completed");
  }
);
