const { Observable } = require("rxjs");
const { map, toArray } = require("rxjs/operators");

// const observableCreated$ = Observable.create((ob) => {
//   ob.next(2);
//   ob.next(4);
//   ob.complete();
// });

// const sec = observableCreated$.pipe(map((v) => v * 3));

// observableCreated$.subscribe((v) => console.log(v));
// sec.subscribe((v) => console.log(`sec >> ${v}`));

const observableCreated$ = Observable.create((ob) => {
  console.log("Ob BEGIN");
  const arr = [1, 2];

  for (let i = 0; i < arr.length; i++) {
    console.log(`current array: arr[${i}]`);
    ob.next(arr[i]);
  }
  console.log("BEFORE compelete");
  ob.complete();
  console.log("END");
});

const logAndGet = (og, v) => {
  console.log(`og: ${og}, map value: ${v}`);
  return v;
};

observableCreated$
  .pipe(
    map((v) => logAndGet(v, v * 2)),
    map((v) => logAndGet(v, v + 1)),
    map((v) => logAndGet(v, v * 3)),
    toArray()
  )
  .subscribe((arr) => console.log(arr));
