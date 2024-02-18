const selectedSeat = document.getElementById("selected-seat");
const seatLeft = document.getElementById("seats-left");
const selectedSeatinfo = document.getElementById("selected-seat-info");
const tableRow = document.createElement("tr");
const tableData = document.createElement("td");
const tableType = document.createElement("td");
const tablePrice = document.createElement("td");
let tableListCount = 0;
// console.log(seatName, seatType, seatPrice);
let seatLeftCount = 40;
let selectedSeatCount = 0;

const keyboard = document.querySelectorAll("kbd");
for (const key of keyboard) {
  key.addEventListener("click", function () {
    // MAKING BACKGROUND GREEN
    const keyStyle = key.style;
    keyStyle.backgroundColor = "#1DD100";
    keyStyle.color = "white";
    keyStyle.border = "none";
    // INCREASING AND DECREASIGN SEAT COUNT
    selectedSeatCount += 1;
    seatLeftCount = seatLeftCount - 1;
    selectedSeat.innerText = selectedSeatCount;
    seatLeft.innerText = seatLeftCount;
    // WORKING WITH SEAT DETAIL
    tableData.innerText = key.innerText;
    tableType.innerText = "Economy";
    tablePrice.innerText = 550;
    tableRow.appendChild(tableData);
    tableRow.appendChild(tableType);
    tableRow.appendChild(tablePrice);
    selectedSeatinfo.appendChild(tableRow);
    tableListCount++;
  });
}
// console.log(kbd[0].innerText);
