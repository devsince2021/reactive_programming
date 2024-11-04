const { Observable } = require("rxjs");

const task = (observer) => {
  console.log("@@@@@tasks@@@@@@");
  for (let i = 1; i <= 10; i++) {
    setTimeout(() => {
      observer.next(i);
      if (i === 10) {
        observer.complete();
      }
    }, 300 * i);
  }
};

const observableCreated$ = Observable.create(task);

const onNext = (item) => {
  console.log(`observerA: ${item}`);
};
const onError = (err) => {
  console.log(`observerA: ${err}`);
};
const onComplete = () => {
  console.log(`observerA: complete`);
};

console.log("task trigger once");
observableCreated$.subscribe(onNext, onError, onComplete);

setTimeout(() => {
  console.log("task trigger twice");
  observableCreated$.subscribe(
    (item) => {
      console.log(`observerB: ${item}`);
    },
    (err) => {
      console.log(`observerB: ${err}`);
    },
    () => {
      console.log(`observerB: complete`);
    }
  );
}, 1350);
