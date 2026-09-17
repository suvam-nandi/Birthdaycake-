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

alert(
`Order Successful!

Customer: ${name}
Phone: ${phone}
Total Amount: ₹${total}`
);

});
