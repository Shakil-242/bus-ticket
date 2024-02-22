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
    
  
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    selectedContainer.appendChild(div);
   
    })
}



// budget conveted function
function getConvertedValue (id){
    const price = document.getElementById(id).innerText;
    const convertPrice = parseInt(price);
    return convertPrice;
}

