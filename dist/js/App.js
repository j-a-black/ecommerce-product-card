"use strict";

window.addEventListener("DOMContentLoaded", initApp());

function initApp() {
  const itemQty = document.querySelector(".item-qty-js");
  const decreaseQty = document.querySelector(".decrement");
  const increaseQty = document.querySelector(".increment");
  let itemQtyValue = itemQty.value;

  increaseQty.addEventListener("click", () => {
    itemQtyValue++;
    console.log(itemQtyValue);
    itemQty.value = itemQtyValue;
    console.log(itemQty);
  });

  decreaseQty.addEventListener("click", () => {
    if (itemQtyValue < 2) return;
    itemQtyValue--;
    console.log(itemQtyValue);
    itemQty.value = itemQtyValue;
    console.log(itemQty);
  });
}
