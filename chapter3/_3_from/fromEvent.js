const { fromEvent } = require("rxjs");

fromEvent(document.querySelector("#btn1"), "click").subscribe(
  (event) => {
    const pTag = document.createElement("p");
    pTag.appendChild(
      document.createTextNode(`event.target.id ${event.target.id} clicked`)
    );

    document.querySelector("#nextResult").appendChild(pTag);
  },
  (err) => {
    const pTag = document.createElement("p");
    pTag.appendChild(document.createTextNode(`error: ${err.message}`));
    document.querySelector("#errorResult").app;
  },
  () => {
    const pTag = document.createElement("p");
    pTag.appendChild(document.createTextNode("completed"));
    document.querySelector("#completeResult").appendChild(pTag);
  }
);
