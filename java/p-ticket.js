// Scroll Bar Section

const element = document.getElementById("ticket-form");

function scrollToTop() {
  element.scrollIntoView(true);
}
// budget converted
const price = getConvertedValue ("budget");





// target button
const allBtn = document.getElementsByClassName("add-button");
for (const btn of allBtn){
    btn.addEventListener("click", function(event){
    const seat = event.target.parentNode.childNodes[1].innerText;
    
    const selectedContainer = document.getElementById("selected-container");
    
  
    
    const div = document.createElement("div");
    div.classList.add("flex")
    div.classList.add("justify-between")
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");

    p1.innerText = seat;
    p2.innerText ="Economoy";
    p3.innerText = 550;
    
    event.target.setAttribute("disabled", false);
   
    const seatCount = getConvertedValue ("seat-cart")
    if(seatCount+1>4){
        alert ("Limit Finished")
        return;
}
event.target.parentNode.style.backgroundColor="green";
event.target.parentNode.style.borderRadius="10px";
event.target.parentNode.style.Color="red"

    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    selectedContainer.appendChild(div);
    updateTotalCost(price)
    grandTotal()
    totalSeatCount()
    })
    
}




// total cost function
function updateTotalCost(value){
    const totalCost = getConvertedValue("total-cost")
    const sum = totalCost + value
    document.getElementById("total-cost").innerText=sum
}

// validate seat



// Update Seat

    function totalSeatCount(){
        const seatTotal = getConvertedValue ("seat-count")
    document.getElementById("seat-count").innerText = seatTotal-1

        const seatCount = getConvertedValue ("seat-cart")
    document.getElementById("seat-cart").innerText = seatCount+1

    }
// grand total function
function grandTotal(status){
    const totalCost = getConvertedValue("total-cost");
    if (status==undefined){
        
    document.getElementById("grand-total").innerText=totalCost;
    }
    else{
        const cuponCode = document.getElementById("cupon-code").value
        if(cuponCode=="NEW15"){
            const discounted= totalCost*15/100;
            document.getElementById("grand-total").innerText=totalCost-discounted;
        }
        else{
            const cuponCode = document.getElementById("cupon-code").value
            if(cuponCode=="Couple 20"){
                const discounted= totalCost*20/100;
                document.getElementById("grand-total").innerText=totalCost-discounted;
        }
            else(
                alert("Please enter the valid coupone code")
            )
    }  
}
}
    
// budget conveted function
function getConvertedValue (id){
    const price = document.getElementById(id).innerText;
    const convertPrice = parseInt(price);
    return convertPrice;
}

