const allBtn = document.getElementsByClassName("add-ticket");
let count = 0;
const selectContainer = document.getElementById("selected-seat-container");

for (const btn of allBtn) {
    btn.addEventListener("click", function (event) {
       const firstSeatCount=getConvertedValue("seat-count");
       if(firstSeatCount+1>4){
        alert("Completed seat");
        return;
       }
        count = count + 1;
        
        //update seats left
        const seatsLeft=getConvertedValue("seat-left");
        document.getElementById("seat-left").innerText = seatsLeft - 1;


        event.target.style.backgroundColor = "green";
        const seatName = event.target.innerText;

        const li = document.createElement("li");
        li.classList.add("selected-seat")

        const p = document.createElement("p");
        p.innerText = seatName;
        const p1 = document.createElement("p");
        p1.innerText = "Economoy";
        const p2 = document.createElement("p");
        p2.innerText = "550";
        li.appendChild(p);
        li.appendChild(p1);
        li.appendChild(p2);
        selectContainer.appendChild(li);
        setInnerText("seat-count", count);
        updateTotalPrice(550);
        updateGrandTotal();
    })

}

function updateGrandTotal(status) {
    const totalPrice = getConvertedValue("total-price");
    if (status == undefined) {
        document.getElementById("grand-total").innerText = totalPrice;
    }
    else {
        const copunCode=document.getElementById("coupon-code").value;
        if(copunCode == "NEW15"){
            const discounted=totalPrice*.15;
           document.getElementById("grand-total").innerText =totalPrice - discounted;
           console.log(discounted);
        }
        else if(copunCode == "Couple20"){
            const discounted=totalPrice*.2;
            document.getElementById("grand-total").innerText =totalPrice-discounted;
        }
        else{
           alert("Please enter valid coupon code");
        }
    }
}


function updateTotalPrice(value) {
    const totalPrice = getConvertedValue("total-price");
    const sum = totalPrice + parseInt(value);
    document.getElementById("total-price").innerText = sum;
}

function getConvertedValue(id) {
    const price = document.getElementById(id).innerText;
    const convertPrice = parseInt(price);
    return convertPrice;
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}