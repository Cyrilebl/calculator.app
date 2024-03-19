let whiteMode = localStorage.getItem("whiteMode");
let purpleMode = localStorage.getItem("purpleMode");

const toggleButton = document.querySelector(".toggle__input");
const toggleInput = document.querySelector(".toggle__button");

// Default mode

const enableDefaultMode = () => {
  document.body.classList.remove("theme2", "theme3");
  localStorage.removeItem("whiteMode");
  localStorage.removeItem("purpleMode");
};

// White Mode

const enableWhiteMode = () => {
  document.body.classList.add("theme2");

  localStorage.setItem("whiteMode", "enabled");
};

const disableWhiteMode = () => {
  document.body.classList.remove("theme2");

  localStorage.setItem("whiteMode", "null");
};

// Purple Mode

const enablePurpleMode = () => {
  document.body.classList.add("theme3");

  localStorage.setItem("purpleMode", "enabled");
};

const disablePurpleMode = () => {
  document.body.classList.remove("theme3");

  localStorage.setItem("purpleMode", "null");
};

let clickCount = 0;
let translationValue = 0;

toggleButton.addEventListener("click", () => {
  whiteMode = localStorage.getItem("whiteMode");
  purpleMode = localStorage.getItem("purpleMode");

  clickCount++;
  translationValue += 19;

  if (whiteMode !== "enabled") {
    enableWhiteMode();
    toggleInput.classList.add("translated");

    toggleInput.style.setProperty(
      "--translation-value",
      `${translationValue}px`
    );
  } else if (purpleMode !== "enabled") {
    enablePurpleMode();

    toggleInput.classList.add("translated");

    toggleInput.style.setProperty(
      "--translation-value",
      `${translationValue}px`
    );
  } else {
    enableDefaultMode();

    toggleInput.classList.remove("translated");
    clickCount = 0;
    translationValue = 0;
  }
});
