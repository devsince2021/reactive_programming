const { Observable } = require("rxjs");

const observableCreated$ = Observable.create((observer) => {
  const intervalId = setInterval(() => {
    observer.next("hi");
  }, 1000);

  return () => {
    console.log("cleanup");
    clearInterval(intervalId);
  };
});

const subscription = observableCreated$.subscribe((message) => {
  console.log("msg: >> " + message);
});

setTimeout(() => {
  console.log("fire!");
  subscription.unsubscribe();
}, 3000);
