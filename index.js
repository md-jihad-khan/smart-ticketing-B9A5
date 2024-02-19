let selectedSeat = 0;
let seatleft = 8;
const ticketprice = 550;
let totalPrice = 0;
let grandTotal = 0;

const seats = document.querySelectorAll(".seats");

for (let i = 0; i < seats.length; i++) {
  const seat = seats[i];

  seat.addEventListener("click", function () {
    if ((selectedSeat < 4) & !seat.classList.contains("selected")) {
      const title = seat.innerText;
      selectedSeat = selectedSeat + 1;
      seatleft = seatleft - 1;
      element = document.getElementById(title);
      element.classList.remove("bg-[#F7F8F8]");
      element.classList.add("bg-[#1DD100]");

      const seatElement = document.getElementById("selected-seat");
      seat.classList.add("selected");
      seatElement.innerText = selectedSeat;
      const seatleftElement = document.getElementById("Seats-left");
      seatleftElement.innerText = seatleft;
      totalPrice = totalPrice + ticketprice;
      grandTotal = totalPrice;
      document.getElementById("total-Price").innerText = totalPrice;
      document.getElementById("Grand-Total").innerText = grandTotal;

      const paymentContainer = document.getElementById("payment-info");
      const div = document.createElement("div");
      const seatNumber = document.createElement("p");
      seatNumber.innerText = title;
      const clas = document.createElement("p");
      clas.innerText = "Economoy";
      const price = document.createElement("p");
      price.innerText = ticketprice;
      div.classList.add("payment");
      div.append(seatNumber, clas, price);
      paymentContainer.appendChild(div);
    } else if (seat.classList.contains("selected")) {
      alert("You have selected the ticket");
    } else {
      alert("You can't buy more ticket");
    }
    if (totalPrice >= 2200) {
      const coupon = document.getElementById("input-field");
      coupon.removeAttribute("disabled");
      const applyBtn = document.getElementById("apply-btn");
      applyBtn.removeAttribute("disabled");
    }
  });
}

const btn = document.getElementById("apply-btn");
btn.addEventListener("click", function () {
  const coupon = document.getElementById("input-field").value;

  if (coupon === "NEW15") {
    // discount
    const discountElement = document.getElementById("Grand-Total");
    const discountedElement = document.getElementById("discounted-price");
    const discounteddivElement = document.getElementById("Discounted-div");
    discounteddivElement.classList.remove("hidden");
    const discountPrice = (totalPrice / 100) * 15;
    discountedElement.innerText = discountPrice;
    discountElement.innerText = grandTotal - discountPrice;
    document.getElementById("inputdiv").classList.add("hidden");
  } else if (coupon === "Couple 20") {
    // discount
    const discountElement = document.getElementById("Grand-Total");
    const discountedElement = document.getElementById("discounted-price");
    const discounteddivElement = document.getElementById("Discounted-div");
    discounteddivElement.classList.remove("hidden");
    const discountPrice = (totalPrice / 100) * 20;
    discountedElement.innerText = discountPrice;
    discountElement.innerText = grandTotal - discountPrice;
    document.getElementById("inputdiv").classList.add("hidden");
  } else {
    alert("invalid coupon code");
    document.getElementById("input-field").value = "";
  }
});

const inputField = document.getElementById("input-number");
const nextButton = document.getElementById("nextbtn");

inputField.addEventListener("input", function () {
  if (selectedSeat > 0 && !isNaN(inputField.value)) {
    nextButton.removeAttribute("disabled");
  }
});
