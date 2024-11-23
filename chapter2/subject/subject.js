const { Subject } = require("rxjs");

const subject = new Subject();

subject.subscribe({
  next: (v) => {
    console.log("observerA: " + v);
  },
});

setTimeout(() => {
  subject.subscribe({
    next: (v) => {
      console.log("observerB: " + v);
    },
  });
}, 500);

for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    subject.next(i);
  }, i * 400);
}
