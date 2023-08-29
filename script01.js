document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll("button");
  let currentInput = "";

  buttons.forEach(button => {
    button.addEventListener("click", function () {
      const value = button.textContent;

      if (value === "=") {
        try {
          const result = eval(currentInput);
          display.value = result;
          currentInput = result;
        } catch (error) {
          display.value = "Error";
        }
      } else if (value === "C") {
        display.value = "";
        currentInput = "";
      } else {
        currentInput += value;
        display.value = currentInput;
      }
    });
  });
});
