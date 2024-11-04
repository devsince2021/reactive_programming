const { interval } = require("rxjs");

const observable = interval(1000);
const subscription = observable.subscribe((x) => {
  console.log(x);
});

setTimeout(() => {
  subscription.unsubscribe();
}, 4000);
