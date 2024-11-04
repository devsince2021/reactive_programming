const { Observable } = require("rxjs");

const observableCreated$ = Observable.create((observer) => {
  console.log("BEGIN Observable");
  observer.next(1);
  observer.next(2);
  observer.complete();
  observer.next(3);
  console.log("END Observable");
});

observableCreated$.subscribe(
  (item) => console.log(item),
  (e) => {},
  () => console.log("complete")
);
