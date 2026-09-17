let count = 0;
let total = 0;

function addToCart(name, price){

count++;

document.getElementById("cartCount").innerText = count;

total += price;

document.getElementById("total").innerText = total;

const li = document.createElement("li");

li.innerText = `${name} - ₹${price}`;

document.getElementById("cartItems").appendChild(li);
}

document.getElementById("orderBtn").addEventListener("click",()=>{

const name = document.getElementById("name").value;
const phone = document.getElementById("phone").value;
const address = document.getElementById("address").value;

if(name==="" || phone==="" || address===""){
alert("Please fill all details");
return;
}

const message =
`🎂 New Cake Order

Customer Name: ${name}
Phone: ${phone}
Address: ${address}
Total Amount: ₹${total}`;

window.open(
`https://wa.me/919679615291?text=${encodeURIComponent(message)}`,
"_blank"
);

});

Customer: ${name}
Phone: ${phone}
Total Amount: ₹${total}`
);

});
