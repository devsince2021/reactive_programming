// Observer
function func1() {
  console.log("target click #1");
}

// Observer
function func2() {
  console.log("target click #2");
}

// Subject
document.querySelector("#target")?.addEventListener("click", func1);
document.querySelector("#target")?.addEventListener("click", func2);

setTimeout(() => {
  document.querySelector("#target")?.removeEventListener("click", func2);
}, 1000);

setTimeout(() => {
  document.querySelector("#target")?.removeEventListener("click");
}, 2000);
