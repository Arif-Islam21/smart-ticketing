const selectedSeat = document.getElementById("selected-seat");
let selectedSeatCount = 0;

const keyboard = document.querySelectorAll("kbd");
for (const key of keyboard) {
  key.addEventListener("click", function () {
    const keyStyle = key.style;
    keyStyle.backgroundColor = "#1DD100";
    keyStyle.color = "white";
    keyStyle.border = "none";
    selectedSeatCount += 1;
    selectedSeat.innerText = selectedSeatCount;
    console.log(selectedSeatCount);
  });
}
// console.log(kbd[0].innerText);
