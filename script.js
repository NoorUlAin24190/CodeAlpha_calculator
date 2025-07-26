const display = document.getElementById("display");
const historyList = document.getElementById("historyList");

// Append value to display
function appendValue(value) {
  display.value += value;
}

// Clear the display
function clearDisplay() {
  display.value = "";
}

// Perform calculation and store in history
function calculate() {
  try {
    const result = eval(display.value);
    addToHistory(`${display.value} = ${result}`);
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}

// Add entry to history
function addToHistory(entry) {
  const li = document.createElement("li");
  li.textContent = entry;
  historyList.prepend(li); // Newest on top
}

// Clear history
function clearHistory() {
  historyList.innerHTML = "";
}

// Bonus: Keyboard support
document.addEventListener("keydown", function (e) {
  if ((e.key >= "0" && e.key <= "9") || "+-*/.".includes(e.key)) {
    appendValue(e.key);
  } else if (e.key === "Enter") {
    calculate();
  } else if (e.key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (e.key === "Escape") {
    clearDisplay();
  }
});
