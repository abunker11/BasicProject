function changePrice(currentPriceId){
    var itemPrice = document.getElementById(currentPriceId);
    var newPrice = prompt("What is the new price?");
    itemPrice.innerHTML = newPrice;
}
