const { Observable } = require("rxjs");

const createdObservable$ = Observable.create((obv) => {
  console.log("Begin");
  obv.next(1);
});

createdObservable$.subscribe((i) => {
  console.log(i);
});
