addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const btn = document.getElementById("button");
  const slider = document.getElementById("myRange");
  

  function makeGrid(rows, cols) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);
    for (i = 0; i < rows * cols; i++) {
      let cell = document.createElement("div");
      container.appendChild(cell).className = "grid-item";
    }
  }

  function black() {
      container.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "black";
      });
  }

  makeGrid(slider.value, slider.value);
  black();

  function deleteGrid() {
    container.innerHTML = "";
    container.style.setProperty("--grid-rows", 1);
    container.style.setProperty("--grid-cols", 1);
    return;
  }

  function newGrid() {
    deleteGrid();
    makeGrid(slider.value, slider.value);
  }

  slider.oninput = () => {
    deleteGrid();
    makeGrid(slider.value, slider.value);
  };
  btn.addEventListener("click", newGrid);
});
