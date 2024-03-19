const keys = [...document.querySelectorAll(".key")];
const listKeyCode = keys.map((element) => element.dataset.key);
const screen = document.querySelector(".result");

document.addEventListener("keydown", (e) => {
  const value = e.keyCode.toString();
  calculate(value);
});

document.addEventListener("click", (e) => {
  const value = e.target.dataset.key;
  calculate(value);
});

const calculate = (value) => {
  if (listKeyCode.includes(value)) {
    switch (value) {
      case "27":
        screen.textContent = "";
        break;
      case "8":
        if (screen.textContent.length > 0) {
          screen.textContent = screen.textContent.slice(0, -1);
        }
        break;
      case "13":
        const calcul = eval(screen.textContent);
        screen.textContent = calcul;
        break;
      default:
        const indexKeyCode = listKeyCode.indexOf(value);
        const key = keys[indexKeyCode];
        screen.textContent += key.innerHTML;
    }
  }
};

window.addEventListener("error", () => {
  screen.textContent = "Error";
});
