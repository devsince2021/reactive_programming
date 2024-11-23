const { of, asapScheduler } = require("rxjs");

console.log("BEFORE call subscribe()");

const of$ = of(1, 2, "a", "b", 3, 4, ["array1", "array2"], asapScheduler);
of$.subscribe(
  (x) => console.log(`next ${x}`),
  (err) => console.error(err.message),
  () => console.log("Completed")
);

console.log("AFTER call subscribe()");
