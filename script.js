const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbx1QKXwVUdAvvSpDYj2v9X3XG1N1ESOTOfE8pPciJSg_78iPx4chokhvjNJAi5GpF4/exec";

document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const submitBtn = document.getElementById("submitBtn");
  const statusMessage = document.getElementById("statusMessage");

  // Button disabled ebong loading status
  submitBtn.disabled = true;
  submitBtn.innerText = "Placing Order...";
  statusMessage.style.color = "#4a5568";
  statusMessage.innerText = "Processing your order...";

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
      // Thank you message
      statusMessage.style.color = "#2f855a";
      statusMessage.innerHTML = "🎉 <strong>Thank You!</strong> Your order at Adrit's Cake Shop has been placed successfully.";
      
      // Popup alert-o dekhabe
      alert("Thank You! Your order has been placed successfully.");

      // Form reset
      document.getElementById("orderForm").reset();
    })
    .catch((error) => {
      statusMessage.style.color = "#e53e3e";
      statusMessage.innerText = "❌ Something went wrong. Please try placing the order again.";
      console.error("Error:", error);
    })
    .finally(() => {
      submitBtn.disabled = false;
      submitBtn.innerText = "Confirm Order";
    });
});
