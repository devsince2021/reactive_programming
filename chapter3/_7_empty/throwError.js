const { throwError } = require("rxjs");

throwError(new Error("throw throw")).subscribe(
  (x) => console.log(`throw(Err) next: ${x}`),
  (err) => console.error(`throw(err) erro.message: ${err.message}`),
  () => console.log("completed")
);
