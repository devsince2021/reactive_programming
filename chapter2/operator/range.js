const { range } = require("rxjs");
const { filter, map } = require("rxjs/operators");

var divisor = 2;
const observable = range(1, 10).pipe(
  filter((v) => v % divisor == 0),
  map((v) => {
    return v + 1;
  })
);

observable.subscribe((v) => {
  console.log(v);
});
