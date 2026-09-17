emailjs.init({
    publicKey: "mkFMVd9xqYDjvCMwd"
});

let count = 0;
let total = 0;

function addToCart(name, price) {
    count++;
    total += price;

    document.getElementById("cartCount").innerText = count;
    document.getElementById("total").innerText = total;

    const li = document.createElement("li");
    li.innerText = `${name} - ₹${price}`;
    document.getElementById("cartItems").appendChild(li);
}

document.getElementById("orderBtn").addEventListener("click", function () {

    const customerName = document.getElementById("name").value.trim();
    const customerPhone = document.getElementById("phone").value.trim();
    const customerAddress = document.getElementById("address").value.trim();

    if (!customerName || !customerPhone || !customerAddress) {
        alert("Please fill all details");
        return;
    }

    if (total === 0) {
        alert("Please add at least one cake");
        return;
    }

    const templateParams = {
        customer_name: customerName,
        customer_phone: customerPhone,
        customer_address: customerAddress,
        total_amount: total
    };

    emailjs.send(
    "service_rsqojeb",
    "template_3mv23bg",
    templateParams
   )
  
      .then(function (response) {

        console.log("SUCCESS!", response);

        alert("Order Sent Successfully!");

        document.getElementById("name").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("address").value = "";

        document.getElementById("cartItems").innerHTML = "";
        document.getElementById("cartCount").innerText = "0";
        document.getElementById("total").innerText = "0";

        count = 0;
        total = 0;

    })
    .catch(function (error) {

        console.log("FAILED...", error);

        alert("Order Failed: " + JSON.stringify(error));

    });

});
