/* -------------------------------------------------------------------------- */
/*                       COMMON FUNCTIONALLITY FOR REUSE                      */
/* -------------------------------------------------------------------------- */
/////////////UPDATE TOTAL QUANTITY
function updateQuantity(product, price, isIncreasing) {
  let productQuantityField = document.getElementById(`${product}-quantity`);
  let productQuantity = parseInt(productQuantityField.value);

  //conditions
  if (isIncreasing == true) {
    productQuantity++;
  } else if (productQuantity > 0) {
    productQuantity--;
  }

  productQuantityField.value = productQuantity;

  //update total product amount
  let productTotalAmount = document.getElementById(`${product}-total`);
  productTotalAmount.innerText = productQuantity * price;

  //calculated total amount
  calculateTotal(product);
}
/////////////GET QUANTITY NUMBER
function getQuantity(product) {
  let productQuantityField = document.getElementById(`${product}-quantity`);
  let productQuantity = parseInt(productQuantityField.value);
  return productQuantity;
}

/////////////CALCULATE TOTAL AMOUNT
function calculateTotal() {
  // products total amount
  let phoneTotal = getQuantity("phone") * 1219;
  let caseTotal = getQuantity("case") * 59;
  let subTotal = phoneTotal + caseTotal;
  let tax = parseInt(subTotal * 0.1);

  //update amount on html
  document.getElementById("sub-total").innerText = subTotal;
  document.getElementById("tax-amount").innerText = tax;
  document.getElementById("total-amount").innerText = subTotal + tax;
}

/* -------------------------------------------------------------------------- */
/*                     PLUS & MINUS BUTTON FUNCTIONALLITY                     */
/* -------------------------------------------------------------------------- */
/* ------------------------ PHONE QUANTITY (PLUS) BUTTON ----------------------- */
document.getElementById("phone-plus").addEventListener("click", function () {
  updateQuantity("phone", 1219, true);
});

/* ------------------------ PHONE QUANTITY (MINUS) BUTTON ----------------------- */
document.getElementById("phone-minus").addEventListener("click", function () {
  updateQuantity("phone", 1219, false);
});

/* ------------------------ CASE QUANTITY (PLUS) BUTTON ----------------------- */
document.getElementById("case-plus").addEventListener("click", function () {
  updateQuantity("case", 59, true);
});

/* ------------------------ CASE QUANTITY (MINUS) BUTTON ----------------------- */
document.getElementById("case-minus").addEventListener("click", function () {
  updateQuantity("case", 59, false);
});

/* -------------------------------------------------------------------------- */
/*                       CHECKOUT BUTTON FUNCTIONALLITY                       */
/* -------------------------------------------------------------------------- */
document.getElementById("checkout-btn").addEventListener("click", function () {
  let totalBill = document.getElementById("total-amount").innerText;
  alert(`  Your total bill is $${totalBill}.
  Thanks for shopping!📱`);
});
