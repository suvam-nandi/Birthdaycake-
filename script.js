let selectedCake = "";

function orderCake(name){
    selectedCake = name;
    document.getElementById("orderForm").style.display = "block";
}

async function submitOrder(){

    const data = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("address").value,
        cake: selectedCake,
        qty: 1
    };

    try{

        const response = await fetch(
            "https://script.google.com/macros/s/AKfycbxQyWuhkMyNsYHYFQuEK1CoZIbvTH7cObKc-XKkRu_pXFuOYv9GP5fQPv-IQBp3CEM/exec",
            {
                method: "POST",
                body: JSON.stringify(data)
            }
        );

        const result = await response.json();

        alert(
            "Thank You For Your Order ❤️\n\nOrder ID: " +
            result.orderId
        );

        document.getElementById("orderForm").style.display = "none";

    }catch(error){

        alert("Order Failed. Please Try Again.");

        console.error(error);
    }
}
