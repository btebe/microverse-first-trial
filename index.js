const element = document.getElementsByClassName("head")[0];
let num = 0;

element.addEventListener("click", () => {
  console.log(num = func(num));
});

function func(n) {
  return n + 1;
}

