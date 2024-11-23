const { Observable } = require("rxjs");
const { map, toArray } = require("rxjs/operators");

const observableCreated$ = Observable.create((observer) => {
  try {
    observer.next(1);
    observer.next(2);
    throw "error!!";
  } catch (err) {
    observer.error(err);
  } finally {
    observer.complete();
  }
});

observableCreated$.subscribe(
  (i) => {
    console.log(`i: >> ${i}`);
  },
  (e) => {
    console.log(`e: >> ${e}`);
  },
  () => {
    console.log(`complete`);
  }
);
