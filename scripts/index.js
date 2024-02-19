const selectedSeat = document.getElementById("selected-seat");
const couponCodeBtn = document.getElementById("apply-coupon-code");
const grandTotalPrice = document.getElementById("grand-total-price");
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
    const keybrd = document.querySelectorAll("kbd");
    if (selectedSeatCount > 4) {
      alert("You can't select more then 4 ticket");
      key.style.backgroundColor = "#f3f4f6";
      key.style.color = "grey";
      selectedSeatCount = selectedSeatCount - 1;
      seatLeftCount = seatLeftCount + 1;
      selectedSeat.innerText = selectedSeatCount;
      seatLeft.innerText = seatLeftCount;
      selectedSeatinfo.removeChild(tableRow);
      totalPriceValue = totalPriceValue - 550;
    }

    // workingn with coupon

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

couponCodeBtn.addEventListener("click", function () {
  let discount = 1;
  const couponText = document
    .getElementById("coupon-section")
    .value.split(" ")
    .join("")
    .toLowerCase();
  if (selectedSeatCount === 4 && couponText === "new15") {
    discount = totalPriceValue * 0.15;
    grandTotalPrice.innerText = totalPriceValue - discount;
    document.getElementById("coupon-input-section").classList.add("hidden");
  } else if (selectedSeatCount === 4 && couponText === "couple20") {
    discount = totalPriceValue * 0.2;
    grandTotalPrice.innerText = totalPriceValue - discount;
    document.getElementById("coupon-input-section").classList.add("hidden");
  } else {
    alert("PLease Enter Valid Coupon Code");
  }
  // MAKING DISCOUNT DIV
  const discountTitle = "Discount";
  const discountPrice = discount;
  const discountDiv = document.getElementById("discount-div");
  const h4 = document.createElement("h4");
  const h5 = document.createElement("h5");
  const div = document.createElement("div");
  div.classList.add("text-[#030712]");
  div.classList.add("my-2");
  div.classList.add("flex");
  div.classList.add("justify-between");
  div.classList.add("font-bold");
  div.classList.add("border-b-2");
  div.classList.add("pb-2");
  h4.innerText = discountTitle;
  h5.innerText = "(-)" + " " + discountPrice;
  div.appendChild(h4);
  div.appendChild(h5);
  discountDiv.appendChild(div);
});
