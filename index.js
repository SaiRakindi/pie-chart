const pieCharElement = document.querySelector(".piechart");

document.querySelector("#inputHandler").addEventListener("input", (event) => {
  pieCharElement.style = `--percentage: ${event.target.value}%`;
});
