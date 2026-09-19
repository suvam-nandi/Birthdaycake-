const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbx1QKXwVUdAvvSpDYj2v9X3XG1N1ESOTOfE8pPciJSg_78iPx4chokhvjNJAi5GpF4/exec";

document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const submitBtn = document.getElementById("submitBtn");
  const statusMessage = document.getElementById("statusMessage");

  submitBtn.disabled = true;
  submitBtn.innerText = "Placing Order...";
  statusMessage.innerText = "";

  const orderData = {
    customer_name: document.getElementById("customer_name").value,
    customer_phone: document.getElementById("customer_phone").value,
    customer_address: document.getElementById("customer_address").value,
    total_amount: document.getElementById("total_amount").value
  };

  fetch(GOOGLE_SHEET_URL, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(orderData)
  })
    .then(() => {
      statusMessage.style.color = "green";
      statusMessage.innerText = "Order placed successfully!";
      document.getElementById("orderForm").reset();
    })
    .catch((error) => {
      statusMessage.style.color = "red";
      statusMessage.innerText = "Error placing order. Please try again.";
      console.error("Error:", error);
    })
    .finally(() => {
      submitBtn.disabled = false;
      submitBtn.innerText = "Place Order";
    });
});
