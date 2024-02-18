const selectedSeat = document.getElementById("selected-seat");
const seatLeft = document.getElementById("seats-left");
let totalPriceValue = 0;
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
    // TOTAL PRICE SECTION
    const totalPriceElement = document.getElementById("total-price");
    totalPriceValue = totalPriceValue + 550;
    totalPriceElement.innerText = totalPriceValue;

    // DISABLE THE KEY TO AVOID REPITATION
    key.setAttribute("disabled", true);

    // workingn with coupon
    const grandTotalPrice = document.getElementById("grand-total-price");
    document
      .getElementById("apply-coupon-code")
      .addEventListener("click", function () {
        const couponText15 = document
          .getElementById("coupon-section")
          .value.split(" ")
          .join("")
          .toLowerCase();
        // const coupon = couponText15.
        const couponText20 = document
          .getElementById("coupon-section")
          .value.split(" ")
          .join("")
          .toLowerCase();
        if (selectedSeatCount === 4 && couponText15 === "new15") {
          const discount = totalPriceValue * 0.15;
          grandTotalPrice.innerText = totalPriceValue - discount;
          console.log("I have 4 object", couponText15);
        } else if (selectedSeatCount === 4 && couponText20 === "couple20") {
          const discount = totalPriceValue * 0.2;
          grandTotalPrice.innerText = totalPriceValue - discount;
          console.log("Hi I am a couple hehehe");
        }
      });
    //
    // if (selectedSeatCount === 4) {
    //   console.log("seat count 4");
    // }
  });
}
// console.log(selectedSeatCount);
