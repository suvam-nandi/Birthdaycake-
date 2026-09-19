let selectedCake = "";

function orderCake(cakeName) {
    selectedCake = cakeName;
    document.getElementById("orderForm").style.display = "block";
}

function closePopup() {
    document.getElementById("orderForm").style.display = "none";
}

async function submitOrder() {

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();

    if (!name || !phone || !address) {
        alert("Please fill all fields.");
        return;
    }

    const data = {
        name: name,
        phone: phone,
        address: address,
        cake: selectedCake,
        qty: 1
    };

    try {

        const response = await fetch(
            "https://script.google.com/macros/s/AKfycbxQyWuhkMyNsYHYFQuEK1CoZIbvTH7cObKc-XKkRu_pXFuOYv9GP5fQPv-IQBp3CEM/exec",
            {
                method: "POST",
                body: JSON.stringify(data)
            }
        );

        const result = await response.json();

        alert(
            "🎉 Thank You For Your Order!\n\n" +
            "Cake: " + selectedCake + "\n\n" +
            "Order ID: " + result.orderId
        );

        document.getElementById("name").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("address").value = "";

        closePopup();

    } catch (error) {

        console.error(error);

        alert(
            "Order Failed!\nPlease try again."
        );
    }
}
