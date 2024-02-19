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

    // DISABLE ALL KEY WHEN 4 SEAT BOOKED
    // console.log(selectedSeatCount);
    // const keybrd = document.querySelectorAll("kbd");
    // if (selectedSeatCount > 4) {
    //   // key.setAttribute("disabled", true);
    // }

    // workingn with coupon
    const grandTotalPrice = document.getElementById("grand-total-price");
    const couponCodeBtn = document.getElementById("apply-coupon-code");
    grandTotalPrice.innerText = totalPriceValue;

    // console.log(document.getElementById("coupon-section").innerText);
    document
      .getElementById("coupon-section")
      .addEventListener("keyup", function () {
        const couponText2 = document
          .getElementById("coupon-section")
          .value.split(" ")
          .join("")
          .toLowerCase();
        if (selectedSeatCount === 4) {
          if (couponText2 === "new15" || couponText2 === "couple20") {
            couponCodeBtn.removeAttribute("disabled", false);
          }
        } else if (selectedSeatCount !== 4) {
          couponCodeBtn.setAttribute("disabled", true);
        }
      });

    couponCodeBtn.addEventListener("click", function () {
      const couponText = document
        .getElementById("coupon-section")
        .value.split(" ")
        .join("")
        .toLowerCase();
      if (selectedSeatCount === 4 && couponText === "new15") {
        const discount = totalPriceValue * 0.15;
        grandTotalPrice.innerText = totalPriceValue - discount;
        document.getElementById("coupon-input-section").classList.add("hidden");
      } else if (selectedSeatCount === 4 && couponText === "couple20") {
        const discount = totalPriceValue * 0.2;
        grandTotalPrice.innerText = totalPriceValue - discount;
        document.getElementById("coupon-input-section").classList.add("hidden");
      } else {
        alert("PLease Enter Valid Coupon Code");
        // console.log("error");
      }
    });

    // WORKING WITH THE NEXT BUTTON
    const passengerName = document.getElementById("passenger-name-element");
    const passengerPhone = document.getElementById("passenger-phone-element");
    const nextButton = document.getElementById("next-buttton");
    passengerPhone.addEventListener("keyup", passengerInfo);
    passengerName.addEventListener("keyup", passengerInfo);
    function passengerInfo() {
      const name = passengerName.value.length;
      const phone = passengerPhone.value.length;
      if (name === 0 && phone === 0) {
        nextButton.setAttribute("disabled", true);
      } else if (name >= 1 && phone >= 1) {
        nextButton.removeAttribute("disabled", false);
      }
    }
    // working with next button and modal
    document
      .getElementById("next-buttton")
      .addEventListener("click", function () {
        passengerName.value = "";
        passengerPhone.value = "";
        document.getElementById("passenger-email").value = "";
      });
  });
}
