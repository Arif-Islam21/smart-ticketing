const selectedSeat = document.getElementById("selected-seat");
const seatLeft = document.getElementById("seats-left");
let totalPriceElement = document.getElementById("total-price");
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
    const tableData = document.createElement("td");
    tableData.innerText = key.innerText;
    const tableType = document.createElement("td");
    tableType.innerText = "Economy";
    const tablePrice = document.createElement("td");
    tablePrice.innerText = 550;
    const tableRow = document.createElement("tr");
    tableRow.appendChild(tableData);
    tableRow.appendChild(tableType);
    tableRow.appendChild(tablePrice);
    const selectedSeatinfo = document.getElementById("selected-seat-info");
    selectedSeatinfo.appendChild(tableRow);
    // tableListCount++;
  });
}
// console.log(kbd[0].innerText);
