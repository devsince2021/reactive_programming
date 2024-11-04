const { interval } = require("rxjs");

const observable1 = interval(400);
const observable2 = interval(300);

const subscription = observable1.subscribe((x) => {
  console.log("first: " + x);
});

const childSubscription = observable2.subscribe((x) => {
  console.log("second: " + x);
});

subscription.add(childSubscription);

setTimeout(() => {
  subscription.remove(childSubscription);
  subscription.unsubscribe();
}, 5000);
